import styled from 'styled-components';

export const StyledHeader = styled.header`
	display: flex;
	flex-direction: column;
	background: var(--header);
`;

export const StyledLogo = styled.div`
	display: flex;
	justify-content: center;
	padding: 1rem;
	svg {
		width: 5vw;
	}
`;
