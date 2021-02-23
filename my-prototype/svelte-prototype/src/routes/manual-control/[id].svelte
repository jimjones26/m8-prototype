<script>
	import {onMount} from 'svelte';
	import layoutStore from '../../stores/layout-store';

	onMount(() => {
		layoutStore.showBackButton();
		layoutStore.showAlertButton();
		layoutStore.setNavHeader(false, true, 'Manual Control', '/referring url');
		layoutStore.showBottomNavbar(true);
		layoutStore.setCurrentTab('manual');
	});
</script>

<div class="manual-control-layout">this is the manual control page</div>

<style>
	.manual-control-layout {
		background-color: #ededed;
	}
</style>
