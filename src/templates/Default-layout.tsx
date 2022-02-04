import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { navigate } from 'gatsby';

import { contentTypes } from '../utils/constants';
import useThemeMode from '../utils/hooks/useThemeMode';
import { hasTouchScreen } from '../utils/hasTouchScreen';
import GlobalStyles from '../theme/globalStyles';
import NavMobile from '../components/nav-mobile/NavMobile';
import Header from '../components/header/Header';

const defaultMenuStates = {
	theme: false,
	search: false,
	login: false,
};

export default function DefaultLayout({ children, location }) {
	const [themeMode, setThemeMode, themeModeList] = useThemeMode();
	const [currentIndex, setCurrentIndex] = useState(1);

	const isMobile = hasTouchScreen();
	// console.log('hasTouchScreen', isMobile);

	const handleTabChange = (index) => {
		setCurrentIndex(index);
		if (location.pathname !== '/') {
			navigate('/');
		}
	};

	return (
		<ThemeProvider theme={{ mode: themeMode }}>
			<GlobalStyles mode={themeMode} />
			{isMobile ? (
				<NavMobile
					defaultMenuStates={defaultMenuStates}
					themeModeList={themeModeList}
					themeMode={themeMode}
					setThemeMode={setThemeMode}
					contentTypes={contentTypes}
					handleTabChange={handleTabChange}
					currentTabIndex={currentIndex}
				/>
			) : (
				<Header contentTypes={contentTypes} handleTabChange={handleTabChange} currentTabIndex={currentIndex} />
			)}

			{React.Children.map(children, (child) => {
				return React.cloneElement(child, { currentIndex, isMobile });
			})}
		</ThemeProvider>
	);
}
