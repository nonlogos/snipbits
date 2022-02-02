import React from 'react';
import styled from 'styled-components';
import { Search2 as Icon } from '@styled-icons/remix-line';

const StyledSearchForm = styled.form`
	--font-size: 1.5rem;
	position: relative;
	input {
		width: 100%;
		background: var(--text-1);
		padding: var(--unit);
		/* padding-top: calc(var(--unit) + 2px); */
		padding-left: var(--x2-spacing);
		font-size: var(--font-size);
		line-height: var(--font-size);
		border-radius: var(--border-radius);
		vertical-align: baseline;
	}
`;

const StyledIcon = styled.div`
	position: absolute;
	right: var(--x2-spacing);
	display: flex;
	justify-content: center;
	width: 2rem;
	height: 100%;
`;

export default function SearchInput() {
	return (
		<StyledSearchForm role="search" arial-label="Sitewide">
			<div>
				<label htmlFor="search" className="visually-hidden">
					Search something...
				</label>
				<StyledIcon>
					<Icon />
				</StyledIcon>
				<input type="search" arial-label="Search something" title="Search something" placeholder="Search something" />
			</div>
		</StyledSearchForm>
	);
}
