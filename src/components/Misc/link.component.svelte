<script lang="ts">
	export let href;
</script>

<div class="inline text-gray-400 underline hover:bg-gray-100 duration-100 px-1 rounded-sm">
	<a target="_blank" rel="noopener noreferrer" {href}><slot /></a>
</div>
