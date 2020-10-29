import React from 'react';
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import {makeStyles} from "@material-ui/core/styles";
import {Button} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  formCard: {
    display: 'flex',
    alignSelf: 'center',
    height: '350px',
    width: '600px',
    backgroundColor: 'white',
    borderRadius: '25px'
  },
  field: {
    width: '400px',
  },
  grid: {
    margin: 'auto',
  },
  button: {
    backgroundColor: '#E9C46A',

    '&:hover':{
      backgroundColor: '#F4A261',
      color: 'white',
    }
  }
}));

const Form = props => {
  const {handleOnChange, handleOnSubmit, user} = props;
  const classes = useStyles();
  return (
    <form onSubmit={e => handleOnSubmit(e)} className={classes.formCard} noValidate autoComplete="off">
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="center"
        spacing={2}
        className={classes.grid}
      >
        <Grid item>
          <TextField value={user.email} name='email' onChange={handleOnChange} className={classes.field} id="email"
                     label="Email" variant="outlined"/>
        </Grid>
        <Grid item>
          <TextField value={user.password} onChange={handleOnChange} name='password' className={classes.field}
                     id="password" label="Password" type='password' variant="outlined"/>
        </Grid>
        <Grid item>
          <Button type='submit' variant="contained" className={classes.button}>
            Login
          </Button>
        </Grid>
        <Grid item >
          {user.nombre ? `Welcome ${user.nombre} !` : 'Please login'}
        </Grid>
      </Grid>
    </form>
  )
};

Form.propTypes = {};

export default Form;
