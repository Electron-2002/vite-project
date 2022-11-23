import React from 'react';
import { isPresent } from '../../../../helpers/searchHelper';

const SearchItem = ({ item, query, setSearchKey }) => {
	const { name = '' } = item;

	const handleChangeSearchKey = () => {
		setSearchKey(name);
	};

	return (
		<div className="search-item" onClick={handleChangeSearchKey}>
			{name.split('').map((letter) => {
				if (isPresent(query, letter)) {
					return <span className="highlight">{letter}</span>;
				} else {
					return <span>{letter}</span>;
				}
			})}
		</div>
	);
};

export default SearchItem;
