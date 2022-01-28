import React, { useState } from 'react';
import { Search2 as SearchIcon, Sun as SunIcon, LayoutGrid as GridIcon } from '@styled-icons/remix-line';
import {
	Twitter as TempLogo,
	Search2 as SearchActiveIcon,
	Sun as SunActiveIcon,
	LayoutGrid as GridActiveIcon,
} from '@styled-icons/remix-fill';

import Submenu from './submenu/Submenu';
import useMobileNav from '../../hooks/useMobileNav';
import { StyledLogoCoontainer, StyledMenu, StyledSearchForm, StyledContentCheckList } from './navMobile.styles';

// [TODO] need to move submenu UL into div to accomodate for heading
// [TODO] need to pass down active icons
// [TODO] need to fix mobile landscape mode and wider device width

export default function NavMobile({
	defaultMenuStates,
	themeMode,
	themeModeList,
	setThemeMode,
	showContentTypes,
	handleContents,
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
		<header>
			<StyledLogoCoontainer>
				<TempLogo />
			</StyledLogoCoontainer>
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
					icon={GridIcon}
					name="categories"
					expanded={menuStates['categories']}
					handleToggle={handleMenuToggle}
					title="Select the contents"
				>
					{Object.keys(showContentTypes).map((type) => (
						<li key={type}>
							<StyledContentCheckList key={type}>
								<input
									id={type}
									type="checkbox"
									name="content type"
									value={type}
									onChange={handleContents}
									checked={showContentTypes[type]}
								/>
								<label htmlFor={type}>{type}</label>
							</StyledContentCheckList>
						</li>
					))}
				</Submenu>
			</StyledMenu>
		</header>
	);
}
