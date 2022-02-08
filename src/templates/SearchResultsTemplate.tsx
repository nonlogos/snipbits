import React, { useState, useEffect } from 'react';
import { useLocation } from '@reach/router';

import useJsSearch from '../utils/hooks/useJsSearch';
import { contentTypes } from '../utils/constants';
import Cardlist from '../components/cardlist/Cardlist';
import { StyledMain, StyledCardsContainer } from '../utils/styles/home.styles';

function mapToIndexNodes(list, name) {
	let viewIndex = 0;
	const catSettings = contentTypes.filter((type, index) => {
		if (type.name === name) {
			viewIndex = index + 1;
			return true;
		}
		return false;
	})[0];
	return { viewIndex, type: catSettings.name, icon: catSettings.icon, posts: list, fill: catSettings.fill };
}

export default function SearchResultsTemplate({ pageContext, currentIndex, isMobile }) {
	const {
		bookmarkData: { options: bmOptions, allBookmarks },
		postsData: { options: postOptions, allPosts },
	} = pageContext;
	const blogs = allPosts.blogs.nodes;
	const snippets = allPosts.snippets.nodes;
	const { search: searchBookmarks } = useJsSearch(bmOptions, allBookmarks);
	const { search: searchBlogs } = useJsSearch(postOptions, blogs);
	const { search: searchSnippets } = useJsSearch(postOptions, snippets);
	const location = new URLSearchParams(useLocation().search);
	const queryStr = location.get('q');
	const searchedBlogs = queryStr ? searchBlogs(queryStr) : blogs;
	const searchedSnippets = queryStr ? searchSnippets(queryStr) : snippets;
	const mappedBlogs = mapToIndexNodes(searchedBlogs, 'blogs');
	const mappedSnippets = mapToIndexNodes(searchedSnippets, 'snippets');
	// const mappedBookmarks = mapToIndexNodes(allBookmarks, 'bookmarks');
	const mappedData = [mappedBlogs, mappedSnippets];

	// console.log('what data is this?', pageContext, currentIndex, isMobile, location.get('q'));

	// console.log('location', queryStr);

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
}
