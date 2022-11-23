import React from 'react';
import SearchItem from './SearchItem/SearchItem';

const SearchResults = ({ items = [], query, setSearchKey }) => {
	return items.map((item) => (
		<SearchItem key={item.id} item={item} query={query} setSearchKey={setSearchKey} />
	));
};

export default SearchResults;
