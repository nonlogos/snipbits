import React from 'react';
import styled from 'styled-components';

import { mediaSizes } from '../../theme/media';

export const StyledLogoCoontainer = styled.div`
	--height: 40px;
	--svg-size: 32px;
	--horizontal-margin: calc((var(--height) - var(--svg-size)) / 2);
	position: fixed;
	top: 0;
	height: var(--height);
	background: var(--surface-2);
	width: 100%;
	z-index: 10;
	display: flex;
	align-items: center;
	display: flex;
	align-items: center;
	justify-content: center;
	& svg {
		width: var(--svg-size);
		height: var(--svg-size);
		fill: var(--brand);
	}
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

export const StyledContentCheckList = styled.div`
	width: 50%;
	height: 100%;
	display: flex;
	margin: 0 auto;
	border: 1px solid var(--surface-1);
	border-radius: var(--border-radius);
	padding: var(--unit);
	input[type='checkbox' i] {
		width: 1.5rem;
		height: 1.5rem;
		position: relative;
		&:before {
			content: '';
			position: absolute;
			top: calc(var(--x2-spacing) / 5);
			left: var(--unit);
			width: var(--x2-spacing);
			height: var(--x2-spacing);
			border: 1px solid var(--surface-1);
			border-radius: 50%;
		}
	}
	label {
		cursor: Pointer;
		padding-left: var(--unit);
	}
`;
