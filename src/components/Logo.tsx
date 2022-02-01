import React from 'react';
import styled from 'styled-components';

import DefaultLogo from '../icons/logo.svg';
import LogoIcon from '../icons/logo-icon.svg';

export default function Logo({ isIcon }) {
	if (isIcon === true) {
		return <LogoIcon />;
	} else {
		return <DefaultLogo />;
	}
}
