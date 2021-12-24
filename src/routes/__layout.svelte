<script lang="ts">
	import Footer from '../components/Footer/footer.component.svelte';
	import '../app.css';
	import Navigation from '../components/Navigation/navigation.component.svelte';
</script>

<main class="flex flex-col items-center px-6 lg:px-0 justify-center w-full text-brand-black">
	<Navigation />

	<div class="max-w-[700px] w-full mt-28 md:mt-32">
		<slot />
	</div>
	<Footer />
</main>
