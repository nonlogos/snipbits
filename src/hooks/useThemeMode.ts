import { useState, useLayoutEffect } from 'react';

const themeModeList = {
	light: 'light',
	dim: 'dim',
	dark: 'dark',
};

export default function useThemeMode() {
	const [themeMode, setThemeMode] = useState('');

	const handleEventListener = (e) => {
		console.log('e', e);
		if (e.matches) {
			setThemeMode(themeModeList.dark);
		} else {
			setThemeMode(themeModeList.light);
		}
	};

	// need to add local storage support
	// 1. if user choose to change theme on the site, remember preference in localstorage
	// 2. else => check if user has prefer color scheme with browser
	// 3. else => defaults to light theme

	useLayoutEffect(() => {
		let darkMediaQuery;
		if (window.matchMedia) {
			darkMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
			handleEventListener(darkMediaQuery);
			try {
				darkMediaQuery.addEventListener('change', handleEventListener);
			} catch (e) {
				// Safari has not implemented addEventListener to matchMedia
				// so using the deprecated addListener as fallback
				try {
					darkMediaQuery.addListener(handleEventListener);
				} catch (e) {
					console.error(e);
				}
			}
		}
		return () => darkMediaQuery.removeEventListener('change', handleEventListener);
	}, []);

	return [themeMode, setThemeMode, themeModeList];
}
