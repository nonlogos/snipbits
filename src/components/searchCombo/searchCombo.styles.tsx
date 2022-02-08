import styled from 'styled-components';

export const StyledSearchForm = styled.form`
	--font-size: 1.5rem;
	position: relative;
`;

export const StyledSuggestions = styled.div`
	position: absolute;
	width: 100%;
	opacity: 1;
	will-change: transform, opacity;
	transform: scaleY(1);
	transform-origin: top;
	color: var(--surface-1);
	transition: transform 0.2s ease-out;

	&.hidden {
		transform: scaleY(0);
		opacity: 0;
	}
`;
