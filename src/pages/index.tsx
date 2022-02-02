import React, { useState } from 'react';
import { graphql } from 'gatsby';

import { contentTypes } from '../utils/constants';
import Cardlist from '../components/cardlist/Cardlist';
import { StyledMain, StyledCardsContainer } from '../utils/styles/home.styles';

const IndexPage = ({ data, currentIndex, isMobile }) => {
	const [columns, setColumns] = useState(3);
	// console.log('currentIndex', currentIndex);
	const mappedData = Object.keys(data).map((key) => {
		const viewIndex = contentTypes.map((type) => type.name).indexOf(key) + 1;
		const icon = contentTypes[viewIndex - 1].icon;
		const fill = contentTypes[viewIndex - 1].fill;
		return { viewIndex, type: key, icon, posts: data[key], fill };
	});

	return (
		<StyledMain isMobile={isMobile}>
			<StyledCardsContainer viewIndex={currentIndex}>
				{mappedData.map((typedData) => (
					<Cardlist
						key={typedData.type}
						viewIndex={typedData.viewIndex}
						posts={typedData.posts}
						icon={typedData.icon}
						fill={typedData.fill}
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
