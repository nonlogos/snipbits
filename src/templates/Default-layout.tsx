import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { navigate, StaticQuery, graphql } from 'gatsby';

import { TagsContext } from '../utils/contexts';
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

	console.log('location', location);

	// check if this is a mobile device browser
	const isMobile = hasTouchScreen();
	// console.log('hasTouchScreen', isMobile);

	// handler for tab(category) changes
	const handleTabChange = (index) => {
		setCurrentIndex(index);
		if (location.pathname !== '/') {
			navigate('/');
		}
	};
	// [TODO] consider using context for nav
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
				<StaticQuery
					query={graphql`
						query tagsQuery {
							allMdx {
								group(field: frontmatter___keywords) {
									tag: fieldValue
								}
							}
						}
					`}
					render={(data) => (
						<TagsContext.Provider value={data.allMdx.group}>
							<Header contentTypes={contentTypes} handleTabChange={handleTabChange} currentTabIndex={currentIndex} />
						</TagsContext.Provider>
					)}
				/>
			)}

			{React.Children.map(children, (child) => {
				return React.cloneElement(child, { currentIndex, isMobile });
			})}
		</ThemeProvider>
	);
}
