import React from 'react';
import styled from 'styled-components';

const StyledMenu = styled.menu`
	display: flex;
	justify-content: center;
`;

export default function Tabs({ children, currentTabIndex, handleTabChange }) {
	return (
		<StyledMenu>
			{React.Children.map(children, (child, i) => {
				return React.cloneElement(child, { currentTabIndex, handleTabChange, index: i + 1 });
			})}
		</StyledMenu>
	);
}
