<script>
	import {createEventDispatcher} from 'svelte';

	const dispatch = createEventDispatcher();

	export let showLogo;
	export let showHeaderText;
	export let headerText;
	export let showMenuButton;
	export let showBackButton;
	export let showAlertButton;
	export let referringUrl = null;
</script>

<div class="nav-header-container">
	{#if showMenuButton}
		<button
			class="header-button"
			type="submit"
			data-testid="submit-button"
			on:click={() => dispatch('showMenu')}><svg class="menu-button-icon">
				<use
					class="hamburger-icon"
					xlink:href="../images/icons.svg#hamburger" />
			</svg></button>
	{/if}
	{#if showBackButton}
		<button
			class="header-button"
			type="submit"
			data-testid="submit-button"
			on:click={() => dispatch('navigateBack', referringUrl)}><svg
				class="back-button-icon">
				<use
					class="back-arrow-icon"
					xlink:href="../images/icons.svg#arrow_back" />
			</svg></button>
	{/if}

	{#if showLogo}
		<div class="logo-layout">
			<svg class="m8-logo-small"><use
					xlink:href="../images/icons.svg#m8_logo" /></svg>
			<svg class="system-logo-small"><use
					xlink:href="../images/icons.svg#systems_logo" /></svg>
		</div>
	{/if}
	{#if showHeaderText}<span class="header-text">{headerText}</span>{/if}
	{#if showAlertButton}
		<button
			class="header-button"
			type="submit"
			data-testid="submit-button"
			on:click={() => dispatch('alert', referringUrl)}><svg
				class="alert-button-icon">
				<use class="alert-icon" xlink:href="../images/icons.svg#alert" />
			</svg></button>
	{/if}
</div>

<style>
	.nav-header-container {
		height: 56px;
		display: grid;
		grid-template-columns: 56px 1fr 56px;
	}
	.header-text {
		font-size: 18px;
		font-weight: bold;
		align-self: center;
		justify-self: center;
		margin-bottom: 1px;
		color: #e2e2e2;
	}
	.header-button {
		background: transparent;
		border: 0 transparent;
		color: var(--main-font-color);
		cursor: pointer;
		padding: 0px;
		margin-right: 0px;
	}
	.back-button-icon {
		vertical-align: middle;
		margin-bottom: 2px;
		width: 24px;
		height: 24px;
	}
	.back-arrow-icon {
		fill: #76777a;
	}
	.alert-button-icon {
		vertical-align: middle;
		margin-bottom: 2px;
		width: 21px;
		height: 21px;
	}
	.alert-icon {
		fill: #76777a;
	}
	.menu-button-icon {
		vertical-align: middle;
		margin-bottom: 2px;
		width: 18px;
		height: 12px;
	}
	.hamburger-icon {
		fill: #76777a;
	}
	.logo-layout {
		display: grid;
		grid-template-columns: auto auto;
		justify-self: center;
		align-self: center;
		grid-column: 2/3;
	}
	.m8-logo-small {
		height: 16px;
		width: 28px;
		margin-right: 6px;
	}
	.system-logo-small {
		height: 16px;
		width: 107px;
	}
</style>
