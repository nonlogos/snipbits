import styled from 'styled-components';
import { mediaSizes } from '../../theme/media';

export const StyledUl = styled.ul`
	flex-shrink: 0;
	flex-grow: 1;
	display: grid;
	align-content: start;
	width: 100%;
	-webkit-overflow-scrolling: touch;
	li {
		grid: auto-flow / 1fr;
		padding-left: 0;
		&:before {
			content: none;
		}
	}
	@media screen and (min-width: ${mediaSizes.tab}px) {
		grid-template-columns: repeat(3, minMax(0, 1fr));
		grid-gap: 1em;

		article {
			border-top: none;
			padding: 1.2em;
			font-size: clamp(1rem, 0.7em, 1.5rem);
			line-height: 1.5;
			height: 100%;

			h2 {
				font-size: 2rem;
			}
		}
	}
`;
