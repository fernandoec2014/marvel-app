import { useState } from 'react'

import Button from "../../../atoms/Button/Button";
import Input from "../../../atoms/Input/Input"
import Styles from "./Form.styles"

import { ApiService } from "../../../../service/ApiService"
import { LocalDataService } from "../../../../service/LocalDataService"

const Form = ({ handleCancel }: any) => {

  const [inputName, setInputName] = useState<string>('')
  const [inputDescription, setInputDescription] = useState<string>('')
  const [inputImage, setIinputImage] = useState<string>('')
  const [flag, setFlag] = useState<boolean>(false)
  const [message, setMessage] = useState<string>('')

  const handleCancelForm = () => {
    handleCancel(false)
  }

  const handleClick = async () => {
    try {
      const parameters = {
        idAuthor: LocalDataService.getIdAuthor(),
        title: inputName,
        body: inputDescription,
        image: inputImage,
      }

      const res = await ApiService.addHero(parameters)
      switch (res.status) {
        case 200:
          setFlag(true)
          setMessage(res.data.message)
          setTimeout(() => {
            handleCancel(false)
          }, 2000);

          break;
        case 400:
          setFlag(true)
          setMessage('El personaje ya existe')
          break;
        default:
          setFlag(true)
          setMessage('Error al agregar');
      }

    } catch (error) {
      setFlag(true)
      setMessage('Error al ejecutar el servicio');
    }
  }

  return (
    <Styles>
      <div className='form' >
        <h2 className="form-title-text">Nuevo personaje</h2>

        <div className='form-rows'>
          <div className='form-colum-label'>
            Nombre:
          </div>

          <div className='form-colum-input'>
            <Input
              type='text'
              placeholder='Nombre'
              maxLength={20}
              disabled={false}
              initialValue={inputName}
              onChange={(initialValue) => setInputName(initialValue)}
            />
          </div>
        </div>

        <div className='form-rows'>
          <div className='form-colum-label'>
            Descripción:
          </div>

          <div className='form-colum-input'>
            <Input
              type='text'
              placeholder='Descripción'
              maxLength={256}
              disabled={false}
              initialValue={inputDescription}
              onChange={(initialValue) => setInputDescription(initialValue)}
            />
          </div>
        </div>

        <div className='form-rows'>
          <div className='form-colum-label'>
            Imagen:
          </div>

          <div className='form-colum-input'>
            <Input
              type='text'
              placeholder='Imagen'
              maxLength={256}
              disabled={false}
              initialValue={inputImage}
              onChange={(initialValue) => setIinputImage(initialValue)}
            />
          </div>
        </div>

        {
          (flag && <h6>{message}</h6>)
        }

        <div className='form-button-container'>
          <div className='form-button mr'>
            <Button
              icon={'save'}
              text={'Guardar'}
              onClick={handleClick}
            />
          </div>
          <div className='form-button ml'>
            <Button
              icon={'close'}
              text={'Cancelar'}
              onClick={handleCancelForm}
            />
          </div>
        </div>

      </div>
      <br />
    </Styles>
  )
}

export default Form