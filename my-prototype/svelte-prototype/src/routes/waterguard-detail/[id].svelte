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
	Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in ullamcorper
	tortor. Aliquam erat volutpat. Nulla facilisi. Quisque vulputate arcu
	vestibulum, semper lacus ut, ultrices sapien. Ut at augue sit amet mi
	malesuada fermentum sit amet in nibh. Morbi ac mauris hendrerit, vulputate
	lorem id, congue risus. Morbi consequat odio a hendrerit elementum.
	Pellentesque vitae mollis lectus. Suspendisse sit amet sodales ligula, at
	sodales diam. Duis tempus velit facilisis tortor commodo maximus. Aenean
	tempor pulvinar eros, nec suscipit lacus tincidunt et. Aenean posuere
	sollicitudin pellentesque. Aliquam tempus dolor quis porta viverra. Cras sed
	lacus at neque imperdiet consectetur id sagittis eros. Duis sit amet massa vel
	purus iaculis hendrerit id et lacus. Ut sed maximus lorem. Fusce sollicitudin
	dapibus quam quis convallis. Cras molestie condimentum tristique. Vivamus
	euismod commodo nisl, a egestas libero hendrerit sollicitudin. Quisque nulla
	mauris, dictum sed lacinia id, accumsan eget purus. Pellentesque eu tempor
	nisi, rutrum accumsan sapien. Proin et ligula nec massa sollicitudin euismod.
	Mauris in nibh felis. Donec id molestie ex. Vestibulum semper lacus non
	convallis iaculis. Donec et neque dapibus nunc aliquam imperdiet ac ac lectus.
	Vestibulum fringilla diam a arcu pretium pretium. Cras efficitur purus vel
	risus placerat eleifend. Nulla consequat porttitor leo at dapibus. Aenean
	venenatis ante posuere, pellentesque erat vel, euismod lacus. In hac habitasse
	platea dictumst. Vivamus sed ligula id quam tempus accumsan. Maecenas
	elementum vehicula fermentum. Praesent sit amet venenatis massa. Sed in sem
	vitae orci maximus rutrum eu eu est. Sed ac aliquam tortor. Vivamus rhoncus
	lorem ut auctor blandit. Nullam maximus nisl magna, vitae sagittis felis
	vestibulum id. Pellentesque hendrerit nisl vel sem pretium lobortis. In in est
	maximus, mollis metus eu, blandit sem. Integer non lacus imperdiet, ornare
	velit sed, convallis orci. Sed eleifend turpis nec massa efficitur, quis
	posuere lacus tristique. Duis finibus convallis quam, a tincidunt elit
	consequat at. Praesent tempor metus sed luctus condimentum. Vestibulum ante
	ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In ac
	diam imperdiet, lobortis neque sed, mollis neque. Aliquam sodales, sapien eu
	efficitur bibendum, ante urna sagittis mi, in consequat odio nisl non eros.
	Nullam varius in quam dignissim convallis. Nullam sit amet auctor risus,
	accumsan condimentum leo. Etiam pellentesque consectetur magna. Class aptent
	taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
	Duis eu quam eget nisl laoreet malesuada.
</div>

<style>
	.waterguard-detail-layout {
		background-color: #ededed;
	}
</style>
