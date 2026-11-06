<script>
	import { game } from '#lib/game2048/game.svelte.js';
	import Board from '#lib/components/game2048/Board.svelte';
	import ScoreBoard from '#lib/components/game2048/ScoreBoard.svelte';
	import GameStatus from '#lib/components/game2048/GameStatus.svelte';
	import ArrowPad from '#lib/components/game2048/ArrowPad.svelte';

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
<ScoreBoard score={game.score} best={game.best} />
<GameStatus won={game.won} over={game.over} />
<Board board={game.board} />
<ArrowPad onmove={(direction) => game.play(direction)} />

