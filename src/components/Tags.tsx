import React from 'react';
import styled from 'styled-components';

const StyledTagsContainer = styled.ul`
	--color: var(--text-2-light);
	--gap: 0.5em;
	align-self: flex-end; // push tags to the bottom of the card
	display: flex;
	flex-wrap: wrap;
	gap: var(--gap);
	row-gap: var(--gap);
	justify-content: flex-end;
	align-items: baseline; // align item with text baseline
`;

const StyledTag = styled.li`
	border: 1px solid var(--color);
	border-radius: 5px;
	margin: 0;
	padding: 0.2em 0.5em;
	font-size: 0.9em;
	color: var(--color);
`;

export default function Tag({ tags }) {
	return (
		<StyledTagsContainer>
			{tags.map((tag) => (
				<StyledTag key={tag}>{tag}</StyledTag>
			))}
		</StyledTagsContainer>
	);
}
