<script>
	import {createEventDispatcher, onMount} from 'svelte';

	onMount(() => {
		// Set default tab value
	});

	const dispatch = createEventDispatcher();

	export let activeTabValue;

	const handleClick = ({url, activeTab}) => () => {
		activeTabValue = activeTab;
		dispatch('navigate', url);
	};
</script>

<div class="bottom-navbar-layout">
	<button
		class="bottom-navbar-button"
		on:click={handleClick({
			url: '/waterguard-detail/1',
			activeTab: 'waterguard'
		})}><svg
			class={activeTabValue === 'waterguard' ? 'waterguard-button-svg active' : 'waterguard-button-svg'}>
			<use
				class="hamburger-icon"
				xlink:href="../images/icons.svg#waterguard-icon" />
		</svg></button>
	<button
		class="bottom-navbar-button"
		on:click={handleClick({
			url: '/irrigation-schedule/1',
			activeTab: 'irrigation'
		})}><svg
			class={activeTabValue === 'irrigation' ? 'schedule-button-svg active' : 'schedule-button-svg'}>
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
		on:click={handleClick({url: '/manual-control/1', activeTab: 'manual'})}><svg
			class={activeTabValue === 'manual' ? 'manual-control-button-svg active' : 'manual-control-button-svg'}>
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
	.active {
		fill: #ff4d00;
	}
</style>
