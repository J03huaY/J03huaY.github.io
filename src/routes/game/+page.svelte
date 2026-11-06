<script>
	import CrosswordGrid from '#lib/components/crossword/CrosswordGrid.svelte';
	import ClueList from '#lib/components/crossword/ClueList.svelte';
	import { solution, clues, buildCells } from '#lib/data/crossword.js';

	const cells = buildCells(solution);
</script>

<svelte:head>
	<title>Sports Crossword — Hanfei Yang</title>
</svelte:head>

<h1>A Puzzle About Sports!</h1>
<p>
	This is a crossword puzzle based on terms in sports, for instance, basketball. Fill each white
	square with an English letter. Use Tab to move between squares. Check the numbers for clues!
</p>

<section>
	<h2>The Mini Puzzle</h2>

	<CrosswordGrid {cells} columns={solution[0].length} />

	<ClueList title="Across" clues={clues.across} />
	<ClueList title="Down" clues={clues.down} />

	<details>
		<summary>Answer Key</summary>
		<p>Across: 1. Posts, 4. Arena, 5. Split</p>
		<p>Down: 1. Plays, 2. Steal, 3. Start</p>
	</details>
</section>

<style>
	summary {
		min-height: 44px;
		padding: var(--space-3) var(--space-4);
		cursor: pointer;
	}
</style>
