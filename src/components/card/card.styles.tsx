import React from 'react';
import styled from 'styled-components';

import { mediaSizes } from '../../theme/media';

export const StyledCard = styled.article`
	cursor: pointer;
	background: var(--surface-2);
	width: 100%;
	padding: 7vh 7vw 5vh 7vw;
	position: relative;
	h2 {
		/* font-family: var(--header-font); */
		font-weight: 800;
		text-align: left;
		margin: 0;
	}
	a {
		z-index: 10;
		padding: 5px 0;
		border-bottom: none;
		color: var(--text-1);
	}
	@media screen and (min-width: ${mediaSizes.tab}px) {
		border-radius: var(--border-radius);
		article {
			padding: 1.2em;
			font-size: clamp(1rem, 0.7em, 1.5rem);
			line-height: 1.5;
			height: 100%;

			h2 {
				font-size: 2rem;
			}
		}
	}
`;

export const StyledContentType = styled.span`
	position: absolute;
	top: -1px;
	right: 0;
	width: clamp(6.5em, 30vw, 150px);
	background: ${({ type }) =>
		type === 'blog' ? 'var(--primary)' : type === 'snippets' ? 'var(--secondary-1)' : 'var(--secondary-2)'};
	/* padding-left: 1em; */
	border-radius: 0 0 0 15px;
	font-weight: 500;
	color: var(--surface-1);
	text-transform: uppercase;
	text-align: center;
	line-height: 1.5em;
	@media screen and (min-width: ${mediaSizes.tab}px) {
		border-radius: 0 15px 0 15px;
	}
`;

export const StyledTimeContainer = styled.div`
	border-left: 2px solid var(--text-2-light);
	padding: 0 0 0 var(--unit);
	color: var(--text-2-light);
	line-height: 0.8em;
	position: relative;
	height: 0.8em;
	& time {
		font-size: 0.9em;
		line-height: 0.9em;
		position: absolute;
		top: 2px;
	}
`;
