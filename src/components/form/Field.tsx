import React, { useRef } from 'react';

import styled from 'styled-components';

const StyledFieldContainer = styled.div`
	display: grid;
	grid-gap: var(--unit);
	label {
		margin-right: var(--unit);
		text-transform: capitalize;
		font-weight: 700;
		font-size: 1.2em;
		letter-spacing: 0.5px;
	}
	p {
		margin-top: 0.2rem;
		line-height: var(--x3-spacing);
	}
`;

const StyledInput = styled.input`
	padding-left: var(--x2-spacing);
`;

export default function Field({
	id,
	name,
	autoComplete,
	type,
	value,
	handleOnChange,
	handleBlur,
	placeholder,
	isRequired,
	className,
	error,
}) {
	const inputRef = useRef(null);
	const handleOnBlur = (e) => {
		handleBlur(e, inputRef);
	};
	return (
		<StyledFieldContainer>
			<label htmlFor={id}>{name}: </label>
			<StyledInput
				type={type}
				id={id}
				name={name}
				className={className}
				placeholder={placeholder}
				autoComplete={autoComplete || false}
				required={isRequired}
				aria-invalid={!!error}
				value={value}
				onChange={handleOnChange}
				onBlur={handleOnBlur}
				ref={inputRef}
			/>
			<p role="alert" aria-atomic="true">
				{error}
			</p>
		</StyledFieldContainer>
	);
}
