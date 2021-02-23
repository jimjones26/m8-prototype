<script>
	import {goto} from '@sapper/app';
	import layoutStore from '../stores/layout-store';
	import NavHeader from '../components/NavHeader.svelte';
	import BottomNavbar from '../components/BottomNavbar.svelte';

	async function navigateBack(event) {
		await goto(event.detail);
	}
	async function showMenu(event) {
		await goto('/menu');
		console.log('SHOW MENU');
	}
</script>

<NavHeader
	showLogo={$layoutStore.showLogo}
	showMenuButton={$layoutStore.showMenuButton}
	showBackButton={$layoutStore.showBackButton}
	showAlertButton={$layoutStore.showAlertButton}
	showHeaderText={$layoutStore.showHeaderText}
	headerText={$layoutStore.headerText}
	referringUrl={$layoutStore.referringUrl}
	on:navigateBack={navigateBack}
	on:showMenu={showMenu} />

<main>
	<slot />
</main>

{#if $layoutStore.showBottomNavbar}
	<BottomNavbar />
{/if}

<style>
	main {
		position: relative;
		background-color: transparent;
		padding: 0;
		margin: 0;
		display: grid;
		grid-template-rows: 1fr;
	}
</style>
