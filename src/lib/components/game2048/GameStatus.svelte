<script>
	let { won, over } = $props();
</script>

<div aria-live="polite">
	{#if won}
		<p>You win!</p>
	{/if}
	{#if over}
		<p>Game over.</p>
	{/if}
</div>
