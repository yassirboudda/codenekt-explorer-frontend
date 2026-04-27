import type { PageServerLoad } from './$types';
import api from '$lib/server/api';
import { calculateTotalPages, getPaginationParams } from '$lib/server/pagination';

export const load: PageServerLoad = async ({ url }) => {
	try {
		const { skip, limit } = getPaginationParams(url);
		const data = await api.getValidatorsRewards({ skip, limit });
		return {
			rewards: data?.rows ?? [],
			summary: data?.summary ?? {},
			total: Number(data?.pagination?.total ?? 0),
			totalPages: calculateTotalPages(Number(data?.pagination?.total ?? 0), limit)
		};
	} catch {
		return {
			rewards: [],
			summary: {},
			total: 0,
			totalPages: 0
		};
	}
};
