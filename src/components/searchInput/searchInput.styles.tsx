import styled from 'styled-components';

export const StyledSearchForm = styled.form`
	--font-size: 1.5rem;
	position: relative;
	input {
		width: 100%;
		background: var(--text-1);
		padding: var(--unit);
		padding-left: var(--x2-spacing);
		font-size: var(--font-size);
		line-height: var(--font-size);
		border-radius: var(--border-radius);
		vertical-align: baseline;
	}
`;

export const StyledIcon = styled.div`
	position: absolute;
	right: var(--x2-spacing);
	display: flex;
	justify-content: center;
	width: 2rem;
	height: 100%;
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

export const StyledListButton = styled.button`
	height: 100%;
	width: 100%;
	padding: 1rem 2rem;
	background: var(--text-2);
	&:hover {
		background: var(--text-1);
	}
`;
