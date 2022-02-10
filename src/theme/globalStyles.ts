import { createGlobalStyle } from 'styled-components';
import { colors, fonts, spacing, otherVariables } from '../theme/theme';
import { globalTabScreenStyles } from './media';

export interface IGlobalStyles {
	mode?: string;
}

const GlobalStyles = createGlobalStyle`
  html {
    height: 100%;
  }
  body {
    ${colors}
    ${fonts}
    ${spacing}
    ${otherVariables}
    background: var(--surface-1);
    color: var(--text-2);
    font-family: var(--body-font);
    font-size: var(--body-font-size);
    font-weight: ${({ mode }) =>
			mode === 'light' ? `calc(var(--body-font-weight) + 100)` : `var(--body-font-weight)`};
    line-height: var(--body-line-height);

    a:focus, button:focus, input:focus, textarea:focus, summary:focus {
      outline: var(--outline-size) var(--outline-style) var(--outline-color);
      outline-offset: var(--outline-offset, var(--outline-size));
    }

    a:focus-visible, button:focus-visible, input:focus-visible, textarea:focus-visible, summary:focus-visible {
      outline: var(--outline-size) var(--outline-style) var(--outline-color);
      outline-offset: var(--outline-offset, var(--outline-size));
    }

    a:focus:not(:focus-visible), button:focus:not(:focus-visible), input:focus:not(:focus-visible), textarea:focus:not(:focus-visible), summary:focus:not(:focus-visible) {
      outline: none;
    }

    h1, h2, h3 {
      font-family: var(--header-font);
    }

    h1, h2, h3, h4, h5, h6 {
      line-height: 1.2;
    }

    h1,h2,h3,h4, h6 {
      color: var(--text-1);
    }

    h1 { 
      font-size: clamp(2.5rem, 7vw, 25rem);
      font-weight: 800;
      max-width: 46ch;
      margin-bottom: 4vh;
    }

    h2 { 
      font-size: clamp(1.8rem, 4.5vw, 14rem);
      font-weight: 800;
      letter-spacing: 0.05ch;
      text-align: center;
      /* max-width: 25ch; */
      padding: var(--x2-spacing) 0;
      margin: 14vh auto 8vh;
    }

    h3 { 
      font-size: clamp(1.7rem, 2.7vw, 12rem);
      font-weight: ${({ mode }) => (mode === 'light' ? `300` : `200`)};
      letter-spacing: 0.1rem;
      padding: var(--x2-spacing) 0;
      margin: 7vh auto 1vh;

    }

    h4 { 
      font-size: clamp(1.5rem, 2.3vw, 8rem);
      font-weight: 700;
      padding: var(--x2-spacing) 0;
      margin: 3vh auto 1vh;
      
    }

    h5 { 
      font-size: clamp(1.3rem, 2vw, 6rem);
      font-weight: ${({ mode }) => (mode === 'light' ? `500` : `400`)};;
      text-transform: uppercase;
      letter-spacing: 0.2ch;
      padding: var(--x2-spacing) 0;
      
    }

    h6 { 
      font-size: var(--body-font-size);
      font-weight: 800;
      padding: var(--unit) 0;
      letter-spacing: 0.1ch;
      
    }
    
    p {
      margin-bottom: 3vh;
    }

    a {
      color: var(--secondary-2);
      border-bottom: 1px solid var(--secondary-2);
    }

    button {
      font-weight: 500;
      cursor: pointer;
    }

    em, strong {
      color: var(--secondary-1);
    }

    em {
      font-style: italic;
    }

    strong {
      font-weight: 700;
    }

    ul {
      li {
        padding-left: 2em;
        position: relative;
        &:before {
          content: '';
          position: absolute;
          border: 1px solid var(--text-2-light);
          border-radius: 50%;
          width: 0.475em;
          height: 0.475em;
          top: calc(0.475em + 0.08em);
          left: 0.25em;
        }
      }
    }

    ol {
      counter-reset: line;
      li {
        counter-increment: line;
        padding-left: 2em;
        position: relative;

        &:before {
          content: counter(line);
          position: absolute;
          top: -0.12em;
          left: 0.25em;
          font-family: var(--header-font);
          font-weight: 700;
          color: var(--text-2-light);
        }
      }
    }

    hr {
      display: block;
      border-top: 1px solid;
      opacity: 0.2;
      padding-bottom: 2vh;
    }

    input {
      background: var(--text-1);
      padding: var(--unit);
      font-size: var(--font-size);
      line-height: var(--font-size);
      border-radius: var(--border-radius);
      vertical-align: baseline;
      color: var(--surface-1);
    }

    code {
      background: var(--code-bkgd);
      color: ${({ mode }: IGlobalStyles) => (mode === 'light' ? `var(--surface-1)` : 'inherit')};
      border-radius: 5px;
      padding: 0 0.4em;
      margin-right: 0.1em;
    }

    blockquote {
      position: relative;
      width: var(--tab-content-size);
      /* border-left: 6px solid var(--text-2-light); */
      margin: 6vh auto;
      /* padding-left: 1.3em;
      padding-bottom: 2px; */
      background: var(--surface-2);
      padding: 2rem;
      border-radius: var(--border-radius);
      h3 {
        font-variation-settings: 'WONK' 1, 'SOFT' 100, 'opsz' 10, 'wght' 700;
        letter-spacing: 0.1ch;
      }
      &:first-letter {
        font-size: clamp(4rem, 5.5vw, 10.5rem);
        font-weight: 900;
        line-height: 0.5;
        text-transform: lowercase;
        float: left;
        margin-top: 0.2rem;
        margin-right: 0.1rem;
        position: relative;
        z-index: 1;
      }
      & p:first-child {
        font-family: var(--header-font);
        font-size: clamp(1.7rem, 2.7vw, 12rem);
        color: var(--text-1);
        margin-bottom: 3.5vh;
      }
      & p:last-child {
        margin-bottom: 0;
      }
    }

    article {
      width: 70%;
      margin: 0 auto;

      header {
        padding-top: clamp(var(--x4-spacing), 23vh, var(--x40-spacing));
        padding-bottom: clamp(var(--x3-spacing), 15vh, var(--x30-spacing));
        display: flex;
        justify-content: center;
        text-align: center;
        flex-direction: column;

        .blog-date {
          color: var(--text-2);
          border-left: 3px solid var(--text-2-light);
          padding-top: 3px;
          padding-left: var(--x2-spacing);
          align-self: flex-start;
          line-height: normal;
          margin-bottom: 6vh;
          width: 100%;
          text-align: left;
          font-size: 1rem;
        }
      }

      .gatsby-image-wrapper {
        margin-bottom: 5vh;
      }
    }

    .highlight {
      font-weight: calc(var(--body-font-weight) + 100);
      color: var(--surface-1);
      background: var(--primary);
      padding: 0 0.2em;
      margin-right: 0.1em
    }

    .visually-hidden:not(:focus):not(:active) {
      border: 0;
      clip: rect(0 0 0 0);
      height: 1px;
      margin: -1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
      width: 1px;
    }

    @supports (font-variation-settings: normal) {
      font-family: var(--body-font-variable);

      h1, h2, h3 {
        font-family: var(--header-font-variable);  
      }

      h1 {
        font-variation-settings: 'WONK' 1, 'SOFT' 100, 'opsz' 72, 'wght' 600;
      }

      h2 {
        font-variation-settings: 'WONK' 1, 'SOFT' 100, 'opsz' 50, 'wght' 800;
      }

      h3 {
        font-variation-settings: 'WONK' 0, 'SOFT' 000, 'opsz' 10, 'wght' 400;
      }
    }

    ${globalTabScreenStyles}
  }
`;

export default GlobalStyles;
