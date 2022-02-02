import React from 'react';
import styled from 'styled-components';

import { mediaSizes } from '../../theme/media';

export const StyledCard = styled.article`
	--shadow: 6px 6px 14px 1px rgba(0, 0, 0, 0.5);
	display: grid;
	cursor: pointer;
	background-color: var(--surface-2);
	width: 100%;
	padding: 7vh 7vw 5vh 7vw;
	position: relative;
	will-change: background-color, box-shadow;
	transition: background-color var(--transition), box-shadow var(--transition);

	&:hover {
		background-color: var(--surface-3);
		-webkit-box-shadow: var(--shadow);
		-moz-box-shadow: var(--shadow);
		box-shadow: var(--shadow);
	}
	h2 {
		font-variation-settings: 'WONK' 0, 'SOFT' 100, 'opsz' 72, 'wght' 100;
		font-weight: 100;
		text-align: left;
		margin: var(--unit) 0 var(--x2-spacing);
	}
	a {
		z-index: 10;
		padding: 5px 0;
		border-bottom: none;
		color: var(--text-1);
	}
	@media screen and (min-width: ${mediaSizes.tab}px) {
		border-radius: var(--border-radius);
		padding: 1.5em;
		font-size: clamp(1rem, 0.7em, 1.5rem);
		line-height: 1.5;
		height: 100%;

		h2 {
			font-size: 1.7rem;
			font-variation-settings: 'WONK' 0, 'SOFT' 100, 'opsz' 50, 'wght' 400;
			text-align: center;
		}
	}
`;

export const StyledIconContainer = styled.div`
	--spacing: var(--x3-spacing);
	position: absolute;
	right: var(--spacing);
	top: var(--spacing);
	width: var(--x3-spacing);
	svg {
		fill: ${({ fill }) => `var(${fill})` || 'var(--primary)'};
	}
`;

export const StyledDateContainer = styled.div`
	--color: var(--header);
	position: relative;
	height: 0.8em;
	border-left: 2px solid var(--color);
	margin-top: var(--x5-spacing);
	padding: 0 0 0 var(--unit);
	color: var(--color);
	line-height: 0.8em;

	& time {
		font-size: 0.9em;
		line-height: 0.9em;
		position: absolute;
		top: 2px;
	}
`;
