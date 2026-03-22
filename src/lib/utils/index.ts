import {PUBLIC_RPC_URL} from "$env/static/public";

export * from '$lib/utils/format';
export * from '$lib/utils/transaction';
export * from '$lib/utils/contract';

export const isFullyIndexed = () => {
	return PUBLIC_RPC_URL !== 'https://rpc1.codenekt-ecosystem.io/'
}