<script>
	import {onMount} from 'svelte';
	import layoutStore from '../../stores/layout-store';

	onMount(() => {
		layoutStore.showBackButton();
		layoutStore.showAlertButton();
		layoutStore.setNavHeader(false, true, 'WaterGuard 1', '/dashboard');
		layoutStore.showBottomNavbar(true);
		layoutStore.setCurrentTab('waterguard');
	});
</script>

<div class="waterguard-detail-layout">
	<div class="watering-status">
		<span class="status-text">NOT WATERING</span>
	</div>
	<div class="gpm-psi-tile-layout">
		<div class="tile">
			<span class="tile-item tile-value">0</span><span
				class="tile-item tile-label">PSI</span>
		</div>
		<div class="tile">
			<span class="tile-item tile-value">0</span><span
				class="tile-item tile-label">GPM</span>
		</div>
	</div>
</div>

<style>
	.waterguard-detail-layout {
		display: grid;
		grid-template-rows: auto auto 1fr;
		margin: 17px 8px 20px 8px;
		grid-gap: 16px;
	}
	.watering-status {
		display: grid;
		background-color: #ff4d00;
		color: white;
		font-size: 17px;
		font-weight: 700;
		border-radius: 8px;
		height: 48px;
	}
	.status-text {
		align-self: center;
		justify-self: center;
		margin-top: 2px;
	}
	.gpm-psi-tile-layout {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 16px;
	}
	.tile {
		background-color: white;
		display: grid;
		padding: 14px;
	}
	.tile-item {
		align-self: center;
		justify-self: center;
	}
	.tile-value {
		color: #ff4d00;
		font-size: 36px;
		font-weight: 700;
	}
	.tile-label {
		color: #000;
		font-size: 17px;
	}
</style>
