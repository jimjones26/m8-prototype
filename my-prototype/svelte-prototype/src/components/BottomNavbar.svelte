<script>
	import {createEventDispatcher} from 'svelte';

	const dispatch = createEventDispatcher();
</script>

<div class="bottom-navbar-layout">
	<button
		class="bottom-navbar-button"
		on:click={() => dispatch('showWaterguard')}><svg
			class="waterguard-button-svg">
			<use
				class="hamburger-icon"
				xlink:href="../images/icons.svg#waterguard-icon" />
		</svg></button>
</div>

<style>
	.bottom-navbar-layout {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
		background-color: #333333;
		height: 78px;
	}
	.bottom-navbar-button {
		display: grid;
		justify-items: center;
		background: transparent;
		border: 0 transparent;
		cursor: pointer;
		padding: 0px;
		margin-right: 0px;
	}
	.waterguard-button-svg {
		margin-top: 14px;
		width: 20px;
		height: 20px;
		fill: rgb(255, 255, 255, 0.3);
	}
</style>
