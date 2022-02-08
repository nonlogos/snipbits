import React, { useRef } from 'react';

import Input from './input/Input';
import Option from './option/Option';
import useSearchCombo from '../../utils/hooks/useSearchCombo';
import { StyledSearchForm, StyledSuggestions } from './searchCombo.styles';

export function Search({ tags }) {
	const inputRef = useRef<HTMLInputElement>(null);
	const {
		input,
		showDropdown,
		dropdownList,
		focusIndex,
		handleInputChange,
		handleOnFocusBlur,
		handleSubmit,
		handleSelect,
		handleOnKeyDown,
		handleReset,
	} = useSearchCombo({
		defaultList: tags,
		ref: inputRef,
	});

	const handleOnSubmit = async (e: React.SyntheticEvent) => {
		e.preventDefault();
		await handleSubmit();
	};

	// [TODO] turn icon into button to submit form
	// [TODO] or need to add auto complete tag hints
	return (
		<div style={{ position: 'relative' }}>
			<StyledSearchForm role="search" arial-label="Sitewide" onSubmit={handleOnSubmit}>
				<label htmlFor="search" className="visually-hidden">
					Search something...
				</label>
				<div>
					{/* [TODO] need to add dynamic hinting here */}
					<div className="suggestions-help" role="status" aria-live="polite"></div>

					<Input
						id="search"
						isExpanded={showDropdown}
						handleOnChange={handleInputChange}
						handleOnFocusBlur={handleOnFocusBlur}
						handleOnKeyDown={handleOnKeyDown}
						handleReset={handleReset}
						value={input}
						ref={inputRef}
					/>
					<StyledSuggestions className={showDropdown === false && 'hidden'}>
						<ul
							tabIndex={0}
							role="listbox"
							id="search_suggestions"
							aria-activedescendant={`suggestion-${focusIndex + 1}`}
						>
							{dropdownList.map((name, index) => (
								<Option
									key={name}
									name={name}
									index={index}
									handleSelect={handleSelect}
									isFocused={focusIndex === index}
								/>
							))}
						</ul>
					</StyledSuggestions>
				</div>
			</StyledSearchForm>
		</div>
	);
}

const SearchCombo = React.memo(Search); // memoized to prevent excessive rerendering due to scrolling event

export default SearchCombo;
