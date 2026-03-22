<script lang="ts">
	import Searchbar from '$lib/components/layout/Searchbar.svelte';
</script>

<div class="header-nav">
	<div class="container mx-auto flex items-center gap-2">
		<a href="/" class="logo-link">
			<img src="/logo.png" alt="CodeNekt Logo" height="38" width="38" />
			<span class="logo-text">CodeNekt <span class="gradient-text">Explorer</span></span>
		</a>
		<Searchbar class="ml-auto min-w-1/3" />
	</div>
</div>

<style lang="postcss">
	@reference "$lib/../app.css";
	.header-nav {
		@apply sticky top-0 z-40 h-[4rem];
		background: rgba(8, 8, 14, 0.8);
		backdrop-filter: blur(20px);
		-webkit-backdrop-filter: blur(20px);
		border-bottom: 1px solid rgba(255, 255, 255, 0.06);
		display: flex;
		align-items: center;
	}
	.logo-link {
		@apply flex items-center gap-3 rounded-xl p-2 pr-4 pl-3 transition-all duration-200;
		&:hover {
			background: rgba(255, 255, 255, 0.04);
		}
	}
	.logo-text {
		@apply text-lg font-semibold tracking-tight;
	}
</style>
