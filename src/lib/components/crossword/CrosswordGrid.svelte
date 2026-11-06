<script>
	import CrosswordCell from './CrosswordCell.svelte';

	let { cells, columns } = $props();
</script>

<div class="grid" style:--columns={columns}>
	{#each cells as cell (cell.id)}
		<CrosswordCell {cell} />
	{/each}
</div>

<style>
	.grid {
		display: grid;
		grid-template-columns: repeat(var(--columns), 1fr);
		gap: 2px;
		width: 100%;
		max-width: 280px;
		background-color: var(--color-dark);
	}
</style>
