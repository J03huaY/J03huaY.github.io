<script>
	import NavLink from './NavLink.svelte';

	const links = [
		{ href: '/', label: 'Home' },
		{ href: '/game', label: 'Puzzle' },
		{ href: '/2048', label: '2048' },
		{ href: '/about', label: 'About' },
		{ href: '/contact', label: 'Contact' }
	];
</script>

<header>
	<a href="/" class="web-title">Hanfei Yang</a>
	<nav aria-label="Main">
		<ul>
			{#each links as link (link.href)}
				<li><NavLink href={link.href} label={link.label} /></li>
			{/each}
		</ul>
	</nav>
</header>

<style>
	header {
		border-bottom: 1px solid var(--color-border);
		position: sticky;
		top: 0;
		z-index: 10;
		background-color: var(--color-bg);
		display: flex;
		flex-direction: row;
		gap: var(--space-5);
		padding: var(--space-4) var(--space-6);
		flex-wrap: wrap;
		justify-content: space-between;
	}

	.web-title {
		color: var(--color-heading);
		text-decoration: none;
		font-weight: 700;
		font-style: italic;
		font-family: Georgia, 'Times New Roman', serif;
		font-size: var(--font-size-2xl);
		min-height: 44px;
		padding-block: var(--space-2);
	}

	ul {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		gap: var(--space-4);
		flex-wrap: wrap;
	}

	@media (max-width: 600px) {
		/* on phones the header scrolls away with the page, so it never covers the 2048 board */
		header {
			position: static;
			flex-direction: column;
			align-items: stretch;
			gap: 0;
			padding: var(--space-3) var(--space-4) var(--space-1);
		}

		.web-title {
			align-self: flex-start;
		}

		nav {
			width: 100%;
		}

		/* all five links on one row; they wrap only on very narrow screens */
		ul {
			justify-content: space-between;
			gap: 0;
		}
	}
</style>
