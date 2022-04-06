import mockAxios from "axios";
import apiService from "./apiService";


jest.mock('axios');

describe('Api service', () => {
	let response;
	beforeEach(() => {
		response = {
			data: {
				"url": "https://anapioficeandfire.com/api/houses/1",
				"name": "House Algood",
				"region": "The Westerlands",
				"coatOfArms": "A golden wreath, on a blue field with a gold border(Azure, a garland of laurel within a bordure or)",
				"words": "",
				"titles": [
					""
				],
				"seats": [
					""
				],
				"currentLord": "",
				"heir": "",
				"overlord": "https://anapioficeandfire.com/api/houses/229",
				"founded": "",
				"founder": "",
				"diedOut": "",
				"ancestralWeapons": [
					""
				],
				"cadetBranches": [],
				"swornMembers": []
			}
		}
	});

	test('Get house by id', async () => {
		mockAxios.get.mockReturnValue(response);

		const data = await apiService.getHouse(1);

		expect(mockAxios.get).toBeCalledTimes(1)
		expect(data.name).toEqual('House Algood')
	})
});
