import React, { useRef, useEffect, useState } from 'react';

import Logo from '../Logo';
import { StyledNav, StyledHeader, StyledContentTabs } from './header.styles';
import DesktopNav from './desktopNav/DesktopNav';
import ContentTabsMenu from '../ContentTabsMenu';
import SearchCombo from '../searchCombo/SearchCombo';
import useWindowResizeListener from '../../utils/hooks/useWindowResizeListener';
import useScrollEventListener from '../../utils/hooks/useScrollEventListener';
import { mediaSizes } from '../../theme/media';

const tabMediaSize = mediaSizes.tab;

export default function Nav({ currentTabIndex, handleTabChange, contentTypes }) {
	const [scrollTrigger, setScrollTrigger] = useState(0);
	const [isFixed, setIsFixed] = useState(false);
	const { scrollData } = useScrollEventListener();
	const { vpWidth } = useWindowResizeListener();
	const contentTabsRef = useRef(null);

	// set tablist position to be fixed at top of view
	// if > user scrolls pass the tablist (so it's by default offscreen)
	//    > and if user is scrolling up (so the tablist is hidden when user scrolls down)
	const handleScroll = () => {
		if (scrollTrigger && scrollData.yPos >= scrollTrigger && scrollData.direction === 'up') {
			setIsFixed(true);
		} else {
			setIsFixed(false);
		}
	};

	useEffect(() => {
		const trigger = contentTabsRef.current?.getBoundingClientRect().height;
		setScrollTrigger(trigger);
	}, []);

	useEffect(() => {
		requestAnimationFrame(handleScroll);
	}, [scrollTrigger, scrollData.yPos]);

	return (
		<StyledHeader>
			<StyledNav>
				{vpWidth > tabMediaSize ? (
					<>
						<Logo isIcon={false} />
						<DesktopNav />
					</>
				) : (
					<Logo isIcon={true} />
				)}
			</StyledNav>

			<StyledContentTabs ref={contentTabsRef} isFixed={isFixed}>
				{vpWidth > tabMediaSize ? (
					<>
						<SearchCombo />
						<ContentTabsMenu
							currentTabIndex={currentTabIndex}
							handleTabChange={handleTabChange}
							contentTypes={contentTypes}
							scrollData={scrollData}
						/>
					</>
				) : (
					<ContentTabsMenu
						currentTabIndex={currentTabIndex}
						handleTabChange={handleTabChange}
						contentTypes={contentTypes}
						scrollData={scrollData}
					/>
				)}
			</StyledContentTabs>
		</StyledHeader>
	);
}
