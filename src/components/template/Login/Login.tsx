import { Link, useHistory } from 'react-router-dom';

import Button from '../../atoms/Button/Button';
import Input from '../../atoms/Input/Input';
import Styles from './Login.styles'

import { ApiService } from '../../../service/ApiService'
import { useState } from 'react';

import { LocalDataService } from '../../../service/LocalDataService';

const Login = () => {

  const [message, setMessage] = useState(false)
  const [emailInput, setEmailInput] = useState('')
  const [passwordInput, setPasswordInput] = useState('')
  let history = useHistory();

  const handleClick = async () => {
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
        setMessage(true)
      }
    } catch (error) {
      console.log('Error en ejecución de servicio');
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
              (message && <h6>{'Usuario no autorizado'}</h6>)
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
