<script>
	import {onMount} from 'svelte';
	import layoutStore from '../../stores/layout-store';

	onMount(() => {
		layoutStore.showBackButton();
		layoutStore.showAlertButton();
		layoutStore.setNavHeader(false, true, 'Irrigation Schedule', '/dashboard');
		layoutStore.showBottomNavbar(true);
		layoutStore.setCurrentTab('irrigation');
	});
</script>

<div class="irrigation-detail-layout">this is the irrigation schedule page</div>

<style>
	.irrigation-detail-layout {
		background-color: #ededed;
	}
</style>
