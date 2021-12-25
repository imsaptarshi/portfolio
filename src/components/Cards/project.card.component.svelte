<script lang="ts">
	export let project;
</script>

<a href={project.link} target="_blank">
	<article class="project text-brand-black flex flex-col p-2 space-y-4  max-w-[440px]">
		<div
			class="project_holder -mx-6 -mr-8 md:-mx-0 relative overflow-hidden rounded-lg duration-200 border-[1px]"
		>
			<div
				style="background-image:url({project.image});background-size:cover;background-position:center"
				class="project_image  w-full h-52 md:h-60 duration-200"
			/>
		</div>
		<div class="flex flex-wrap">
			{#each project.status as status}
				<div
					class={`mr-2 mb-2 px-3 cursor-pointer py-0.5 pt-1 rounded-full text-[10px] font-heading font-semibold ${
						status === 'RESUMED' ? 'bg-yellow-400' : 'bg-green-600'
					} text-white`}
				>
					{status}
				</div>
			{/each}
		</div>
		<header class="text-2xl font-body font-semibold">{project.title}</header>
		<content class="font-body text-sm text-gray-400">{project.description}</content>
	</article>
</a>

<style>
	.project:hover .project_image {
		transform: scale(1.03) rotate(1.1deg);
	}
</style>
