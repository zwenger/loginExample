import React, {useState} from 'react';
import Form from "./Form";
import {loginRequests} from "../Requests/loginRequests";
import {getDecodedToken, storeJwtToken, storeUserPermissions} from "../helpers/AuthHelper";


const Login = () => {

  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  const handleOnSubmit = (event) => {
    event.preventDefault();
    // 'superadministrador@acmeinc.com', '123'
    loginRequests(user.email, user.password)
      .then(response => {
        storeJwtToken(response.token);
        storeUserPermissions(response.permisos);
      }).finally(() => {
      let userLogged = getDecodedToken()
      setUser({...user, ...userLogged})
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
