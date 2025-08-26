import type { PageServerLoad } from './$types';
import api from '$lib/server/api';
import { redirect } from '@sveltejs/kit';
import {calculateTotalPages} from "$lib/server/pagination";

export const load: PageServerLoad = async ({ params, url }) => {
	const res = await api.resolveEntity(params.address)

	const urlPath = `/${res.kind}/${params.address ?? ''}`
	if (['address', 'contract', 'token'].includes(res.kind)  && !url.pathname.startsWith(urlPath)) {
		throw redirect(301, urlPath);
	}

	return {
		entity: res.data,
		kind: res.kind,
		transactions: [],
		total: 0,
		totalPages: calculateTotalPages(0, 1),
	};
};
