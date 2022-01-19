import * as React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from '../theme/globalStyles';

function DefaultLayout({ children, themeMode }) {
	return (
		<ThemeProvider theme={{ mode: themeMode }}>
			<GlobalStyles mode={themeMode} />
			{children}
		</ThemeProvider>
	);
}

export default DefaultLayout;
