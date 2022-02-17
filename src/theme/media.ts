import { css } from 'styled-components';

export const mediaSizes = {
	// Default styles written mobile-first assuming 320px width
	mbl: 360,
	tab: 599,
	desk: 1100,
};

// [TODO]: switch styles to only use min-width
export const globalTabScreenStyles = css`
	@media screen and (max-width: ${mediaSizes.tab}px) {
		article {
			& header {
				padding-top: 12vh;
				padding-bottom: 5vh;
			}
			& h2,
			h3 {
				font-family: var(--body-font);
				margin: 9vh auto 5vh;
			}
			& h3 {
				letter-spacing: 0;
			}
			& h5 {
				letter-spacing: 0.1ch;
			}
			& p {
				letter-spacing: 0.05ch;
			}

			& blockquote {
				width: 100%;
				& h3 {
					font-family: var(--header-font);
				}
			}
		}
	}
`;
