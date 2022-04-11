import { render } from '@testing-library/react'
import Main from './Main'

describe('Main molecule', () => {

  it('Should be defined', async () => {
    expect(Main).toBeDefined()
  })

  it('Should render', () => {
    expect(() => {
      render(
        <Main></Main >)
    }).not.toThrow()
  })

})