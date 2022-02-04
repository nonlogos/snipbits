import React, { useState } from 'react';
import { navigate } from 'gatsby';
import styled from 'styled-components';
import { Search2 as Icon } from '@styled-icons/remix-line';

const StyledSearchForm = styled.form`
	--font-size: 1.5rem;
	position: relative;
	input {
		width: 100%;
		background: var(--text-1);
		padding: var(--unit);
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
	const [searchTerm, setSearchTerm] = useState('');

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchTerm((state) => e.target.value);
	};

	const handleOnSubmit = async (e: React.SyntheticEvent) => {
		e.preventDefault();
		try {
			await navigate(`/?q=${searchTerm}`);
		} catch (e) {
			console.error(e);
		}
	};
	// [TODO] turn icon into button to submit form
	// [TODO] or need to add auto complete tag hints
	return (
		<StyledSearchForm role="search" arial-label="Sitewide" onSubmit={handleOnSubmit}>
			<div>
				<label htmlFor="search" className="visually-hidden">
					Search something...
				</label>
				<StyledIcon>
					<Icon />
				</StyledIcon>
				<input
					type="search"
					arial-label="Search something"
					title="Search something"
					placeholder="Search something"
					onChange={handleInputChange}
					value={searchTerm}
				/>
			</div>
		</StyledSearchForm>
	);
}
