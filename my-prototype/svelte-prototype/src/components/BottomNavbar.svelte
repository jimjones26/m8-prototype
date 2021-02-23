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
	<button
		class="bottom-navbar-button"
		on:click={() => dispatch('showSchedule')}><svg class="schedule-button-svg">
			<use
				class="hamburger-icon"
				xlink:href="../images/icons.svg#schedule-icon" />
		</svg></button>
	<button
		class="bottom-navbar-button"
		on:click={() => dispatch('showAnalytics')}><svg
			class="analytics-button-svg">
			<use
				class="hamburger-icon"
				xlink:href="../images/icons.svg#analytics-icon" />
		</svg></button>
	<button
		class="bottom-navbar-button"
		on:click={() => dispatch('showCostProjection')}><svg
			class="cost-projection-button-svg">
			<use
				class="hamburger-icon"
				xlink:href="../images/icons.svg#cost-projection-icon" />
		</svg></button>
	<button
		class="bottom-navbar-button"
		on:click={() => dispatch('showManualControl')}><svg
			class="manual-control-button-svg">
			<use
				class="hamburger-icon"
				xlink:href="../images/icons.svg#manual-control-icon" />
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
	.schedule-button-svg {
		margin-top: 14px;
		width: 18px;
		height: 20px;
		fill: rgb(255, 255, 255, 0.3);
	}
	.analytics-button-svg {
		margin-top: 14px;
		width: 20px;
		height: 19px;
		fill: rgb(255, 255, 255, 0.3);
	}
	.cost-projection-button-svg {
		margin-top: 14px;
		width: 10px;
		height: 18px;
		fill: rgb(255, 255, 255, 0.3);
	}
	.manual-control-button-svg {
		margin-top: 14px;
		width: 20px;
		height: 20px;
		fill: rgb(255, 255, 255, 0.3);
	}
</style>
