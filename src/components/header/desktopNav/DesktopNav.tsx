import React from 'react';
import styled from 'styled-components';
import { Sun as SunIcon, LoginCircle as LoginIcon } from '@styled-icons/remix-line';

export const StyledMenu = styled.menu`
	--spacing: var(--x3-spacing);
	position: absolute;
	top: var(--spacing);
	right: 10%;
	display: flex;
	gap: var(--spacing);

	button {
		display: flex;
		flex-direction: column;
		align-items: center;
		font-size: 0.7em;
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

export default function DesktopNav() {
	return (
		<StyledMenu>
			<li>
				<button>
					<SunIcon />
					Theme
				</button>
			</li>
			<li>
				<button>
					<LoginIcon />
					Login
				</button>
			</li>
		</StyledMenu>
	);
}
