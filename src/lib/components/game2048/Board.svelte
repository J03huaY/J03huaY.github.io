<script>
	import Tile from './Tile.svelte';
	let { board } = $props();
</script>

<div class="board">
	{#each board as row, r (r)}
		{#each row as value, c (c)}
			<Tile {value} />
		{/each}
	{/each}
</div>

<style>
	.board {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: var(--space-2);
		max-width: 320px;
		margin-block: var(--space-5);
		padding: var(--space-2);
		background-color: var(--board-bg);
		border-radius: var(--radius);
	}
</style>
