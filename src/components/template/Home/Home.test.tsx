import { render } from '@testing-library/react'
import Home from './Home'

describe('Home molecule', () => {

  it('Should be defined', async () => {
    expect(Home).toBeDefined()
  })

  it('Should render', () => {
    expect(() => {
      render(
        <Home></Home >)
    }).not.toThrow()
  })

})