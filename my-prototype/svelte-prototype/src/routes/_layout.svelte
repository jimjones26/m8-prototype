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
	}

	$: currentTab = $layoutStore.currentTab;

	function navigate(event) {
		goto(event.detail);
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
	<BottomNavbar bind:activeTabValue={currentTab} on:navigate={navigate} />
{/if}

<style>
	main {
		display: grid;
		background-color: #ededed;
		padding: 0;
		margin: 0;
		overflow: hidden auto;
	}
</style>
