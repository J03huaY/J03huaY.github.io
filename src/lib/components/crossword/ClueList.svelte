<script>
	let { title, clues } = $props();
</script>

<h3>{title}</h3>
<ol>
	{#each clues as clue (clue.number)}
		<li value={clue.number}>{clue.text}</li>
	{/each}
</ol>
