import React from 'react';

import { StyledButton, StyledSubmenu, StyledUl } from './submenu.styles';

export default function Submenu({ icon, activeIcon, name, expanded, handleToggle, children, title }) {
	const Icon = icon;
	const ActiveIcon = activeIcon;
	// [todo] need to implement active icons
	return (
		<li>
			<StyledButton
				name={name}
				aria-haspopup="true"
				aria-expanded={expanded}
				aria-label={name}
				onClick={() => handleToggle(name)}
			>
				<Icon className="nav-icon" focusable="false" />
			</StyledButton>
			<StyledSubmenu className={`${name}-popup ${expanded ? `expanded` : ''}`}>
				<h4>{title}</h4>
				<StyledUl>{children}</StyledUl>
			</StyledSubmenu>
		</li>
	);
}
