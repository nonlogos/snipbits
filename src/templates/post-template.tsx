import React from 'react';
import { graphql } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Link } from 'gatsby';

export default function Post({ data: { mdx } }) {
	const { frontmatter, tableOfContents, body } = mdx;
	const shortcodes = { Link };
	return (
		<>
			<main>
				<article>
					<h1>{frontmatter.title}</h1>
					<p>{frontmatter.description}</p>
					<section>
						<ul>
							{tableOfContents.items.map((item) => (
								<li key={item.url}>
									<a href={item.url}>{item.title}</a>
								</li>
							))}
						</ul>
					</section>
					<MDXProvider components={shortcodes}>
						<MDXRenderer frontmatter={frontmatter}>{body}</MDXRenderer>
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
			}
		}
	}
`;
