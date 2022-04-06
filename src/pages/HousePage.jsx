import {useEffect, useState} from "react";
import useFetch from "../hooks/useFetch";
import {Link, useParams} from "react-router-dom";

import apiService from "../service/apiService";

import {Divider, Result, Spin} from "antd";
import HouseDetails from "../components/HouseDetails/HouseDetails";

function HousePage() {
	const {id} = useParams();
	const [data, setData] = useState(null);
	const [fetchData, isLoading, error] = useFetch(async ()=>{
		const data = await apiService.getHouse(id);
		setData(data);
	});

	useEffect(()=>{
		fetchData();
	},[id]);


	//TODO: show error from useFetch() in UI
	return (
		<div className={'page-container'}>
			<h1>{data && data.name}</h1>
			<div className="text-center">
				<Link to="/">Back to Characters</Link>
			</div>
			<Divider/>

			{isLoading ?
				<div className="text-center">
					<Spin size="large" />
				</div>
			:
				data ?
						<HouseDetails data={data}/>
						:
						<Result
							status="404"
							title="404 Not found"
							subTitle="Sorry, house does not exist."
						/>
			}

		</div>
	);
}

export default HousePage;