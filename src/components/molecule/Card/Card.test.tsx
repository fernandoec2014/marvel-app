import { render, screen } from '@testing-library/react'
import Card from './Card'

describe('Card molecule', () => {

  it('Should be defined', async () => {
    expect(Card).toBeDefined()
  })

  it('Should render', () => {
    const handleEdit = jest.fn()
    const handleDelete = jest.fn()
    expect(() => {
      render(
        <Card
          id='1'
          image=''
          title='Title Card'
          description='Una descripcion de Card'
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        >
        </Card >)
    }).not.toThrow()
  })

})