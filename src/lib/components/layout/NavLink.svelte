<script>
	import { page } from '$app/state';

	let { href, label } = $props();

	const isCurrent = $derived(
		href === '/' ? page.url.pathname === '/' : page.url.pathname.startsWith(href)
	);
</script>

<a {href} aria-current={isCurrent ? 'page' : undefined} class:current={isCurrent}>{label}</a>

<style>
	a {
		font-weight: 600;
		display: block;
		padding: var(--space-3) var(--space-4);
		color: var(--color-text);
		text-decoration: none;
		border-radius: var(--radius);
		transition:
			background-color 0.2s,
			color 0.2s;
		position: relative;
	}

	a:hover {
		background-color: var(--color-accent-soft);
		color: var(--color-accent);
	}

	.current::after {
		content: '';
		position: absolute;
		display: block;
		height: 2px;
		background-color: var(--color-accent);
		left: var(--space-4);
		right: var(--space-4);
		bottom: var(--space-1);
	}

	@media (max-width: 600px) {
		a {
			text-align: center;
		}
	}
</style>
