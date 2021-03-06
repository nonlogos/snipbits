import React, { forwardRef } from 'react';
import { Search2 as SearchIcon, Close as ClearIcon } from '@styled-icons/remix-line';

import { StyledInputContainer, StyledInput, StyledSearchIcon, StyledClearButton } from './input.styles';

type props = {
	id: string;
	isExpanded: boolean;
	handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	handleOnFocusBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
	handleOnKeyDown: (e: React.KeyboardEvent) => void;
	handleReset: () => void;
	value: string;
};

const Input = forwardRef<HTMLInputElement, props>(
	({ id, isExpanded, handleOnChange, handleOnFocusBlur, handleOnKeyDown, handleReset, value }, ref) => {
		const handleClear = (e) => {
			e.preventDefault();
			handleReset();
		};
		return (
			<StyledInputContainer>
				<StyledSearchIcon>
					<SearchIcon />
				</StyledSearchIcon>
				<StyledInput
					id={id}
					type="search"
					role="combobox"
					title="Search something"
					placeholder="Search something"
					aria-owns="search_suggestions"
					autoComplete="off"
					aria-autocomplete="list"
					aria-expanded={isExpanded}
					onChange={handleOnChange}
					onFocus={handleOnFocusBlur}
					onBlur={handleOnFocusBlur}
					onKeyDown={handleOnKeyDown}
					value={value}
					ref={ref}
				/>
				<StyledClearButton type="button" onClick={handleClear} onKeyPress={handleClear}>
					<ClearIcon />
				</StyledClearButton>
			</StyledInputContainer>
		);
	}
);

export default Input;
