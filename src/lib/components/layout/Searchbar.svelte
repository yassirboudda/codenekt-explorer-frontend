<script lang="ts">
	import SearchIcon from 'virtual:icons/hugeicons/search-02';

	let className = '';
	export { className as class };

	let isOpen = false;
</script>

<button class="searchbar-wrapper {className}" on:click={() => (isOpen = !isOpen)}>
	<input
		class="pointer-events-none"
		type="search"
		placeholder="Search by address, tx hash, block, token, ..."
	/>
	<SearchIcon />
</button>

<div class="search-modal modal" class:modal-open={isOpen} role="dialog">
	<div class="modal-box">
		<div class="search-input-wrapper">
			<input type="search" placeholder="Search by address, tx hash, block, token, ..." />
		</div>
		<div class="search-results-wrapper"></div>
	</div>
	<button class="modal-backdrop" on:click={() => (isOpen = false)}>Close</button>
</div>

<style lang="postcss">
	@reference "$lib/../app.css";
	.searchbar-wrapper {
		@apply input px-4 pl-6;
		@apply cursor-pointer border-0;
		&:hover {
			@apply bg-base-300;
		}
		input {
			@apply w-full;
		}
	}

	.search-modal {
		.modal-box {
			@apply flex max-w-2xl flex-col gap-2;
			.search-input-wrapper,
			.search-results-wrapper {
				@apply flex rounded-xl bg-base-100 p-2;
			}
			.search-input-wrapper {
				input {
					@apply h-full w-full p-4 outline-0;
				}
			}
			.search-results-wrapper {
				min-height: 300px;
			}
		}
	}
</style>
