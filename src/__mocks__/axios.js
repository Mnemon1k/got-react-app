const mockAxios = jest.genMockFromModule('axios')

// Fix the axios.create() undefined error
mockAxios.create = jest.fn(() => mockAxios)

export default mockAxios