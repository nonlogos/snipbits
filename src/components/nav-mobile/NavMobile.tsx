import React, { useState } from 'react';
import { Search2 as SearchIcon, Sun as SunIcon, LoginCircle as LoginIcon } from '@styled-icons/remix-line';
import {
	Twitter as TempLogo,
	Search2 as SearchActiveIcon,
	Sun as SunActiveIcon,
	LayoutGrid as GridActiveIcon,
} from '@styled-icons/remix-fill';

import Submenu from './submenu/Submenu';
import useMobileNav from '../../utils/hooks/useMobileNav';
import {
	StyledHeader,
	StyledTopNavContainer,
	StyledlogoContainer,
	StyledMenu,
	StyledSearchForm,
} from './navMobile.styles';
import ContentTabsMenu from '../ContentTabsMenu';

// [TODO] need to move submenu UL into div to accomodate for heading
// [TODO] need to pass down active icons
// [TODO] need to fix mobile landscape mode and wider device width

export default function NavMobile({
	defaultMenuStates,
	themeMode,
	themeModeList,
	setThemeMode,
	contentTypes,
	handleTabChange,
	currentTabIndex,
}) {
	const [menuStates, handleMenuToggle, resetMenu] = useMobileNav(defaultMenuStates);

	const handleThemeChange = (mode) => {
		try {
			if (!mode) {
				throw new Error('missing a mode argument');
			}
			setThemeMode(mode);
			resetMenu();
		} catch (e) {
			console.error(`handleThemeChange: ${e}`);
		}
	};

	return (
		<StyledHeader>
			<StyledTopNavContainer>
				<StyledlogoContainer>
					<TempLogo />
				</StyledlogoContainer>
				<ContentTabsMenu
					currentTabIndex={currentTabIndex}
					handleTabChange={handleTabChange}
					contentTypes={contentTypes}
				/>
			</StyledTopNavContainer>
			<StyledMenu aria-label="primary navigation">
				{/* ---------- Theme mode ------- */}
				<Submenu
					icon={SunIcon}
					name="theme"
					expanded={menuStates['theme']}
					handleToggle={handleMenuToggle}
					title="Select theme mode"
				>
					{themeModeList &&
						Object.values(themeModeList).map((mode) => {
							// do not show the currently selected theme mode
							if (mode !== themeMode) {
								return (
									<li key={mode}>
										<button onClick={() => handleThemeChange(mode)}>{mode}</button>
									</li>
								);
							}
						})}
				</Submenu>
				{/* ---------- Search  ------- */}
				<Submenu icon={SearchIcon} name="search" expanded={menuStates['search']} handleToggle={handleMenuToggle}>
					<StyledSearchForm role="search" arial-label="Sitewide">
						<div>
							<label htmlFor="search" className="visually-hidden">
								Search something...
							</label>
							<input
								type="search"
								arial-label="Search something"
								title="Search something"
								placeholder="Search something"
							/>
						</div>
					</StyledSearchForm>
				</Submenu>
				{/* ---------- Categories ------- */}
				<Submenu
					icon={LoginIcon}
					name="login"
					expanded={menuStates['login']}
					handleToggle={handleMenuToggle}
					title="Coming soon..."
				>
					<p>Check back later</p>
				</Submenu>
			</StyledMenu>
		</StyledHeader>
	);
}
