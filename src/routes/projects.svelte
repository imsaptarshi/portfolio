<script>
	import config from '$lib/config';
	import Project from '../components/Cards/project.card.component.svelte';
</script>

<svelte:head>
	<title>Showcase</title>
</svelte:head>

<main class="-mx-3 lg:-mx-40 mb-40">
	<header class="text-center -mt-4 mb-10 text-xl md:text-3xl">
		<span class="font-heading font-bold">Welcome to my Showcase</span>
		<div class="text-xs px-10 md:px-0 md:text-sm text-gray-400 font-body">
			Here I, showcase some of my most favourite projects/products I've built ✨
		</div>
	</header>
	<div class="flex flex-wrap w-full justify-center">
		{#each config.projects as project}
			<div class="mr-4 mb-6">
				<Project {project} />
			</div>
		{/each}
	</div>
	<a href={config.github} target="_blank">
		<button
			class="mt-2 mr-2 hover:bg-black float-right bg-brand-black text-white font-heading px-4 text-sm rounded-lg py-2"
			>More &#8594;</button
		>
	</a>
</main>
