import type { PageServerLoad } from './$types';
import api from '$lib/server/api';
import { redirect } from '@sveltejs/kit';
import { calculateTotalPages, getPaginationParams } from '$lib/server/pagination';

export const load: PageServerLoad = async ({ params, url }) => {
	const { pageNum, skip, limit } = getPaginationParams(url);
	const [entity, { transactions, total }, validatorRewards] = await Promise.all([
		api.resolveEntity(params.address),
		await api.getTransactions({
			skip,
			limit,
			address: params.address
		}),
		api.getValidatorRewards(params.address, {
			skip,
			offset: skip,
			page: pageNum,
			limit
		})
	]);

	const rewardsTotal = Number(
		validatorRewards?.pagination?.total ?? validatorRewards?.summary?.blocksProduced ?? 0
	);

	const urlPath = `/${entity.kind}/${params.address ?? ''}`;
	if (['address', 'contract', 'token'].includes(entity.kind) && !url.pathname.startsWith(urlPath)) {
		throw redirect(301, urlPath);
	}

	return {
		entity: entity.data,
		kind: entity.kind,
		transactions,
		total,
		totalPages: calculateTotalPages(total, limit),
		validatorRewards,
		validatorRewardsTotalPages: calculateTotalPages(rewardsTotal, limit)
	};
};
