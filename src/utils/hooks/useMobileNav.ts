import { useState } from 'react';

export default function useMobileNav(defaultStates) {
	const [menuStates, setMenuStates] = useState(defaultStates);

	const handleMenuToggle = (name) => {
		if (name && name in menuStates) {
			const updatedStates = { ...menuStates };
			for (const key in menuStates) {
				if (key === name) {
					updatedStates[name] = !updatedStates[name];
				} else {
					// when one menu item is clicked reset the current states for the other menu items to false.
					// so no 2 menu items are open at once
					updatedStates[key] = false;
				}
			}
			setMenuStates(updatedStates);
		}
	};

	const resetMenu = () => {
		setMenuStates(defaultStates);
	};

	return [menuStates, handleMenuToggle, resetMenu];
}
