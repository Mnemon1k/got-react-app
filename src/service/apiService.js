import axios from "axios";

export default class apiService {
	static API = axios.create({
		baseURL: process.env.REACT_APP_API_URL
	});

	static parseData(data) {
		let parsed_data = {}
		let arrData = data.split("link:")

		data = arrData.length === 2 ? arrData[1] : data;
		arrData = data.split(",")

		for (let d of arrData){
			let linkInfo = /<([^>]+)>;\s+rel="([^"]+)"/ig.exec(d)
			parsed_data[linkInfo[2]]=linkInfo[1]
		}

		return parsed_data;
	}

	static async getCharacters(page= 1, pageSize= 25) {
		try {
			const {data, headers} = await this.API.get('/characters',{
				params:{
					page,
					pageSize
				}
			});

			return {
				data,
				totalPages: this.parseData(headers.link).last.split('page=')[1].split('&')[0]
			};
		}catch (e) {
			// TODO: process exception - show alert on UI
			console.error(e);
		}
	}
	static async getHouse(id) {
		try {
			const { data } = await this.API.get('/houses/' + id,{});

			return data;
		}catch (e) {
			// TODO: process exception - show alert on UI
			console.error(e);
		}
	}
}