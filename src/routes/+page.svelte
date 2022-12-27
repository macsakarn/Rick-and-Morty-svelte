<script lang="ts">
	import type { PageData } from './$types';
	import type { Character } from '$lib/type/interfaces';
	import { Card, Badge } from 'flowbite-svelte';
	export let data: PageData;
	let character: Character[] = data.results;
</script>

<div
	class="grid grid-cols-1  md:justify-items-stretch  justify-items-center md:grid-cols-4 gap-10 "
>
	{#each character as item (item.id)}
		<Card img={item.image} size="sm" padding="xl">
			<h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900">
				{item.name}
				<Badge large={true} color={item.status === 'Alive' ? 'green' : 'red'}>{item.status}</Badge>
			</h5>
			<p class="mb-3 font-normal text-gray-700 leading-tight">
				type : <span>{item.species}</span>
			</p>
		</Card>
	{/each}
</div>
