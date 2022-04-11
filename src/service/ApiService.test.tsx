import axios from 'axios'
import { ApiService } from './ApiService'
import { mockedResponseAuthSuccess } from './__mocks__/ApiServiceMocks'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

describe('Testing api service', () => {

  it('Should work if there are correct parameters',  () => {
    mockedAxios.get.mockResolvedValueOnce(mockedResponseAuthSuccess)
    const res = ApiService.login({
      email: 'user@gmail.com',
      password: 'password'
    })
    expect(res).toEqual({
      code: 200,
    })
  })

})