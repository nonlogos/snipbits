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
	margin-right: 8px;
	margin-top: -3px;
`;

const StyledButton = styled.button`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	padding: 0.6rem 0.8rem;
	width: 100%;
	height: 100%;
	font-size: 1.2rem;
	line-height: 0;
	color: var(--header);
	background-color: var(--surface-1);
	border-radius: var(--border-radius);
	will-change: color, background-color;
	transition: color var(--transition), background-color var(--transition);
	&.active {
		color: var(--code-bkgd);
		background-color: ${({ bkgd }) => `var(${bkgd})` || `var(--primary)`};
		cursor: auto;
	}
	&:hover:not(.active) {
		color: var(--code-bkgd);
		background-color: var(--text-1);
	}
`;

export default function Tab({ title, index, icon, fill, handleTabChange, currentTabIndex }) {
	const Icon = icon;
	const classStr = index === currentTabIndex ? 'active' : '';
	return (
		<StyledLi role="tab" aria-selected={index === currentTabIndex} aria-controls={`panel-${index}`}>
			<StyledButton className={classStr} onClick={() => handleTabChange(index)} bkgd={fill}>
				<StyledIcon>
					<Icon />
				</StyledIcon>
				{title}
			</StyledButton>
		</StyledLi>
	);
}
