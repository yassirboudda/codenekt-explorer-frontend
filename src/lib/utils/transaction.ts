import { ethers } from 'ethers';
import { PUBLIC_RPC_URL } from '$env/static/public';

export const getTransactionMethod = (tx: any) => {
	return tx?.method?.indexOf('(') >= 0
		? tx?.method?.split('(').shift()
		: tx?.method?.trim() === '0x'
			? null
			: tx.method;
};

export const getTxLogs = async (hash: string) => {
	const provider = new ethers.JsonRpcProvider(PUBLIC_RPC_URL);
	return (await provider.getTransactionReceipt(hash))?.logs ?? [];
};
