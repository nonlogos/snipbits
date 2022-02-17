import styled from 'styled-components';
import { mediaSizes } from '../../theme/media';

export const StyledUl = styled.ul`
	flex-shrink: 0;
	flex-grow: 1;
	display: grid;
	align-content: start;
	width: 100%;
	-webkit-overflow-scrolling: touch;
	& > li {
		padding-left: 0;
		&:not(:first-child) {
			border-top: 1px solid var(--text-2-light);
		}
	}

	@media screen and (min-width: ${mediaSizes.tab}px) {
		padding: 0 6vw;
		margin-top: var(--x5-spacing);
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		grid-gap: 1em;

		& > li:not(:first-child) {
			border-top: none;
		}
	}
`;
