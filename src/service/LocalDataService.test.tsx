import { LocalDataService } from './LocalDataService'

describe('Testing local-data Service', () => {

  it('Should set/get Authentication correctly', () => {
    const authentication = 'check'
    LocalDataService.setAuthentication(authentication)
    expect(LocalDataService.getAuthentication()).toEqual(authentication)
  })

  it('Should set/get IdAuthor correctly', () => {
    const author = '44'
    LocalDataService.setIdAuthor(author)
    expect(LocalDataService.getIdAuthor()).toEqual(author)
  })

})