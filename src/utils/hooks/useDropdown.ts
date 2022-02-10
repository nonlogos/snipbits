import { useState } from 'react';

import { ARROW_DOWN, ARROW_UP, ENTER } from '../constants';

// dropdown state management
// handle isExpanded or not
// handle onclick on child list item
// handle onKeyPress to navigate dropdown

type listType = any[];

interface IuseDropdown {
	list?: listType;
	defaultShow?: boolean;
	onSelect?: any;
}

interface IsetDropdown {
	show?: boolean;
	list?: listType;
}

const defaultListBox = {
	show: false,
	list: [],
};

export default function useDropdown({ list = [], defaultShow = false, onSelect = null }: IuseDropdown) {
	const [showDropdown, setShowDropdown] = useState(defaultShow);
	const [dropdownList, setDropdownList] = useState(list);
	const [focusIndex, setFocusIndex] = useState(0); // controls the index of the list item to be focused
	const [handleSelect, setHandleSelect] = useState(onSelect);
	// *[TODO] need to refactor for dry

	const setDropdown = (settings: IsetDropdown) => {
		setShowDropdown((_) => !!settings.show);
		if (settings.list) {
			setDropdownList((_) => settings.list);
		}
	};
	const handleOnKeyDown = (e: React.KeyboardEvent) => {
		const listLength = dropdownList.length - 1;
		if (showDropdown) {
			switch (e.code) {
				case ARROW_DOWN:
					if (focusIndex < listLength) {
						setFocusIndex(focusIndex + 1);
					} else {
						setFocusIndex(0);
					}
					break;
				case ARROW_UP:
					if (focusIndex > 0) {
						setFocusIndex(focusIndex - 1);
					} else {
						setFocusIndex(listLength);
					}
					break;
				case ENTER:
					handleSelect(dropdownList[focusIndex]);
					setFocusIndex(0);
					break;
				default:
					break;
			}
		}
	};
	return {
		showDropdown,
		dropdownList,
		focusIndex,
		defaultListBox,
		setDropdown,
		setFocusIndex,
		setHandleSelect,
		handleOnKeyDown,
	};
}
