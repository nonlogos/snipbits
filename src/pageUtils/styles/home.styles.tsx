import styled from 'styled-components';

import { mediaSizes } from '../../theme/media';

export const StyledMain = styled.main`
	width: 100%;
	height: 100%;
	overflow: hidden;
	margin-top: ${({ isMobile }) => (isMobile ? '40px' : 0)};
	@media screen and (min-width: ${mediaSizes.tab}px) {
		margin: 0 auto;
		margin-top: ${({ isMobile }) => (isMobile ? '5rem' : 0)};
		width: 80%;
	}
`;

export const StyledCardsContainer = styled.section`
	width: 100%;
	height: 100%;
	display: flex;
	transform: ${({ viewIndex }) => {
		return `translateX(calc(-${viewIndex - 1} * 100%))`;
	}};
	transition: transform 0.5s ease-out;
	will-change: transform;
`;
