<script>
	import {onMount} from 'svelte';
	import {Map} from '@beyonk/svelte-mapbox';
	import layoutStore from '../stores/layout-store';

	import Waterguards from '../components/Waterguards.svelte';

	onMount(() => {
		layoutStore.showMenuButton();
		layoutStore.showAlertButton();
		layoutStore.setNavHeader(true, false, null, null);
		layoutStore.showBottomNavbar(false);
	});

	if (typeof window !== 'undefined') {
		window.global = {};
	}

	let center = {lng: -106.92749844216868, lat: 37.18964402299632};
	let zoom = 15;
	let mapComponent;

	let geojson = {
		type: 'FeatureCollection',
		features: [
			{
				type: 'Feature',
				properties: {
					number: '1',
					status: 'green',
					id: '12345',
					iconSize: [51, 73]
				},
				geometry: {
					type: 'Point',
					coordinates: [-106.92712293289601, 37.18975513405804]
				}
			},
			{
				type: 'Feature',
				properties: {
					number: '2',
					status: 'red',
					id: '52557',
					iconSize: [51, 73]
				},
				geometry: {
					type: 'Point',
					coordinates: [-106.92848549511392, 37.189002994447826]
				}
			},
			{
				type: 'Feature',
				properties: {
					number: '3',
					status: 'green',
					id: '356749748',
					iconSize: [51, 73]
				},
				geometry: {
					type: 'Point',
					coordinates: [-106.92586765904171, 37.18894316483899]
				}
			}
		]
	};
</script>

<div class="map-layout">
	<span class="farm-name">Springhill Farms</span>
	<Map
		bind:this={mapComponent}
		accessToken="pk.eyJ1Ijoiamltam9uZXMyNiIsImEiOiJja2xmdGw1cXUxcmR6MnVxdGZrNjF0aHgxIn0.md5b6ZDRrg4ZWRlTU_3zCQ"
		on:recentre={e => console.log(e.detail)}
		on:click={e => console.log(e.detail)}
		{center}
		{zoom}
		style="mapbox://styles/mapbox/light-v9">
		<Waterguards {geojson} />
	</Map>
</div>

<style>
	.map-layout {
		display: grid;
		grid-template-rows: 1fr;
		grid-template-columns: 1fr;
		background-color: white;
	}
	.farm-name {
		z-index: 1000;
		color: #333333;
		font-size: 30px;
		font-weight: 700;
		grid-row: 1/2;
		grid-column: 1/2;
		align-self: baseline;
		justify-self: center;
		margin-top: 90px;
	}
</style>
