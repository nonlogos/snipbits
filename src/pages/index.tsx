import * as React from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';

import Card from '../components/card/Card';
import { mediaSizes } from '../theme/media';

const StyledCardsContainer = styled.section`
	& ul {
	}
`;

const StyledUl = styled.ul`
	display: block;
	@media screen and (min-width: ${mediaSizes.tab}px) {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		column-gap: 1em;
		row-gap: 1em;
		width: 90%;
		margin: 0 auto;
		align-items: stretch;

		& article {
			border-top: none;
			/* border: 1px solid var(--text-2-light); */
			padding: 1.2em;
			font-size: clamp(1rem, 0.7em, 1.5rem);
			line-height: 1.5;
			height: 100%;
			& h2 {
				font-size: 2rem;
			}
		}
	}

	& li {
		padding-left: 0;
		&:before {
			content: none;
		}
	}
`;

const IndexPage = ({ data }) => {
	const { blogEntries, snippetsEntries } = data;
	console.log('blog', blogEntries, snippetsEntries);
	const linkPath = '/blog/theme-test';
	const articles = [...blogEntries.edges, ...snippetsEntries.edges];
	console.log('articles', articles);
	return (
		<>
			<main>
				<title>Home Page</title>
				<h1>Hello Home</h1>
				<StyledCardsContainer>
					<StyledUl>
						{articles.map((article) => (
							<li key={article.node.frontmatter.title}>
								<Card
									mainlink={article.node.slug}
									type={article.node.fields.contentType}
									keywords={article.node.frontmatter.keywords}
									date={article.node.frontmatter.date}
								>
									<h2>
										<Link to={article.node.slug}>{article.node.frontmatter.title}</Link>
									</h2>
									<p>{article.node.frontmatter.description}</p>
								</Card>
							</li>
						))}
					</StyledUl>
				</StyledCardsContainer>
			</main>
		</>
	);
};

export const mdxQuery = graphql`
	query postQuery {
		blogEntries: allMdx(
			sort: { fields: [frontmatter___date, frontmatter___title], order: [DESC, ASC] }
			filter: { fields: { contentType: { eq: "blog" } } }
		) {
			edges {
				node {
					frontmatter {
						date(locale: "", formatString: "MM-DD-YYYY")
						title
						keywords
						description
					}
					fields {
						contentType
					}
					excerpt
					slug
				}
			}
			totalCount
		}
		snippetsEntries: allMdx(
			sort: { fields: [frontmatter___date, frontmatter___title], order: [DESC, ASC] }
			filter: { fields: { contentType: { eq: "snippets" } } }
		) {
			edges {
				node {
					frontmatter {
						date(locale: "", formatString: "MM-DD-YYYY")
						title
						keywords
						description
					}
					fields {
						contentType
					}
					excerpt
					slug
				}
			}
			totalCount
		}
	}
`;

export default IndexPage;
