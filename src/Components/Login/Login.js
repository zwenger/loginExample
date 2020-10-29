import React, {useState} from 'react';
import Form from "./Form";
import {loginRequests } from "../../Requests/loginRequests";
import { storeJwtToken } from "../../helpers/AuthHelper";
import { useHistory } from 'react-router-dom'

const Login = () => {

  const [user, setUser] = useState({
    email: '',
    password: ''
  });
  const history = useHistory();

  const handleOnSubmit = (event) => {
    event.preventDefault();
    // 'superadministrador@acmeinc.com', '123'
    loginRequests(user.email, user.password)
      .then(response => {
        storeJwtToken(response.access_token);
        history.push('/')
        //storeUserPermissions(response.permisos);
      })
  }

  const handleOnChange = (event) => {
    setUser({...user, [event.target.name]: event.target.value})
  }

  return (
    <>
      <Form
        user={user}
        handleOnChange={handleOnChange}
        handleOnSubmit={handleOnSubmit}
      />

    </>
  )
};

Login.propTypes = {};

export default Login;
