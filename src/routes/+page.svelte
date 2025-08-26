<script lang="ts">
	import BlocksNumberStat from '$lib/components/home/BlocksNumberStat.svelte';
	import TxsNumberStat from '$lib/components/home/TxsNumberStat.svelte';
	import GasPriceStat from '$lib/components/home/GasPriceStat.svelte';
	import ChainIdStat from '$lib/components/home/ChainIdStat.svelte';
	import LatestTxsChart from '$lib/components/home/LatestTxsChart.svelte';
	import LatestBlocksList from '$lib/components/home/LatestBlocksList.svelte';
	import LatestTxsList from '$lib/components/home/LatestTxsList.svelte';

	export let data;
</script>

<svelte:head>
	<title>AMI Blockchain Explorer</title>
</svelte:head>

<div class="container">
	<div class="alert alert-info text-lg font-medium justify-center">This is a preview version, it may contain bugs or lack certain features.</div>
</div>

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
		@apply mx-auto rounded-2xl bg-base-200;
	}
	.list-col {
		@apply flex h-full w-full flex-col gap-2;
		> .title {
			@apply flex items-center gap-2 p-4 pl-6;
			@apply rounded-xl bg-base-100 text-2xl font-medium;
		}
	}
</style>
