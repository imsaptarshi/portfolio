<script context="module">
	export const load = ({ error, status }) => {
		return {
			props: {
				error,
				status
			}
		};
	};
</script>

<script>
	import bg from '../assets/glitch.gif';
	export let error;
	export let status;
</script>

<main
	style={`background: url(${bg});background-size: cover;background-position: center;`}
	class="absolute top-0 left-0 z-[11] h-[100vh] w-[100vw] opacity-20"
/>
<div class="relative z-[12]">
	<div class="flex justify-start flex-wrap items-end -mt-20 font-heading font-bold text-5xl">
		<span class="mr-5">404</span> <span class="text-2xl">{error.message}</span>
	</div>
	<button
		on:click={() => {
			window.location.href = '/';
		}}
		class="bg-white hover:bg-gray-100 py-2 rounded-xl mt-2 font-bold font-heading px-6"
	>
		<span class="mr-2">&#8592;</span> Go back</button
	>
</div>
