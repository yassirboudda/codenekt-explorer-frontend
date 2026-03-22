<script lang="ts">
	import BlocksNumberStat from '$lib/components/home/BlocksNumberStat.svelte';
	import TxsNumberStat from '$lib/components/home/TxsNumberStat.svelte';
	import GasPriceStat from '$lib/components/home/GasPriceStat.svelte';
	import ChainIdStat from '$lib/components/home/ChainIdStat.svelte';
	import LatestTxsChart from '$lib/components/home/LatestTxsChart.svelte';
	import LatestBlocksList from '$lib/components/home/LatestBlocksList.svelte';
	import LatestTxsList from '$lib/components/home/LatestTxsList.svelte';
	import InfoIcon from 'virtual:icons/hugeicons/information-square'
	import {isFullyIndexed} from "$lib/utils";

	export let data;
</script>

<svelte:head>
	<title>CodeNekt L1 Explorer</title>
	<meta name="description" content="CodeNekt L1 Blockchain Explorer - Explore blocks, transactions, and addresses on the CodeNekt L1 network." />
</svelte:head>

{#if isFullyIndexed()}
	<div class="container mx-4 grid grid-cols-1 md:grid-cols-6 xl:grid-cols-12">
		<div class="col-span-4 flex w-full flex-col gap-2 rounded-xl bg-base-200">
			<GasPriceStat />
			<ChainIdStat />
		</div>
		<div class="col-span-4 flex w-full flex-col gap-2">
			<BlocksNumberStat />
			<TxsNumberStat txsCount={data.txsCount} />
		</div>
		<div class="col-span-4">
			<LatestTxsChart />
		</div>
	</div>
{:else}
	<div class="container mx-4 grid grid-cols-1 md:grid-cols-3">
		<GasPriceStat />
		<ChainIdStat />
		<BlocksNumberStat />
	</div>
	<div class="container flex items-center mx-4 !px-4">
		<InfoIcon class="text-xl min-w-10" />
		<span>This explorer is not fully indexed, which means the following lists may be outdated. However, you can always explore live data by searching for a transaction hash, address, etc.</span>
	</div>
{/if}

<div class="container grid flex-1 grid-cols-1 sm:grid-cols-2">
	<div class="list-col">
		<div class="title">
			<span>Latest Transactions</span>
			<a href="/txs" class="btn ml-auto">View All</a>
		</div>
		<LatestTxsList latestTxs={data.latestTxs} />
	</div>
	<div class="list-col">
		<div class="title">
			<span>Latest Blocks</span>
			<a href="/blocks" class="btn ml-auto">View All</a>
		</div>
		<LatestBlocksList latestBlocks={data.latestBlocks} />
	</div>
</div>

<style lang="postcss">
	@reference "$lib/../app.css";
	.container {
		@apply gap-2 p-2;
		@apply mx-auto rounded-2xl;
		background: rgba(17, 17, 25, 0.4);
		border: 1px solid rgba(255, 255, 255, 0.04);
	}
	.list-col {
		@apply flex h-full w-full flex-col gap-2;
		> .title {
			@apply flex items-center gap-2 p-4 pl-6;
			@apply rounded-xl text-xl font-semibold tracking-tight;
			background: rgba(17, 17, 25, 0.5);
			border: 1px solid rgba(255, 255, 255, 0.04);
			span {
				background: linear-gradient(135deg, #e8e8f0 0%, rgba(232,232,240,0.6) 100%);
				-webkit-background-clip: text;
				-webkit-text-fill-color: transparent;
				background-clip: text;
			}
		}
	}
</style>
