import React from 'react';
import styled from 'styled-components';
import { Sun as SunIcon, LoginCircle as LoginIcon } from '@styled-icons/remix-line';

import useDropdown from '../../../utils/hooks/useDropdown';
import useThemeMode from '../../../utils/hooks/useThemeMode';
import DropdownMenu from '../dropdownMenu/DropdownMenu';
import { StyledMenu } from './desktopNav.styles';

export default function DesktopNav() {
	const { currentTheme, setThemeMode, themeModes } = useThemeMode();
	const { showDropdown, dropdownList, focusIndex, setDropdown, setHandleSelect, handleOnKeyDown } = useDropdown({
		list: themeModes,
		onSelect: setThemeMode,
	});

	return (
		<StyledMenu>
			<li>
				<button>
					<SunIcon />
					Theme
				</button>
				<DropdownMenu title="Select your preferred theme mode">
					{themeModes.map((theme) => {
						const Icon = theme.icon;
						return (
							<DropdownMenu.item>
								<button>
									<Icon />
									{theme.mode}
								</button>
							</DropdownMenu.item>
						);
					})}
				</DropdownMenu>
			</li>
			<li>
				<button>
					<LoginIcon />
					Login
				</button>
			</li>
		</StyledMenu>
	);
}
