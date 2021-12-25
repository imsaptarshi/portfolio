<script lang="ts">
	import Footer from '../components/Footer/footer.component.svelte';
	import '../app.css';
	import Navigation from '../components/Navigation/navigation.component.svelte';
	import config from '$lib/config';
	let gaTag = config.gaTag;
</script>

<svelte:head>
	<script async src={`https://www.googletagmanager.com/gtag/js?id=${gaTag}`}></script>
	<script lang="ts" type="module">
		window.dataLayer = window.dataLayer || [];
		function gtag() {
			dataLayer.push(arguments);
		}

		gtag('js', new Date());
		gtag('config', `G-HSXL2HTLLT`, {
			page_path: window.location.pathname
		});
	</script>
</svelte:head>

<main
	class=" overflow-x-hidden relative flex flex-col min-h-[100vh] items-center px-6 lg:px-0 w-full text-brand-black"
>
	<Navigation />

	<div class="max-w-[700px] w-full mt-28 md:mt-32">
		<slot />
	</div>
	<Footer />
</main>
