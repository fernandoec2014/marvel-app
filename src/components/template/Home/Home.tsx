import { useEffect, useState } from 'react';

import { useHistory } from "react-router-dom";

import Styles from "./Home.styles"

import Button from "../../atoms/Button/Button"
import Input from "../../atoms/Input/Input"
import Card from "../../molecule/Card/Card"
import Form from "../../molecule/Card/Form/Form";

import { ApiService } from "../../../service/ApiService"
import { LocalDataService } from "../../../service/LocalDataService"

interface ICharacter {
  _id: string
  title: string
  body: string
  image: string
  category: string
  idAuthor: string
  createdAt: string,
  updatedAt: string,
}

const Home = () => {
  const [characters, setCharacters] = useState<Array<ICharacter>>()
  const [inputSearch, setInputSearch] = useState<string>('')
  const [showForm, setShowForm] = useState<boolean>(false)
  let history = useHistory();

  useEffect(() => {
    getAllHero()
  }, [])

  const getAllHero = async () => {
    try {
      const parameters = {
        idAuthor: LocalDataService.getIdAuthor(),
      }
      const res = await ApiService.getAllHero(parameters)
      console.log(res);
      setCharacters(res)
    } catch (error) {
      console.log('Error en ejecución de servicio');
    }
  }

  const handleEdit = (id: string) => {
    console.log('Edit');
    console.log('ID', id);
  }

  const handleDelete = async (id: string) => {
    try {
      const parameters = {
        id: id,
        idAuthor: LocalDataService.getIdAuthor(),
      }

      const res = await ApiService.deleteHero(parameters)
      console.log(res)
      getAllHero()
    } catch (error) {
      console.log('Error en ejecución de servicio');
    }
  }

  const handleCancel = (flag: boolean) => {
    console.log('Dio click en cancel');
    setShowForm(flag)
    getAllHero()
  }

  const handleAddCharacter = () => {
    setShowForm(true)
    getAllHero()
  }

  const handleSearch = (e: any) => {
    let wordFilter = e
    console.log(wordFilter);
    console.log(characters);
    if (wordFilter !== '' && wordFilter.length > 0) {
      let dataFilter = characters!.filter((item) => (
        item.title.toLowerCase().includes(wordFilter.toLowerCase())
      ))
      setCharacters(dataFilter)
    } else {
      getAllHero()
    }
  }

  const handleLogout = () => {
    LocalDataService.setAuthentication('close')
    LocalDataService.setIdAuthor('')
    let path = '/';
    history.push(path);
  }

  return (
    <Styles>
      <div className="container" style={{ overflowY: 'scroll', height: 'calc(100vh - 1px)' }}>
        <div className="page-container">
          <div className="home-container">
            <div className='search'>
              <div className='search-input'>
                <h1 className="title-text">Listado de personajes</h1>
              </div>
              <div className='search-button'>
                <Button
                  icon={'logout'}
                  text={'Cerrar sesión'}
                  onClick={handleLogout}
                />
              </div>

              <div className='search-input'>
                <Input
                  type='text'
                  placeholder='Buscar'
                  maxLength={20}
                  disabled={false}
                  initialValue={inputSearch}
                  onChange={handleSearch}
                />
              </div>

              <div className='search-button'>
                <Button
                  icon={'add'}
                  text={'Nuevo'}
                  onClick={handleAddCharacter}
                />
              </div>
              <br />
              <br />

              {
                showForm && <Form handleCancel={handleCancel} />
              }

              {
                characters &&
                characters
                  .map((character) => {
                    const { _id, title, body, image } = character
                    return <Card
                      id={_id}
                      image={image}
                      title={title}
                      description={body}
                      handleEdit={() => handleEdit(_id)}
                      handleDelete={() => handleDelete(_id)}
                    />
                  })
              }

            </div>
          </div>
        </div>
      </div>
    </Styles>
  )
}

export default Home