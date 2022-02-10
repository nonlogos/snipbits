import styled from 'styled-components';

export const StyledInputContainer = styled.div`
	position: relative;
`;

export const StyledInput = styled.input`
	width: 100%;
	padding-left: var(--x8-spacing);
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
