<script lang="ts">
	import EntityList from '$lib/components/data/EntityList.svelte';
	import { formatAddress, formatCdkAmount } from '$lib/utils';

	export let data;
</script>

<EntityList
	title="Validator Rewards"
	breadcrumbTitle="Validator rewards"
	items={data.rewards}
	totalPages={data.totalPages}
	getItemHref={(row) => `/address/${row.address}`}
>
	<svelte:fragment slot="item" let:item={row}>
		<div class="list-item no-link">
			<div class="grid-row">
				<div class="col address-col">
					<div class="label">Validator</div>
					<a href="/address/{row.address}" class="value link">{formatAddress(row.address, 8)}</a>
				</div>
				<div class="col">
					<div class="label">Blocks Produced</div>
					<div class="value">{row.blocksProduced ?? 0}</div>
				</div>
				<div class="col">
					<div class="label">Total Rewards</div>
					<div class="value">{formatCdkAmount(row.totalRewardCDK ?? 0, { maxDecimals: 0 })} CDK</div>
				</div>
				<div class="col">
					<div class="label">Latest Block</div>
					<a href="/block/{row.latestBlock}" class="value link">#{row.latestBlock ?? 0}</a>
				</div>
			</div>
		</div>
	</svelte:fragment>
</EntityList>

<style lang="postcss">
	@reference "$lib/../app.css";
	.no-link {
		cursor: default;
	}
	.grid-row {
		@apply grid gap-4 items-center;
		grid-template-columns: minmax(220px, 1.2fr) repeat(3, minmax(140px, 1fr));
	}
	.col {
		@apply flex flex-col;
	}
	.label {
		@apply text-xs uppercase tracking-wide text-base-content/60;
	}
	.value {
		@apply text-sm md:text-base font-medium;
	}
	.address-col .value {
		@apply break-all;
	}
	@media (max-width: 900px) {
		.grid-row {
			grid-template-columns: 1fr 1fr;
		}
	}
	@media (max-width: 560px) {
		.grid-row {
			grid-template-columns: 1fr;
		}
	}
</style>
