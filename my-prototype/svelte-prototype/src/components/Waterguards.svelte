<script>
	import {getContext, onMount} from 'svelte';
	import {goto} from '@sapper/app';
	import {contextKey} from '@beyonk/svelte-mapbox/src/components.js';
	const {getMap, getMapbox} = getContext(contextKey);
	const map = getMap();

	export let geojson;

	geojson.features.forEach(function (marker) {
		// create a DOM element for the marker
		var el = document.createElement('div');
		el.innerHTML = `<span class="marker-number">${marker.properties.number}</span>`;
		el.className = 'marker';
		el.style.backgroundImage = `url(/images/marker-${marker.properties.status}.png)`;
		/* el.style.backgroundImage =
			'url(https://placekitten.com/g/' +
			marker.properties.iconSize.join('/') +
			'/)'; */
		el.style.width = marker.properties.iconSize[0] + 'px';
		el.style.height = marker.properties.iconSize[1] + 'px';

		el.addEventListener('click', function () {
			goto('/waterguard-detail/1');
		});

		map.on('mouseenter', 'Feature', function () {
			map.getCanvas().style.cursor = 'pointer';
		});
		map.on('mouseleave', 'Feature', function () {
			map.getCanvas().style.cursor = '';
		});

		// add marker to map
		new mapboxgl.Marker(el).setLngLat(marker.geometry.coordinates).addTo(map);
	});
</script>

<style>
</style>
