import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: clamp(15rem, 10vh, 30rem);
	background: var(--text-2);
	z-index: 2000;
`;

const StyledContent = styled.div`
	width: 80%;
	margin: 2vh auto;
	text-align: center;
`;

const StyledMenu = styled.menu`
	display: grid;
	grid-auto-columns: auto;
	grid-auto-flow: column;
	justify-content: center;
	align-items: center;
	grid-gap: 3rem;
`;

const StyledItem = styled.li`
	color: var(--surface-1);
`;

export default function DropdownMenu({ children, title }) {
	return (
		<StyledContainer>
			<StyledContent>
				<h3>{title}</h3>
				<StyledMenu>{children}</StyledMenu>
			</StyledContent>
		</StyledContainer>
	);
}

DropdownMenu.item = StyledItem;
