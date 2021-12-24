<script lang="ts">
	import Quote from '../../components/Misc/quote.component.svelte';
</script>

<section class="mb-8">
	<header class="hidden md:block text-4xl mb-6">
		<span class="font-bold font-body text-brand-black ">Hello, I'm Saptarshi </span><span>👋</span>
	</header>
	<div
		class="flex flex-col space-y-6 text-center md:text-left md:flex-row items-center font-body md:space-x-10 mb-10"
	>
		<img src="saptarshi.jpeg" alt="Saptarshi Basu" class="w-36 rounded-md" />
		<header class="block md:hidden text-lg -mb-2">
			<span class="font-semibold font-body text-green-600 ">Hello, I'm Saptarshi </span><span
				>👋</span
			>
		</header>
		<div>
			<div class="font-semibold text-2xl mb-8">
				Frontend Engineer and UI/UX Designer based in India
			</div>
			<Quote
				>I like to build for early stage startups, potential gigs, opensource and personal projects.</Quote
			>
		</div>
	</div>
	<hr />
</section>
