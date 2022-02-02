import styled from 'styled-components';

import { mediaSizes } from '../../../theme/media';

export const StyledButton = styled.button`
	height: 100%;
	width: 100%;
	position: relative;
	z-index: 10;
	text-align: center;
	background: ${({ theme }) => (theme.mode === 'light' ? `var(--text-1)` : `var(--brand)`)};
	padding: 0.3rem;
	& .nav-icon {
		width: 24px;
		height: 24px;
	}
`;

export const StyledSubmenu = styled.div`
	--slideout-animation: 0.3s;
	position: fixed;
	bottom: var(--hidden-y-pos);
	left: 0;
	height: 0;
	margin: 0;
	padding: 1rem;
	padding-right: 1.32rem;
	height: 40vh;
	width: 100%;
	background: var(--text-2);
	/* animation */
	will-change: transform;
	transform-origin: bottom center;
	transition: transform var(--slideout-animation) ease-out;
	}

	&.expanded {
		transform: translateY(calc(var(--hidden-y-pos) - var(--menu-height)));
		li {
			opacity: 1;
		}
	}

	&.search-popup.expanded {
		display: block;
		height: 100%;
		transform: translateY(calc(var(--hidden-y-pos) - var(--menu-height)));
	}

	@media (orientation: landscape) and (min-width: ${mediaSizes.tab}px) {
		flex-direction: row;
		height: 40vh;
		padding-right: 1.8rem;
	}
`;

export const StyledUl = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	justify-content: center;
	align-items: center;

	/* submenu list items */
	li {
		width: 100%;
		opacity: 0;
		/* list animation */
		will-change: opacity;
		transition: opacity 0.2s ease-out;
		transition-delay: var(--slideout-animation);
		button {
			display: block;
			width: 100%;
			height: 100%;
			padding: 0.5rem;
			margin: 0 auto;
			text-align: center;
			border: 1px solid var(--surface-1);
			border-radius: var(--border-radius);
		}
`;
