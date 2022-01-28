import * as React from 'react';
import { ThemeProvider } from 'styled-components';

import useThemeMode from '../hooks/useThemeMode';
import useContentTypes from '../hooks/useContentTypes';
import { hasTouchScreen } from '../utils/hasTouchScreen';
import GlobalStyles from '../theme/globalStyles';
import NavMobile from './nav-mobile/NavMobile';

const contentTypes = ['blogs', 'snippets', 'categories'];

const defaultMenuStates = {
	theme: false,
	search: false,
	categories: false,
};

function DefaultLayout({ children }) {
	const [themeMode, setThemeMode, themeModeList] = useThemeMode();
	const [showContentTypes, handleSelectedContent] = useContentTypes(contentTypes);
	const isMobile = hasTouchScreen();
	// console.log('hasTouchScreen', isMobile);
	// [TODO] need to add clone element to children
	return (
		<ThemeProvider theme={{ mode: themeMode }}>
			<GlobalStyles mode={themeMode} />
			{isMobile && (
				<NavMobile
					defaultMenuStates={defaultMenuStates}
					themeModeList={themeModeList}
					themeMode={themeMode}
					setThemeMode={setThemeMode}
					showContentTypes={showContentTypes}
					handleContents={handleSelectedContent}
				/>
			)}

			{React.Children.map(children, (child) => {
				return React.cloneElement(child, { showContentTypes });
			})}
		</ThemeProvider>
	);
}

export default DefaultLayout;
