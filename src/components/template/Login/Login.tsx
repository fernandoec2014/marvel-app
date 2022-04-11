import { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'

import Button from '../../atoms/Button/Button'
import Input from '../../atoms/Input/Input'
import Styles from './Login.styles'

import { ApiService } from '../../../service/ApiService'

import { LocalDataService } from '../../../service/LocalDataService'

const Login = () => {

  const [emailInput, setEmailInput] = useState<string>('')
  const [passwordInput, setPasswordInput] = useState<string>('')
  const [showMessage, setShowMessage] = useState<boolean>(false)
  const [message, setMessage] = useState<string>('')
  let history = useHistory();

  // Manejo de mensajes
  useEffect(() => {
    setShowMessage(false)
  }, [emailInput, passwordInput])

  const handleClick = async () => {
    let emailValue = emailInput.trim()
    let passwordValue = passwordInput.trim()

    if (emailValue.length > 0 && passwordValue.length > 0) {
      try {
        const parameters = {
          email: emailInput,
          password: passwordInput
        }

        const res = await ApiService.login(parameters)
        if (res.data.success) {
          // Almacenamiento en session
          let resData = res.data
          LocalDataService.setIdAuthor(resData.data.authorid)
          LocalDataService.setAuthentication('ok')
          history.push('/home')
        } else {
          setShowMessage(true)
          setMessage('Usuario no autorizado')
        }
      } catch (error) {
        console.log('Error en ejecución de servicio');
      }
    } else {
      setShowMessage(true)
      setMessage('Los parámetros ingresados no son válidos')
    }
  }

  return (
    <Styles>
      <div className='container'>
        <div className='page-container'>
          <div className='login-container'>
            <h1 className='title-text'>Iniciar sesión</h1>

            <Input
              type='text'
              placeholder='Email'
              maxLength={20}
              disabled={false}
              initialValue={emailInput}
              onChange={(initialValue) => setEmailInput(initialValue)}
            />
            <br />
            <Input
              type='password'
              placeholder='Password'
              maxLength={20}
              disabled={false}
              initialValue={passwordInput}
              onChange={(initialValue) => setPasswordInput(initialValue)}
            />
            <br />

            {
              (showMessage && <h5>{message}</h5>)
            }

            <Button
              text={'Iniciar sesión'}
              onClick={handleClick}
            />
            <br />
            <Link to={'/account'}>Crear cuenta</Link >
          </div>
        </div>
      </div>
    </Styles>
  );
}

export default Login;
