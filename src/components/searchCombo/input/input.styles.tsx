import styled from 'styled-components';

export const StyledInputContainer = styled.div`
	position: relative;
`;

export const StyledInput = styled.input`
	width: 100%;
	background: var(--text-1);
	padding: var(--unit);
	padding-left: var(--x8-spacing);
	font-size: var(--font-size);
	line-height: var(--font-size);
	border-radius: var(--border-radius);
	vertical-align: baseline;
	&::-webkit-search-cancel-button {
		display: none;
		opacity: 0;
	}
`;

export const StyledSearchIcon = styled.div`
	position: absolute;
	left: var(--x2-spacing);
	display: flex;
	justify-content: center;
	width: 2rem;
	height: 100%;
`;

export const StyledCloseButton = styled.button`
	position: absolute;
	right: var(--x2-spacing);
	/* display: flex;
	justify-content: center; */
	width: 2rem;
	height: 100%;
`;
