import type { PageServerLoad } from './$types';
import type { Character, Info } from '$lib/type/interfaces';

export const load = (async ({ fetch }) => {
	const res: Response = await fetch(
		`https://rickandmortyapi.com/api/character/?page=${Math.floor(Math.random() * 6) + 1}`
	);
	const info: Info<Character[]> = await res.json();
	return info;
}) satisfies PageServerLoad;
