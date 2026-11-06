<script>
	let { value } = $props();
	let color = $derived(value > 2048 ? 'var(--tile-super)' : `var(--tile-${value})`);
</script>

<div class="cell" class:filled={value !== 0} style:background-color={value ? color : null}>
	{value || ''}
</div>

<style>
	/* every cell: an empty grey square */
	.cell {
		aspect-ratio: 1;
		display: grid;
		place-items: center;
		font-size: var(--font-size-xl);
		font-weight: 700;
		background-color: var(--board-cell);
		border-radius: var(--radius);
	}

	/* a cell with a tile in it: white text (the blue comes from style:background-color) */
	.filled {
		color: #ffffff;
	}
</style>
