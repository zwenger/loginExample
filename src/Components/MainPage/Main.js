import React from 'react';
import PropTypes from 'prop-types';
import {Button} from "@material-ui/core";
import {logoutRequest} from "../../Requests/loginRequests";
import {clearStorage, getJwtToken} from "../../helpers/AuthHelper";
import {useHistory} from "react-router";



const Main = props => {
  const history = useHistory();

  const logout = () => {
    logoutRequest(getJwtToken())
      .then(() => {
        clearStorage();
        history.push('/');
      })
  }

  return (
    <div>
      <div>Welcome To the Main page!</div>
      <Button onClick={logout} style={{backgroundColor: '#2A9D8F'}}> Logout </Button>
    </div>
  );
};

Main.propTypes = {};

export default Main;
