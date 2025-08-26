<script lang="ts">
	import { onMount } from 'svelte';
	import ClipboardCopyBtn from '$lib/components/utilities/ClipboardCopyBtn.svelte';

	import ContractIcon from 'virtual:icons/hugeicons/file-01';
	import WalletIcon from 'virtual:icons/hugeicons/wallet-01';

	export let address;
	export let kind = 'address';
	export let href = '#';
	export let isLoading = true;

	onMount(async () => {
		if(href === '#') {
			const entity = await fetch(`/api/entity/resolve/${address}`).then((res) => res.json());
			kind = entity.kind
			href = `/${kind ?? 'address'}/${address}`;
			isLoading = false;
		}
	});
</script>

<div class="badge h-auto max-w-full bg-base-200 badge-lg">
	<a
		href={href.replace('undefined', 'address')}
		on:click={(e) => {
			e.preventDefault();
			window.location.href = href;
		}}
		class="flex flex-1 items-center gap-2 overflow-hidden"
	>
		{#if isLoading}
			<span class="loading loading-xs loading-dots"></span>
		{:else if kind === 'contract'}
			<ContractIcon />
		{:else}
			<WalletIcon />
		{/if}
		<span class="ml-2">{address}</span>
	</a>
	<ClipboardCopyBtn value={address} />
</div>
