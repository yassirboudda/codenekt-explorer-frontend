<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/layout/Header.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';
	import PagePreloader from '$lib/components/PagePreloader.svelte';
	import BackToTop from '$lib/components/utilities/BackToTop.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href="/favicon.svg" />
</svelte:head>

<div class="flex min-h-screen w-screen flex-col">
	<Header />
	<div class="main-content-wrapper flex flex-1 flex-col gap-4 px-1 py-2 sm:py-4">
		{@render children?.()}
	</div>
	<Footer />
</div>

<PagePreloader />
<BackToTop />

<style lang="postcss">
	@reference "$lib/../app.css";
	.main-content-wrapper {
		min-height: calc(100vh - calc(var(--spacing) * 8));
	}
</style>
