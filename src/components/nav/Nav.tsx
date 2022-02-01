import React, { useLayoutEffect, useRef, useState } from 'react';

import Logo from '../Logo';
import { StyledLogo, StyledHeader } from './nav.styles';
import ContentTabsMenu from '../ContentTabsMenu';

export default function Nav({ currentTabIndex, handleTabChange, contentTypes, scrollData }) {
	// const [headerState, setHeaderState] = useState();
	// const logoDivRef = useRef(null);
	// let scrollTrigger;

	// useLayoutEffect(() => {
	// 	scrollTrigger = logoDivRef.current?.getBoundingClientRect().height;
	// 	console.log('headerHeight', scrollTrigger);
	// }, []);
	return (
		<StyledHeader>
			<StyledLogo>
				<Logo isIcon={true} />
			</StyledLogo>

			<ContentTabsMenu
				currentTabIndex={currentTabIndex}
				handleTabChange={handleTabChange}
				contentTypes={contentTypes}
				scrollData={scrollData}
			/>
		</StyledHeader>
	);
}
