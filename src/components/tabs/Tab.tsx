import React from 'react';
import styled from 'styled-components';

const StyledLi = styled.li`
	width: 100%;
	height: 100%;
	text-transform: capitalize;
	text-align: center;
`;

const StyledIcon = styled.div`
	width: 1.2rem;
	height: 1.2rem;
	margin-right: 5px;
	margin-top: -3px;
`;

const StyledButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	padding: 0.6rem 0.8rem;
	width: 100%;
	height: 100%;
	color: var(--header);
	background: var(--surface-1);
	border-radius: var(--border-radius);
	&.active {
		color: var(--code-bkgd);
		background: var(--text-2);
	}
`;

export default function Tab({ title, index, icon, handleTabChange, currentTabIndex }) {
	const Icon = icon;
	const classStr = index === currentTabIndex ? 'active' : '';
	return (
		<StyledLi role="tab">
			<StyledButton className={classStr} onClick={() => handleTabChange(index)}>
				<StyledIcon>
					<Icon />
				</StyledIcon>
				{title}
			</StyledButton>
		</StyledLi>
	);
}
