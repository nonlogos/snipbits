import React, { useState, useRef } from 'react';
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

function mapTags(tags) {
	return tags.map((tagObj) => tagObj.tag);
}

export default function DefaultLayout({ children, location, pageContext }) {
	const [themeMode, setThemeMode, themeModeList] = useThemeMode();
	const [currentIndex, setCurrentIndex] = useState(1);
	const taglist = useRef([]);

	// check if this is a mobile device browser
	const isMobile = hasTouchScreen();
	// console.log('hasTouchScreen', isMobile);

	// format the tags list for search input's auto complete

	const tags = pageContext.postsData?.allPosts?.tags?.group;
	taglist.current = mapTags(tags);

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
				<Header
					contentTypes={contentTypes}
					handleTabChange={handleTabChange}
					currentTabIndex={currentIndex}
					tags={taglist.current}
				/>
			)}

			{React.Children.map(children, (child) => {
				return React.cloneElement(child, { currentIndex, isMobile });
			})}
		</ThemeProvider>
	);
}
