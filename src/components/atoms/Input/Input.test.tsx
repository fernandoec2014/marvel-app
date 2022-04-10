import { fireEvent, render, screen } from '@testing-library/react'
import Input from './Input'

describe('Input atom', () => {

  it('Should be defined', async () => {
    console.log(Input)
    expect(Input).toBeDefined()
  })

  it('Should render', async () => {
    const onChange = jest.fn()
    expect(() => {
      render(
        <Input
          type='text'
          placeholder=''
          maxLength={40}
          disabled={false}
          initialValue=''
          onChange={onChange}
        />
      )
    }).not.toThrow()
  })
})
