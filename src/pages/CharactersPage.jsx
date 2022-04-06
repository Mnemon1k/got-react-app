import {useEffect, useState} from "react";
import useFetch from "../hooks/useFetch";

import apiService from "../service/apiService";

import CharactersTable from "../components/CharactersTable/CharactersTable";

function CharactersPage() {
	// TODO: move state to context if app will be more complex and there will be more nested components.
	const [characters, setCharacters] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [pageSize, setPageSize] = useState(25);
	const [totalPages, setTotalPages] = useState(1);

	const [fetchData, isLoading, error] = useFetch(async ()=>{
		const {data, totalPages} = await apiService.getCharacters(currentPage, pageSize);

		setCharacters(data);
		setTotalPages(totalPages);
	});

	useEffect(()=>{
		fetchData();
	},[currentPage, pageSize]);

	//TODO: show error from useFetch() in UI
	return (
		<div className={'page-container'}>
			<h1>
				Game of Thrones - Characters
			</h1>
			<CharactersTable
				pageSize={pageSize}
				currentPage={currentPage}
				setCurrentPage={setCurrentPage}
				setPageSize={setPageSize}
				totalPages={totalPages}
				loading={isLoading}
				characters={characters}
			/>
		</div>
	);
}

export default CharactersPage;