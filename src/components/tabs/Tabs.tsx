import React from 'react';
import styled from 'styled-components';
import { mediaSizes } from '../../theme/media';

const StyledMenu = styled.menu`
	display: flex;
	justify-content: center;
	gap: var(--unit);
	padding: var(--unit);
`;

export default function Tabs({ children, currentTabIndex, handleTabChange }) {
	return (
		<StyledMenu role="tablist">
			{React.Children.map(children, (child, i) => {
				return React.cloneElement(child, { currentTabIndex, handleTabChange, index: i + 1 });
			})}
		</StyledMenu>
	);
}
