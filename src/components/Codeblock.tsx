import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/nightOwl';
import styled from 'styled-components';

const Pre = styled.pre`
	text-align: left;
	margin: 1em 0;
	padding: 0.5em;
	overflow: scroll;
	border-radius: var(--border-radius);
`;

const Line = styled.div`
	display: table-row;
`;

const LineNo = styled.span`
	display: table-cell;
	text-align: right;
	padding-right: 1em;
	user-select: none;
	opacity: 0.5;
`;

const LineContent = styled.span`
	display: table-cell;
`;

export default function CodeBlock({ children, className }) {
	const language = className.replace(/language-/, '');
	return (
		<Highlight {...defaultProps} code={children} language={language} theme={theme}>
			{({ className, style, tokens, getLineProps, getTokenProps }) => (
				<Pre className={className} style={{ ...style, padding: '20px' }}>
					{tokens.map((line, i) => (
						<Line key={i} {...getLineProps({ line, key: i })}>
							<LineNo>{i + 1}</LineNo>
							<LineContent>
								{line.map((token, key) => (
									<span key={key} {...getTokenProps({ token, key })} />
								))}
							</LineContent>
						</Line>
					))}
				</Pre>
			)}
		</Highlight>
	);
}
