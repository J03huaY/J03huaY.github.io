<script>
	import { game } from '#lib/game2048/game.svelte.js';

	const keyToDirection = {
		ArrowLeft: 'left',
		ArrowRight: 'right',
		ArrowUp: 'up',
		ArrowDown: 'down'
	};

	function handleKey(event) {
		const direction = keyToDirection[event.key];
		if (!direction) return;
		event.preventDefault();
		game.play(direction);
	}
</script>

<svelte:head>
	<title>2048 — Hanfei Yang</title>
</svelte:head>

<svelte:window onkeydown={handleKey} />

<h1>2048</h1>
<p>Use the arrow keys to slide the tiles. Equal tiles merge. Reach 2048 to win.</p>

<button onclick={() => game.newGame()}>New Game</button>
<p>Score: {game.score} · Best: {game.best}</p>

<div class="board">
	{#each game.board as row, r (r)}
		{#each row as value, c (c)}
			<div class="cell">{value || ''}</div>
		{/each}
	{/each}
</div>

{#if game.won}
	<p>You win!</p>
{/if}
{#if game.over}
	<p>Game over.</p>
{/if}

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

	.cell {
		aspect-ratio: 1;
		display: grid;
		place-items: center;
		font-size: var(--font-size-xl);
		font-weight: 700;
		color: var(--color-heading);
		background-color: var(--board-cell);
		border-radius: var(--radius);
	}
</style>
