import styled from 'styled-components';

export const StyledMenu = styled.menu`
	--spacing: var(--x3-spacing);
	position: absolute;
	top: var(--spacing);
	right: 10%;
	display: grid;
	grid-template-columns: repeat(2, minMax(0, 1fr));
	grid-gap: var(--spacing);

	button {
		display: flex;
		flex-direction: column;
		align-items: center;
		font-size: 0.8em;
		cursor: pointer;
		will-change: color;
		transition: color var(--transition);

		&:hover {
			color: var(--surface-1);
		}

		svg {
			width: var(--spacing);
			height: var(--spacing);
		}
	}
`;
