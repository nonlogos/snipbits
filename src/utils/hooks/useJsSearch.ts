import { useRef, useEffect } from 'react';
import * as JsSearch from 'js-search';

interface IData {
	[key: string]: any;
}

export default function useJsSearch(options, data?: IData[]) {
	const { SearchIndex, Indexes } = options;
	const searchInstance = useRef<JsSearch.Search | null>(null);

	if (!SearchIndex || !Indexes || Indexes.length < 1) {
		throw new Error('missing SearchIndex or an array of indexes');
	}
	// for dynamic data that needs to be loaded on runtime
	const addData = (data) => {
		searchInstance.current.addDocuments(data);
	};

	const search = (query: string) => {
		return searchInstance.current.search(query);
	};

	useEffect(() => {
		// Search configuration
		// using ref to maintain the class instance throughout the component lifetime
		searchInstance.current = new JsSearch.Search(SearchIndex);
		/**
		 * defines an indexing strategy for the data
		 * more about it in here https://github.com/bvaughn/js-search#configuring-the-index-strategy
		 */
		searchInstance.current.indexStrategy = new JsSearch.PrefixIndexStrategy();

		searchInstance.current.tokenizer = new JsSearch.StopWordsTokenizer(new JsSearch.SimpleTokenizer());

		/**
		 * defines the search index
		 * read more in here https://github.com/bvaughn/js-search#configuring-the-search-index
		 */
		searchInstance.current.searchIndex = new JsSearch.TfIdfSearchIndex(SearchIndex);
		// fields to search
		Indexes.forEach((index) => {
			searchInstance.current.addIndex(index);
		});
		data && searchInstance.current.addDocuments(data);
	}, []);

	return { search, addData };
}
