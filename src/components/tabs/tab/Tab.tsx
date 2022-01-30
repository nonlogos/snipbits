import React from 'react';
import styled from 'styled-components';

const StyledLi = styled.li`
	width: 100%;
	height: 100%;
	padding: 0.6rem 0.8rem;
	text-transform: capitalize;
	text-align: center;

	&.active {
		border-bottom: 3px solid var(--brand);
	}
`;

export default function Tab({ title, index, handleTabChange, currentTabIndex }) {
	const classStr = index === currentTabIndex ? 'active' : '';
	return (
		<StyledLi className={classStr} onClick={() => handleTabChange(index)}>
			{title}
		</StyledLi>
	);
}
