import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { contentTypes } from '../pageUtils/constants';
import useThemeMode from '../hooks/useThemeMode';
import useContentTypes from '../hooks/useContentTypes';
import { hasTouchScreen } from '../utils/hasTouchScreen';
import GlobalStyles from '../theme/globalStyles';
import NavMobile from './nav-mobile/NavMobile';

const defaultMenuStates = {
	theme: false,
	search: false,
	login: false,
};

export default function DefaultLayout({ children }) {
	const [themeMode, setThemeMode, themeModeList] = useThemeMode();
	const [currentIndex, setCurrentIndex] = useState(1);

	const isMobile = hasTouchScreen();
	// console.log('hasTouchScreen', isMobile);

	const handleTabChange = (index) => {
		console.log('clicked', index);
		setCurrentIndex(index);
	};

	return (
		<ThemeProvider theme={{ mode: themeMode }}>
			<GlobalStyles mode={themeMode} />
			{isMobile && (
				<NavMobile
					defaultMenuStates={defaultMenuStates}
					themeModeList={themeModeList}
					themeMode={themeMode}
					setThemeMode={setThemeMode}
					contentTypes={contentTypes}
					handleTabChange={handleTabChange}
					currentTabIndex={currentIndex}
				/>
			)}

			{React.Children.map(children, (child) => {
				return React.cloneElement(child, { currentIndex, isMobile });
			})}
		</ThemeProvider>
	);
}
