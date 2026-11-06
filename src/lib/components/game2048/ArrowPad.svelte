<script>
	let { onmove } = $props();
</script>

<div class="pad">
	<button class="up" onclick={() => onmove('up')} aria-label="Move up">↑</button>
	<button class="left" onclick={() => onmove('left')} aria-label="Move left">←</button>
	<button onclick={() => onmove('down')} aria-label="Move down">↓</button>
	<button onclick={() => onmove('right')} aria-label="Move right">→</button>
</div>

<style>
	/* hidden by default: computers have arrow keys */
	.pad {
		display: none;
	}

	/* shown on touch screens, laid out like arrow keys:
	      ↑
	   ←  ↓  →
	*/
	@media (pointer: coarse) {
		.pad {
			display: grid;
			grid-template-columns: repeat(3, 3rem);
			gap: var(--space-2);
			margin-block-end: var(--space-5);
		}
	}

	/* ↑ sits in the middle column of row 1 */
	.up {
		grid-column: 2;
	}

	/* ← must start in column 1, which forces it onto row 2; ↓ and → follow it */
	.left {
		grid-column: 1;
	}

	/* 3rem (about 48px) is big enough to tap without missing */
	button {
		height: 3rem;
		font-size: var(--font-size-xl);
		color: #ffffff;
		background-color: var(--tile-2);
		border: none;
		border-radius: var(--radius);
		cursor: pointer;
	}
</style>
