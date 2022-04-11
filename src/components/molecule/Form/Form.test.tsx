import { fireEvent, render, screen } from '@testing-library/react'
import Form from './Form'

describe('Form molecule', () => {

  it('Should be defined', async () => {
    expect(Form).toBeDefined()
  })

  it('Should render', async () => {
    const handleCancel = jest.fn()
    expect(() => {
      const props = {
        mode: 'add',
        character: {},
        handleCancel: handleCancel
      }

      render(
        <Form {...props} />
      )
    }).not.toThrow()
  })
})
