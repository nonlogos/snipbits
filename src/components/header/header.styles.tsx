import styled from 'styled-components';
import { mediaSizes } from '../../theme/media';

export const StyledHeader = styled.header`
	display: flex;
	flex-direction: column;
	background: var(--header);
	position: relative;
	li {
		padding-left: 0;
		&:before {
			content: none;
		}
	}
`;

export const StyledContentTabs = styled.div`
	background: var(--header);
	z-index: 12;
	width: 100%;
	/* only fix tablist at top of screen when isFixed is true */
	position: ${({ isFixed }) => (isFixed ? 'fixed' : 'inherit')};

	@media screen and (min-width: ${mediaSizes.tab}px) {
		width: ${({ isFixed }) => (isFixed ? '100%' : '80%')};
		margin: 0 auto;
		padding-top: var(--x2-spacing);
		& > * {
			width: ${({ isFixed }) => (isFixed ? '80%' : '100%')};
			margin: 0.5rem auto;
		}
	}
	@media screen and (min-width: ${mediaSizes.desk}px) {
		--width: min(65%, 780px);
		width: ${({ isFixed }) => (isFixed ? '100%' : 'var(--width)')};
		& > * {
			width: ${({ isFixed }) => (isFixed ? 'var(--width)' : '100;')};
			margin: 0.5rem auto;
		}
	}
`;

export const StyledNav = styled.div`
	display: flex;
	justify-content: center;
	margin: var(--x4-spacing) auto 0;
	padding: 1rem;
	svg {
		width: 5vw;
		min-width: 2.5rem;
		@media screen and (min-width: ${mediaSizes.tab}px) {
			width: 9vw;
		}
	}
`;
