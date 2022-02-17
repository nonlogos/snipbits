import { useEffect, useState } from 'react';
import { navigate } from 'gatsby';

import useDropdown from './useDropdown';

export default function useSearchCombo({ defaultList, ref }) {
	const { showDropdown, dropdownList, focusIndex, defaultListBox, setDropdown, setHandleSelect, handleOnKeyDown } =
		useDropdown({});
	const [input, setInput] = useState(''); // keeps track of input value
	const [searchKeys, setSearchKeys] = useState(['']); // keeps track of search keys in input value
	const [isFocused, setIsFocused] = useState(false); // keeps track of input's focus state

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const target = e.target.value;
		setSearchKeys((keys) => target.split(' '));
		setInput(target);
	};

	const handleReset = async () => {
		setSearchKeys((_) => {
			const reset = [''];
			setInput('');
			return [''];
		});
		await navigate(`/`);
		ref.current.focus();
	};

	const handleOnFocusBlur = (e: React.FocusEvent<HTMLInputElement>) => {
		const isFocused = e.type === 'focus' ? true : false;
		setIsFocused((_) => isFocused);
	};

	const handleSubmit = async () => {
		console.log('handleSubmit');
		try {
			const qKeys = searchKeys;
			await navigate(`/?q=${qKeys.join(' ').trim()}`);
		} catch (e) {
			console.error(e);
		}
	};

	const handleSelect = (listItem: string) => {
		console.log('handleSelect');
		setSearchKeys((keys) => {
			keys[keys.length - 1] = listItem;
			setInput(() => `${keys.join(' ')} `); // repopulate input with extra space
			return keys;
		});
		// reset dropdowns
		setDropdown(defaultListBox);
		if (ref) {
			ref.current.focus();
		}
	};

	useEffect(() => {
		setHandleSelect(() => handleSelect); // hookup the select action for enter keypress in useDropdown
	}, []);

	useEffect(() => {
		const last = searchKeys[searchKeys.length - 1];
		if (last && last.length > 1) {
			const filteredList = defaultList.filter((d) => d.indexOf(last) >= 0); // filter list against the last searchKey
			if (filteredList.length > 0 && isFocused) {
				setDropdown({ show: true, list: filteredList });
			}
		} else {
			setDropdown(defaultListBox);
		}
		if (!isFocused) {
			setDropdown(defaultListBox);
		}
	}, [searchKeys, isFocused]);

	return {
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
	};
}
