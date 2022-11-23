import React, { useEffect, useRef, useState } from 'react';
import api from '../../api';
import SearchResults from './SearchResults/SearchResults';

const SearchBar = () => {
	const [searchKey, setSearchKey] = useState('');
	const [searchResults, setSearchResults] = useState([]);

	const timeRef = useRef(null);

	useEffect(() => {
		const fetchAllResults = async () => {
			const response = await api.get('/names');
			setSearchResults(response.data.items.slice(0, 10));
		};

		fetchAllResults();
	}, []);

	useEffect(() => {
		const fetchKeyResults = async () => {
			timeRef.current && clearTimeout(timeRef.current);

			timeRef.current = setTimeout(async () => {
				const response = await api.get(`/names?name=${searchKey}`);
				setSearchResults(response.data.items.slice(0, 10));
			}, 1000);
		};

		fetchKeyResults();
	}, [searchKey]);

	const handleSearchChange = (e) => {
		setSearchKey(e.target.value);
	};

	return (
		<div>
			<h1>Name Search </h1>
			<div className="search-container">
				<input
					className="search-box"
					type="text"
					value={searchKey}
					onChange={handleSearchChange}
				/>
				<SearchResults
					items={searchResults}
					query={searchKey}
					setSearchKey={setSearchKey}
				/>
			</div>
		</div>
	);
};

export default SearchBar;
