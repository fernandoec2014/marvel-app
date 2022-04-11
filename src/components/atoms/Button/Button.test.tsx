import { render, screen } from '@testing-library/react'
import Button from './Button'

describe('Button atom', () => {

  it('Should be defined', async () => {
    expect(Button).toBeDefined()
  })

  it('Should render', () => {
    const onClick = jest.fn()
    expect(() => {
      render(
        <Button
          text='Hola'
          onClick={onClick}>Hazme click
        </Button>)
    }).not.toThrow()
  })

})