<script lang="ts">
	import DataList from '$lib/components/data/DataList.svelte';
	import DataListItem_Transaction from '$lib/components/data/DataListItem_Transaction.svelte';

	export let isLoading = false;
	export let transactions: any[] = [];
	export let nativeSymbol: string = 'ETH';
	export let highlightAddress: string = '';
	export let totalPages: number = 1;
	export let showPagination: boolean = true;

	let className = '';
	export { className as class };
</script>

{#if isLoading}
	<div class="h-42 w-full skeleton"></div>
{:else}
	<DataList
		class={className}
		items={transactions}
		getItemHref={(tx) => `/tx/${tx.hash}`}
		totalPages={showPagination ? totalPages : 1}
		{showPagination}
	>
		<svelte:fragment slot="item" let:item={tx} let:i>
			<DataListItem_Transaction {tx} {i} {nativeSymbol} {highlightAddress} />
		</svelte:fragment>
	</DataList>
{/if}
