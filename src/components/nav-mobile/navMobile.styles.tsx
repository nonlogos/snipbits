import React from 'react';
import styled from 'styled-components';

import { mediaSizes } from '../../theme/media';

export const StyledHeader = styled.header`
	--logo-height: 40px;
`;

export const StyledTopNavContainer = styled.div`
	--height: var(--logo-height);
	--svg-size: 32px;
	--horizontal-margin: calc((var(--height) - var(--svg-size)) / 2);
	position: fixed;
	top: 0;
	height: var(--height);
	width: 100%;
	z-index: 10;
	display: grid;
	grid-template-columns: repeat(3, auto);
	place-items: center;
	background: black;
	& svg {
		width: var(--svg-size);
		height: var(--svg-size);
		fill: var(--text-1);
	}
`;

export const StyledlogoContainer = styled.div`
	padding: 0.2rem 0.5rem;
`;

export const StyledTabList = styled.div`
	width: 100%;
	height: 100%;
	font-size: var(--x2-spacing);
	line-height: 1rem;
`;

export const StyledMenu = styled.menu`
	--menu-height: clamp(55px, 8vh, 100px);
	--hidden-y-pos: -300px;
	position: fixed;
	bottom: 0;
	z-index: 11;
	display: grid;
	grid-template-columns: repeat(3, minMax(0, 1fr));
	gripd-gap: 0.5em;
	place-items: center;
	color: var(--surface-1);
	width: 100%;
	height: var(--menu-height);
	font-size: clamp(14px, 0.7em, 1em);
	li {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-items: center;
		position: relative;
		padding-left: 0;
		width: 100%;
		height: 100%;
		&:before {
			content: none;
		}
	}

	@media screen and (min-width: ${mediaSizes.tab}px) {
		/* width: 70%; */
		margin: 0 auto;
	}
`;

export const StyledSearchForm = styled.form`
	position: absolute;
	top: 4rem;
	left: var(--unit);
	right: var(--unit);
	input {
		width: 100%;
		background: var(--text-1);
		padding: var(--x2-spacing);
		line-height: 1.2rem;
		border-radius: var(--border-radius);
	}
`;
