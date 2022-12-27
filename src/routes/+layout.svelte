<script lang="ts">
	import '../app.postcss';
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
	import {
		Footer,
		FooterCopyright,
		FooterLinkGroup,
		FooterBrand,
		FooterLink
	} from 'flowbite-svelte';

	import { page } from '$app/stores';
	let path: string;

	$: path = $page.url.pathname;
</script>

<Navbar navClass="py-2.5 w-full max-w-5xl mx-auto z-20 border-b" let:hidden let:toggle>
	<NavBrand href="/">
		<img src="./Rick-and-Morty.png" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
	</NavBrand>
	<NavHamburger on:click={toggle} />
	<NavUl {hidden}>
		<NavLi href="/" active={path === '/' ? true : false}>Character</NavLi>
	</NavUl>
</Navbar>

<main class="w-full max-w-5xl mx-auto pt-24">
	<slot />
</main>

<Footer footerType="logo">
	<div class="sm:flex sm:items-center sm:justify-between">
		<FooterBrand src="./Rick-and-Morty.png" alt="Rick-and-Morty" name="Rick-and-Morty" />
		<FooterLinkGroup
			ulClass="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400"
		>
			<FooterLink href="/https://facebook.com/mcsakarnb">Contact</FooterLink>
		</FooterLinkGroup>
	</div>
	<hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
	<FooterCopyright href="https://facebook.com/mcsakarnb" by="Mac Sakarn" />
</Footer>
