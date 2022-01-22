import React from 'react';
import { graphql } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Link } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/Default-layout';
import CodeBlock from '../components/Codeblock';
import Seo from '../components/Seo';
import Header from '../components/mdx/Header';

const StyledTOC = styled.section`
	& ul {
		& li {
			& a {
				border-bottom: none;
				color: var(--text-1);
			}
		}
	}
`;

export default function Post({ data: { mdx } }) {
	const { frontmatter, tableOfContents, body, excerpt, embeddedImagesRemote } = mdx;
	const shortcodes = { Link, Header, code: CodeBlock, pre: (props) => <div {...props} /> };
	return (
		<>
			<main>
				<Seo
					title={frontmatter.title}
					description={frontmatter.description || excerpt}
					keywords={frontmatter.keywords}
				/>
				<article>
					{/* <StyledTOC>
							<h4>Table of Contents</h4>
							<ul>
								{tableOfContents.items.map((item) => (
									<li key={item.url}>
										<a href={item.url}>{item.title}</a>
									</li>
								))}
							</ul>
						</StyledTOC> */}
					<Header date={frontmatter.date} title={frontmatter.title} />
					<MDXProvider components={shortcodes}>
						<MDXRenderer
							frontmatter={frontmatter}
							remoteImages={embeddedImagesRemote}
							localImages={frontmatter.embeddedImagesLocal}
						>
							{body}
						</MDXRenderer>
					</MDXProvider>
				</article>
			</main>
		</>
	);
}

export const postQuery = graphql`
	query PostQuery($id: String) {
		mdx(id: { eq: $id }) {
			id
			body
			excerpt
			tableOfContents
			frontmatter {
				title
				date(locale: "")
				description
				keywords
				embeddedImagesLocal {
					childImageSharp {
						gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
					}
				}
			}
			embeddedImagesRemote {
				childImageSharp {
					gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
				}
			}
		}
	}
`;
