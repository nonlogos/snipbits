import styled from 'styled-components';

export const StyledSearchForm = styled.form`
	--font-size: 1.5rem;
	position: relative;
`;

export const StyledInputContainer = styled.div`
	display: grid;
	grid-template-columns: 7fr 1fr;
	grid-gap: 0.7rem;
	height: clamp(3rem, 7vh, 3.1rem);
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
