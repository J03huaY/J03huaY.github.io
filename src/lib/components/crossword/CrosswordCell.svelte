<script>
	let { cell } = $props();
</script>

{#if cell.black}
	<div class="cell" class:black={cell.black}></div>
{:else}
	<label class="cell">
		{#if cell.number}
			<span class="word-number">{cell.number}</span>
		{/if}
		<input type="text" maxlength="1" autocomplete="off" aria-label={cell.label} />
	</label>
{/if}

<style>
	.cell {
		position: relative;
		aspect-ratio: 1;
		min-width: 0;
		background-color: var(--color-surface);
	}

	.black {
		background-color: var(--color-heading);
	}

	input {
		width: 100%;
		height: 100%;
		min-width: 0;
		border: 0;
		text-align: center;
		text-transform: uppercase;
		font-size: var(--font-size-xl);
		color: var(--color-heading);
	}

	.word-number {
		position: absolute;
		top: var(--space-1);
		left: var(--space-1);
		font-size: 11px;
		line-height: 1;
		color: var(--color-heading);
		pointer-events: none;
	}
</style>
