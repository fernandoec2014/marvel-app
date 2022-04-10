import { Link, useHistory } from "react-router-dom";

import Button from "../../atoms/Button/Button";
import Input from "../../atoms/Input/Input";
import Styles from "./Account.styles"

import { ApiService } from "../../../service/ApiService"
import { useState } from 'react';

const Account = () => {

  const [emailInput, setEmailInput] = useState<string>('')
  const [passwordInput, setPasswordInput] = useState<string>('')
  const [authorId, setAuthorId] = useState<string>('')
  const [showMessage, setShowMessage] = useState<boolean>(false)
  const [message, setMessage] = useState<string>('')
  let history = useHistory();

  const handleClick = async () => {

    try {
      const parameters = {
        email: emailInput,
        password: passwordInput,
        authorId: authorId
      }

      const res = await ApiService.account(parameters)
      if (res.data.success) {

        setMessage(res.data.message)
        setShowMessage(true)
        setTimeout(() => {
          let path = '/';
          history.push(path)
        }, 3000);
      } else {
        setMessage(res.data.message)
        setShowMessage(true)
      }
    } catch (error) {
      console.log('Error en ejecución de servicio');
    }
  }

  return (
    <Styles>
      <div className="container">
        <div className="page-container">
          <div className="account-container">
            <h1 className="title-text">Crear cuenta</h1>
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
            <Input
              type='number'
              placeholder='Author ID'
              maxLength={3}
              disabled={false}
              initialValue={authorId}
              onChange={(initialValue) => setAuthorId(initialValue)}
            />
            <br />

            {
              showMessage && <h6>{message}</h6>
            }

            <Button
              text={'Crear cuenta'}
              onClick={handleClick}
            />
            <br />
            <Link to={'/'}>Iniciar sesion</Link>
          </div>
        </div>
      </div>
    </Styles>
  );
}

export default Account;
