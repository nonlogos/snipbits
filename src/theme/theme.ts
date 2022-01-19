import { css } from 'styled-components';
import theme from 'styled-theming';

import { darkColors, dimColors, lightColors } from './colors';

/* Default color theme settings: Dark, Dim, Light */
export const colors = theme('mode', {
	dark: css`
		--surface-1: ${darkColors.surface1};
		--surface-2: ${darkColors.surface2};
		--surface-3: ${darkColors.surface3};
		--surface-4: ${darkColors.surface4};
		--text-1: ${darkColors.text1};
		--text-2: ${darkColors.text2};
		--text-2-light: ${darkColors.text2Light};
		--primary: ${darkColors.primary};
		--secondary-1: ${darkColors.secondary1};
		--secondary-2: ${darkColors.secondary2};
		--code-bkgd: ${darkColors.codeBkgd};
	`,
	dim: css`
		--surface-1: ${dimColors.surface1};
		--surface-2: ${dimColors.surface2};
		--surface-3: ${dimColors.surface3};
		--surface-4: ${dimColors.surface4};
		--text-1: ${dimColors.text1};
		--text-2: ${dimColors.text2};
		--text-2-light: ${dimColors.text2Light};
		--primary: ${dimColors.primary};
		--secondary-1: ${dimColors.secondary1};
		--secondary-2: ${dimColors.secondary2};
		--code-bkgd: ${dimColors.codeBkgd};
	`,
	light: css`
		--surface-1: ${lightColors.surface1};
		--surface-2: ${lightColors.surface2};
		--surface-3: ${lightColors.surface3};
		--surface-4: ${lightColors.surface4};
		--text-1: ${lightColors.text1};
		--text-2: ${lightColors.text2};
		--text-2-light: ${lightColors.text2Light};
		--primary: ${lightColors.primary};
		--secondary-1: ${lightColors.secondary1};
		--secondary-2: ${lightColors.secondary2};
		--code-bkgd: ${lightColors.codeBkgd};
	`,
});
/* Default Font settings */
const fallbackSerifFonts = "Garamond, 'Times New Roman', Times, serif";
const fallbackSanFonts =
	"-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif,'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'";

export const fonts = css`
	--header-font: fraunces, ${fallbackSerifFonts};
	--header-font-variable: frauncesVariable, ${fallbackSerifFonts};
	--body-font: Overpass, ${fallbackSanFonts};
	--body-font-variable: OverpassVariable, ${fallbackSanFonts};
	--body-font-size: clamp(1.2rem, calc(0.8rem + 1vw), 3rem);
	--body-font-weight: 300;
	--body-line-height: 1.75;
`;

/* Default Spacing settings */
export const spacing = css`
	--unit: 0.5rem;
	--x2-spacing: calc(var(--unit) * 2);
	--x3-spacing: calc(var(--unit) * 3);
	--x4-spacing: calc(var(--unit) * 5);
	--x5-spacing: calc(var(--unit) * 5);
	--x6-spacing: calc(var(--unit) * 6);
	--10-spacing: calc(var(--unit) * 10);
	--20-spacing: calc(var(--unit) * 20);
	--30-spacing: calc(var(--unit) * 30);
	--40-spacing: calc(var(--unit) * 40);
`;

export const otherVariables = css`
	--border-radius: 10px;
`;
