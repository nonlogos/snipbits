import React from 'react';
import styled from 'styled-components';

const StyledListButton = styled.button`
	--hover-bkgd: var(--text-1);
	height: 100%;
	width: 100%;
	padding: 1rem 2rem;
	background: var(--text-2);
	&:hover {
		background: var(--hover-bkgd);
	}
	&.active {
		background: var(--hover-bkgd);
	}
`;

export default function Option({ name, index, handleSelect, isFocused }) {
	return (
		<li key={name} role="option" tabIndex={isFocused ? 0 : -1} id={`suggestion-${index + 1}`}>
			<StyledListButton
				className={isFocused && 'active'}
				onMouseDown={(e) => e.preventDefault()}
				onClick={(_) => handleSelect(name)}
			>
				{name}
			</StyledListButton>
		</li>
	);
}
