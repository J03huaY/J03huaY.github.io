<svelte:head>
	<title>About — Hanfei Yang</title>
</svelte:head>

<h1>About Me</h1>
<p>My name is Hanfei Yang and I go by Joshua. I came to the states in 2021 for undergraduate studies.</p>
<img src="/img/profileNY.jpg" alt="Hanfei Yang" class="about-image" width="1024" height="768" />

<section>
	<h2>Education</h2>

	<h3>Undergrad</h3>
	<p>Wheaton College — BS in Computer Science and Mathematics, 2025</p>

	<h3>Graduate School</h3>
	<p>Northeastern University, Seattle — MSCS, expected 2027</p>
	<h4>Relevant Coursework</h4>
	<h5>Web Development</h5>
	<p>I learn how to build websites</p>
	<h6>Project1 - The Arcade</h6>
	<p>A backbone website with a puzzle game for projects later</p>
</section>

<section>
	<h2>Experience</h2>
	<p>
		I have hands-on experience in AI application development, full-stack engineering, and workflow
		automation. I am proficient in Python, Java, JavaScript, React, Node.js, and SQL, with experience
		building AI-powered applications, integrating external generative AI services, and deploying
		production workflows. Skilled at translating product requirements into reliable, scalable,
		user-focused technical solutions.
	</p>
</section>

<style>
	.about-image {
		display: block;
		width: 100%;
		max-width: 480px;
		height: auto;
		margin-block: var(--space-6);
	}

	h2 {
		margin-top: var(--space-7);
		margin-bottom: var(--space-5);
	}

	h3 {
		margin-top: var(--space-6);
		margin-bottom: var(--space-2);
	}

	h4 {
		margin-top: var(--space-5);
		margin-bottom: var(--space-4);
	}

	h5 {
		margin-top: var(--space-5);
		margin-bottom: var(--space-2);
	}

	h6 {
		margin-top: var(--space-5);
		margin-bottom: var(--space-2);
		font-size: var(--font-size-base);
	}
</style>
