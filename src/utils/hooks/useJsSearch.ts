import * as JsSearch from 'js-search';

export default function useJsSearch(options, data) {
	const { SearchIndex, Indexes } = options;

	try {
		if (!SearchIndex || !Indexes || Indexes.length < 1) {
			throw new Error('missing SearchIndex or an array of indexes');
		}
		// Search configuration
		const dataToSearch = new JsSearch.Search(SearchIndex);
		/**
		 * defines an indexing strategy for the data
		 * more about it in here https://github.com/bvaughn/js-search#configuring-the-index-strategy
		 */
		dataToSearch.indexStrategy = new JsSearch.PrefixIndexStrategy();

		dataToSearch.tokenizer = new JsSearch.StopWordsTokenizer(new JsSearch.SimpleTokenizer());

		/**
		 * defines the search index
		 * read more in here https://github.com/bvaughn/js-search#configuring-the-search-index
		 */
		dataToSearch.searchIndex = new JsSearch.TfIdfSearchIndex(SearchIndex);
		// fields to search
		Indexes.forEach((index) => {
			dataToSearch.addIndex(index);
		});

		dataToSearch.addDocuments(data);

		const search = (query: string) => {
			return dataToSearch.search(query);
		};

		return { search };
	} catch (e) {
		console.error(e);
	}
}
