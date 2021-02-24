<script>
	import {onMount} from 'svelte';
	import {goto} from '@sapper/app';
	import layoutStore from '../stores/layout-store';

	onMount(() => {
		layoutStore.hideNavButtons();
		layoutStore.setNavHeader(true, false, null, null);
	});

	let username = null;
	let password = null;

	function login() {
		console.log('login: ', {username, password});
		goto('/dashboard');
	}
</script>

<div class="main-layout">
	<!-- <div class="logo-layout">
		<svg class="m8-logo"><use xlink:href="../images/icons.svg#m8_logo" /></svg>
		<svg class="system-logo"><use
				xlink:href="../images/icons.svg#systems_logo" /></svg>
	</div> -->
	<form on:submit|preventDefault={login} class="login-form-layout">
		<p class="header">Please Login</p>
		<label for="username"><span>USERNAME</span>
			<input bind:value={username} />
		</label>
		<label for="username"><span>PASSWORD</span>
			<input type="password" bind:value={password} />
		</label>
		<p class="forgot-password">forgot password?</p>
		<button type="submit">SUBMIT</button>
	</form>
</div>

<style>
	.main-layout {
		display: grid;
		background-color: #333;
	}
	/* .logo-layout {
		display: grid;
		grid-template-rows: auto auto;
		justify-self: center;
		align-self: end;
	} */
	.login-form-layout {
		justify-self: stretch;
		align-self: center;
		display: grid;
		margin-left: 48px;
		margin-right: 48px;
		margin-top: -56px;
	}
	/* .m8-logo {
		height: 54px;
		width: 95px;
	}
	.system-logo {
		height: 13px;
		width: 94px;
		margin-top: 7px;
	} */
	.header {
		font-size: 24px;
		font-weight: 700;
		color: #e2e2e2;
		margin-bottom: 45px;
	}
	label {
		font-size: 12px;
		font-weight: 700;
		color: #76777a;
		display: grid;
	}
	input {
		border: 0 transparent;
		background-color: #c4c4c4;
		font-size: 17px;
		line-height: 20px;
		font-weight: 700;
		color: #333333;
		caret-color: #333333;
		align-self: start;
		margin-left: -1px;
		margin-bottom: 24px;
		padding-left: 15px;
		padding-right: 15px;
		padding-top: 10px;
		padding-bottom: 10px;
	}

	input:focus {
		outline: none;
	}
	.forgot-password {
		color: #76777a;
		font-size: 12px;
		margin-top: -13px;
	}
	button {
		background: #ff4d00;
		border: 0 transparent;
		font-size: 14px;
		font-weight: bold;
		color: #fff;
		cursor: pointer;
		padding-top: 15px;
		padding-bottom: 15px;
		margin-top: 28px;
	}
	span {
		margin-bottom: 7px;
	}
</style>
