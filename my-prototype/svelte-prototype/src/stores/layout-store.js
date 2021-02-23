import {writable} from 'svelte/store';

const layoutStore = writable({
	loading: false,
	loadingMessage: null,
	error: false,
	errorMessage: null,
	showLogo: false,
	showNavHeader: false,
	showHeaderText: false,
	headerText: null,
	showMenuButton: false,
	showBackButton: false,
	showAlertButton: false,
	showBottomNavbar: false,
	referringUrl: []
});

const customLayoutStore = {
	subscribe: layoutStore.subscribe,

	updateLoadingState: (loading, message) => {
		layoutStore.update(currentState => {
			return {...currentState, loading: loading, loadingMessage: message};
		});
	},

	showMenuButton: () => {
		layoutStore.update(currentState => {
			return {...currentState, showMenuButton: true, showBackButton: false};
		});
	},

	showBackButton: () => {
		layoutStore.update(currentState => {
			return {...currentState, showMenuButton: false, showBackButton: true};
		});
	},

	showAlertButton: () => {
		layoutStore.update(currentState => {
			return {...currentState, showAlertButton: true};
		});
	},

	hideNavButtons: () => {
		layoutStore.update(currentState => {
			return {
				...currentState,
				showMenuButton: false,
				showBackButton: false,
				showAlertButton: false
			};
		});
	},

	setNavHeader: (showLogo, showHeaderText, headerText, referringUrl) => {
		layoutStore.update(currentState => {
			return {
				...currentState,
				showLogo,
				showHeaderText,
				headerText,
				referringUrl
			};
		});
	},

	showBottomNavbar: bool => {
		layoutStore.update(currentState => {
			return {...currentState, showBottomNavbar: bool};
		});
	}
};

export default customLayoutStore;
