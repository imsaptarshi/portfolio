<script lang="ts">
	import config from '$lib/config';

	import Link from '../../components/Misc/link.component.svelte';
</script>

<section class="mb-8">
	<header class="text-2xl mb-4">
		<span class="font-semibold font-body text-green-600">About Me </span>
	</header>
	<div class="font-body mb-2">
		I’m 17 and currently working as a co-founder at <Link href="https://relm.tech">relm.tech</Link>.
		I am interested in deep tech, debates, and anime.
	</div>
	<div>Reach out on:</div>
	<div class="mb-10">&#8594;<Link href={config.twitter}>Twitter</Link></div>
	<hr />
</section>
