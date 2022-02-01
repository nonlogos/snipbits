import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

import useScrollEventListener from '../hooks/useScrollEventListener';
import Tabs from './tabs/Tabs';
import Tab from './tabs/Tab';

const StyledTabList = styled.div`
	width: 100%;
	font-size: var(--x2-spacing);
	line-height: 1rem;
	background: var(--header);
	z-index: 12;
	/* only fix tablist at top of screen when isFixed is true */
	position: ${({ isFixed }) => (isFixed ? 'fixed' : 'inherit')};
`;

export default function ContentTabsMenu({ currentTabIndex, handleTabChange, contentTypes }) {
	const { scrollData } = useScrollEventListener();
	const [isFixed, setIsFixed] = useState(false);
	const [scrollTrigger, setScrollTrigger] = useState();
	const tablistRef = useRef(null);

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
		const trigger = tablistRef.current?.getBoundingClientRect().height;
		setScrollTrigger(trigger);
	}, []);

	useEffect(() => {
		requestAnimationFrame(handleScroll);
	}, [scrollTrigger, scrollData.yPos]);

	return (
		<StyledTabList isFixed={isFixed} ref={tablistRef}>
			<Tabs currentTabIndex={currentTabIndex} handleTabChange={handleTabChange}>
				{contentTypes.map((type) => (
					<Tab key={type.name} title={type.name} icon={type.icon} />
				))}
			</Tabs>
		</StyledTabList>
	);
}
