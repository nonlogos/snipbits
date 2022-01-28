import styled from 'styled-components';

import { mediaSizes } from '../../theme/media';

export const StyledCardsContainer = styled.section`
	@media screen and (min-width: ${mediaSizes.tab}px) {
		display: flex;
		width: 90%;
		margin: 0 auto;
		gap: 1em;
	}
`;

export const StyledUl = styled.ul`
	display: grid;
	grid: auto-flow / 1fr;
	width: 100%;
	align-content: start;
	-webkit-overflow-scrolling: touch;
	li {
		padding-left: 0;
		&:before {
			content: none;
		}
	}
	@media screen and (min-width: ${mediaSizes.tab}px) {
		grid-gap: 1em;
		&:first-child:nth-last-child(1) {
			grid-template-columns: repeat(3, minMax(0, 1fr));
		}
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
