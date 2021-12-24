<script lang="ts">
	let initial: string = 'S';
	let last: string = 'i';

	setInterval(() => {
		last = last === 'i' ? '1' : 'i';
	}, 1400);

	setInterval(() => {
		initial = initial === 'S' ? '5' : 'S';
	}, 1000);
	setInterval(() => {
		initial = initial === 'S' ? '5' : 'S';
		last = last === 'i' ? '1' : 'i';
	}, 2200);
</script>

<nav
	class="bg-white fixed z-10 top-0 w-full flex justify-between px-6 md:px-10 py-3 border-b-[1px] items-center"
>
	<a href="/">
		<header class="font-heading font-normal text-lg">
			<span class="font-bold">{initial}ap</span>tarsh{last} 🧑‍💻
		</header>
		<div />
	</a>
</nav>
