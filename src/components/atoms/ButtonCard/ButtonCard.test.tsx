import { render, screen } from '@testing-library/react'
import ButtonCard from './ButtonCard'

describe('ButtonCard atom', () => {

  it('Should be defined', async () => {
    expect(ButtonCard).toBeDefined()
  })

  it('Should render', () => {
    const onClick = jest.fn()
    expect(() => {
      render(
        <ButtonCard
          onClick={onClick}>
        </ButtonCard>)
    }).not.toThrow()
  })

})