import React, { useState, useEffect } from 'react';
import { graphql } from 'gatsby';

import { contentTypes } from '../pageUtils/constants';
import Cardlist from '../components/cardlist/Cardlist';
import { StyledMain, StyledCardsContainer } from '../pageUtils/styles/home.styles';

const IndexPage = ({ data, currentIndex, isMobile }) => {
	const [columns, setColumns] = useState(3);
	// console.log('currentIndex', currentIndex);
	const mappedData = Object.keys(data).map((key) => {
		const viewIndex = contentTypes.indexOf(key) + 1;
		return { viewIndex, type: key, posts: data[key] };
	});

	return (
		<StyledMain isMobile={isMobile}>
			<StyledCardsContainer viewIndex={currentIndex}>
				{mappedData.map((typedData) => (
					<Cardlist
						key={typedData.type}
						viewIndex={typedData.viewIndex}
						type={typedData.type}
						posts={typedData.posts}
					/>
				))}
			</StyledCardsContainer>
		</StyledMain>
	);
};

//[TODO]: need to figure out how to do limits and pagination
export const mdxQuery = graphql`
	query postQuery {
		blogs: allMdx(
			sort: { fields: [frontmatter___date, frontmatter___title], order: [DESC, ASC] }
			filter: { fields: { contentType: { eq: "blog" } } }
		) {
			nodes {
				...nodeForPostList
			}
			totalCount
		}
		snippets: allMdx(
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
