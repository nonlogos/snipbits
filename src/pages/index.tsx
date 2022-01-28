import React, { useState, useEffect } from 'react';
import { Link, graphql } from 'gatsby';

import Card from '../components/card/Card';
import { StyledCardsContainer, StyledUl } from '../pageUtils/styles/home.styles';

const IndexPage = ({ data, showContentTypes }) => {
	const [columns, setColumns] = useState(3);
	const { blogEntries, snippetsEntries } = data;
	// console.log('blog', blogEntries, snippetsEntries);
	console.log('content', showContentTypes);

	const mapNode = (node) => (
		<li key={node.frontmatter.title}>
			<Card
				mainlink={node.slug}
				type={node.fields.contentType}
				keywords={node.frontmatter.keywords}
				date={node.frontmatter.date}
			>
				<h2>
					<Link to={node.slug}>{node.frontmatter.title}</Link>
				</h2>
				<p>{node.frontmatter.description}</p>
			</Card>
		</li>
	);

	return (
		<main>
			<StyledCardsContainer>
				{showContentTypes?.blogs && blogEntries && <StyledUl>{blogEntries.nodes.map(mapNode)}</StyledUl>}
				{showContentTypes?.snippets && snippetsEntries && (
					<StyledUl>{showContentTypes?.snippets && snippetsEntries.nodes.map(mapNode)}</StyledUl>
				)}
				{showContentTypes?.snippets && snippetsEntries && (
					<StyledUl>{showContentTypes?.snippets && snippetsEntries.nodes.map(mapNode)}</StyledUl>
				)}
			</StyledCardsContainer>
		</main>
	);
};

//[TODO]: need to figure out how to do limits and pagination
export const mdxQuery = graphql`
	query postQuery {
		blogEntries: allMdx(
			sort: { fields: [frontmatter___date, frontmatter___title], order: [DESC, ASC] }
			filter: { fields: { contentType: { eq: "blog" } } }
		) {
			nodes {
				...nodeForPostList
			}
			totalCount
		}
		snippetsEntries: allMdx(
			sort: { fields: [frontmatter___date, frontmatter___title], order: [DESC, ASC] }
			filter: { fields: { contentType: { eq: "snippets" } } }
		) {
			nodes {
				...nodeForPostList
			}
			totalCount
		}
	}
`;

export default IndexPage;
