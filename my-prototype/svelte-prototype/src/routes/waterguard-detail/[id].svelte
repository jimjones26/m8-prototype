<script>
	import {onMount} from 'svelte';
	import layoutStore from '../../stores/layout-store';

	onMount(() => {
		layoutStore.showBackButton();
		layoutStore.showAlertButton();
		layoutStore.setNavHeader(false, true, 'WaterGuard 1', '/dashboard');
		layoutStore.showBottomNavbar(true);
	});
</script>

<div class="waterguard-detail-layout">this is the waterguard detail page</div>

<style>
	.waterguard-detail-layout {
		background-color: #ededed;
	}
</style>
