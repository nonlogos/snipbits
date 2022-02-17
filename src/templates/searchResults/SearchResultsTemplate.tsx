import React, { useEffect, useState } from 'react';
import { useLocation } from '@reach/router';
import { API, graphqlOperation, Auth } from 'aws-amplify';

import useJsSearch from '../../utils/hooks/useJsSearch';
import { contentTypes } from '../../utils/constants';
import Cardlist from '../../components/cardlist/Cardlist';
import { StyledMain, StyledCardsContainer } from './searchResults.styles';
import { listBookmarks } from '../../graphql/queries';

function mapToIndexNodes(list = [], name) {
	let viewIndex = 0;
	const catSettings = contentTypes.filter((type, index) => {
		if (type.name === name) {
			viewIndex = index + 1;
			return true;
		}
		return false;
	})[0];
	return { viewIndex, type: catSettings.name, icon: catSettings.icon, posts: list || [], fill: catSettings.fill };
}

export default function SearchResultsTemplate({ pageContext, currentIndex, isMobile }) {
	const {
		bookmarkData: { options: bmOptions },
		postsData: { options: postOptions, allPosts },
	} = pageContext;
	const blogs = allPosts.blogs.nodes;
	const snippets = allPosts.snippets.nodes;
	// instantiate JsSearch for each of the content categories and get the necessary methods
	const { search: searchBookmarks, addData: addBookmarks } = useJsSearch(bmOptions);
	const { search: searchBlogs } = useJsSearch(postOptions, blogs);
	const { search: searchSnippets } = useJsSearch(postOptions, snippets);

	const [bookmarks, setBookmarks] = useState([]);
	const [contentData, setContentData] = useState([]);

	const location = new URLSearchParams(useLocation().search);
	const queryStr = location.get('q');

	console.log('contentData', contentData);

	// fetch the dynamic data for bookmark on runtime
	// ** [TODO]: add user restriction once public view of the bookmarks is turned off **
	useEffect(() => {
		const fetchBookmarks = async () => {
			try {
				const bookmarksData = await API.graphql(graphqlOperation(listBookmarks));
				const bookmarks = bookmarksData?.data?.listBookmarks?.items;
				setBookmarks((_) => bookmarks);
				addBookmarks(bookmarks);
			} catch (e) {
				console.error('fetch bookmarks error: ', e);
			}
		};

		const checkUser = () => {
			Auth.currentAuthenticatedUser()
				.then((user) => console.log({ user }))
				.catch((err) => console.log(err));
		};
		checkUser();
		fetchBookmarks();
	}, []);

	// update content lists with search results from queryStr
	// also update bookmark list after api response
	useEffect(() => {
		const searchedBlogs = queryStr ? searchBlogs(queryStr) : blogs;
		const searchedSnippets = queryStr ? searchSnippets(queryStr) : snippets;
		const searchedBookmarks = queryStr ? searchBookmarks(queryStr) : bookmarks;
		const mappedBlogs = mapToIndexNodes(searchedBlogs, 'blogs');
		const mappedSnippets = mapToIndexNodes(searchedSnippets, 'snippets');
		const mappedBookmarks = mapToIndexNodes(searchedBookmarks, 'bookmarks');
		setContentData((_) => [mappedBlogs, mappedSnippets, mappedBookmarks]);
	}, [queryStr, bookmarks]);

	return (
		<StyledMain isMobile={isMobile}>
			<StyledCardsContainer viewIndex={currentIndex}>
				{contentData.map((typedData) => (
					<Cardlist
						key={typedData.type}
						viewIndex={typedData.viewIndex}
						posts={typedData.posts}
						icon={typedData.icon}
						fill={typedData.fill}
						type={typedData.type}
					/>
				))}
			</StyledCardsContainer>
		</StyledMain>
	);
}
