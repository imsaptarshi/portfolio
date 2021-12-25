<script lang="ts">
	import Link from '../../components/Misc/link.component.svelte';
	import config from '$lib/config';
</script>

<section class="mb-8">
	<header class="text-2xl mb-4">
		<span class="font-semibold font-body text-green-600">Connect with me on </span>
	</header>
	<div class="font-body mb-2">
		&#8594; <Link href={config.twitter}>Twitter</Link>
	</div>
	<div class="font-body mb-2">
		&#8594; <Link href={config.linkedin}>LinkedIn</Link>
	</div>
	<div class="font-body mb-2">
		&#8594; <Link href={config.discord}>Discord</Link>
	</div>
	<div class="font-body mb-32">
		&#8594; <Link href={config.instagram}>Instagram</Link>
	</div>
</section>
