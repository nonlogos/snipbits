import React, { useState, useEffect, useRef } from 'react';
import { navigate } from 'gatsby';

import { Search2 as Icon } from '@styled-icons/remix-line';
import { StyledSearchForm, StyledIcon, StyledSuggestions, StyledListButton } from './searchInput.styles';

export default function SearchInput({ tags, arialControl }) {
	const [input, setInput] = useState('');
	const [searchKeys, setSearchKeys] = useState(['']);
	const [inputIsFocused, setInputIsFocused] = useState(false);
	const [suggestion, setSuggestion] = useState({ show: false, tags: [] });
	const inputRef = useRef(null);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		console.log('input change', e.target.value);
		const target = e.target.value;

		setSearchKeys((keys) => target.split(' '));
		setInput(target);
	};

	const handleOnSubmit = async (e: React.SyntheticEvent) => {
		e.preventDefault();
		try {
			await navigate(`/?q=${searchKeys.join(' ').trim()}`);
		} catch (e) {
			console.error(e);
		}
	};

	const handleOnFocusBlur = (e) => {
		console.log('e', e);
		const isFocused = e.type === 'focus' ? true : false;
		setInputIsFocused((_) => isFocused);
	};

	const handleOnKeyPress = (e) => {
		console.log('e', e);
	};

	const handleTagSelect = (e, tag) => {
		console.log('tag', tag);
		// e.preventDefault();
		setSearchKeys((keys) => {
			keys[keys.length - 1] = tag;
			setInput(() => `${keys.join(' ')} `); // repopulate input with extra space
			return keys;
		});
		// setInputIsFocused((_) => false);
		setSuggestion((state) => ({ ...state, tags: [] }));
		inputRef.current.focus();
	};
	// console.log('inputIsFocused', inputIsFocused);
	// console.log('suggestion', suggestion);
	// console.log('input', input);
	// console.log('searchKeys', searchKeys);

	useEffect(() => {
		const last = searchKeys[searchKeys.length - 1];
		let filteredTags = [];
		if (last.length >= 1) {
			filteredTags = tags.filter((tag) => tag.indexOf(last) >= 0);
		}
		// console.log('filteredTags', filteredTags);

		if (last.length >= 1 && filteredTags.length > 0 && inputIsFocused) {
			setSuggestion((state) => ({ show: true, tags: filteredTags }));
		}
		if (!inputIsFocused) {
			setSuggestion((state) => ({ show: false, tags: [] }));
		}
	}, [searchKeys, inputIsFocused]);

	// [TODO] turn icon into button to submit form
	// [TODO] or need to add auto complete tag hints
	return (
		<div style={{ position: 'relative' }}>
			<StyledSearchForm role="search" arial-label="Sitewide" onSubmit={handleOnSubmit}>
				<label htmlFor="search" className="visually-hidden">
					Search something...
				</label>
				<div>
					<div className="suggestions-help" role="status" aria-live="polite"></div>
					<div>
						<StyledIcon>
							<Icon />
						</StyledIcon>
						<input
							type="search"
							role="combobox"
							title="Search something"
							placeholder="Search something"
							aria-owns="search_suggestions"
							autoComplete="off"
							aria-autocomplete="list"
							aria-expanded="false"
							onChange={handleInputChange}
							onFocus={handleOnFocusBlur}
							onBlur={handleOnFocusBlur}
							onKeyDown={handleOnKeyPress}
							value={input}
							ref={inputRef}
						/>
					</div>
					<StyledSuggestions className={suggestion.show === false && 'hidden'}>
						<ul tabIndex={0} role="listbox" id="search_suggestions" aria-activedescendant="suggestion-1">
							{suggestion.tags.map((tag, index) => (
								<li key={tag} role="option" tabIndex={-1} id={`suggestion-${index + 1}`}>
									<StyledListButton onMouseDown={(e) => e.preventDefault()} onClick={(e) => handleTagSelect(e, tag)}>
										{tag}
									</StyledListButton>
								</li>
							))}
						</ul>
					</StyledSuggestions>
				</div>
			</StyledSearchForm>
		</div>
	);
}
