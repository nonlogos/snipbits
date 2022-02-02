import React from 'react';
import styled from 'styled-components';

import { mediaSizes } from '../theme/media';
import Tabs from './tabs/Tabs';
import Tab from './tabs/Tab';

const StyledTabList = styled.div`
	width: 100%;
	font-size: var(--x2-spacing);
	line-height: 1rem;
`;

export default function ContentTabsMenu({ currentTabIndex, handleTabChange, contentTypes }) {
	return (
		<StyledTabList>
			<Tabs currentTabIndex={currentTabIndex} handleTabChange={handleTabChange}>
				{contentTypes.map((type) => (
					<Tab key={type.name} title={type.name} icon={type.icon} fill={type.fill} />
				))}
			</Tabs>
		</StyledTabList>
	);
}
