<svelte:head>
	<title>Hanfei Yang — The Arcade</title>
</svelte:head>

<h1>ARCADE</h1>

<p>
	Welcome to my arcade! You can explore freely here. On the top of the page, you can use the navbar
	to go to the page you want. There is a sports-themed mini crossword and a game of 2048.
	Additionally, you can see more information about the developer on the About page.
</p>

<ul class="game-links">
	<li><a href="/game">Play the Sports Puzzle</a></li>
	<li><a href="/2048">Play 2048</a></li>
</ul>

<style>
	.game-links {
		list-style: none;
		padding: 0;
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-4);
	}

	.game-links a {
		display: inline-block;
		min-height: 44px;
		padding-block: var(--space-3);
	}
</style>
