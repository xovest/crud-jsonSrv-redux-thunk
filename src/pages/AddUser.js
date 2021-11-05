import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import { useNavigate } from 'react-router';
import { addUser } from '../redux/actions';
import { useDispatch } from 'react-redux';

const AddUser = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    contact: "",
    country: ""
  });
  const [error, setError] = useState("");

  const {name, email, contact, country} = state;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleInput = (e) => {
    let { name, value } = e.target;
    setState({...state, [name]: value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !country || !email || !contact) {
      setError("Plez fill in all the blanks douch!");
    } else {
      dispatch(addUser(state));
      navigate('/');
      setError('');
    }
  }

  return (
    <div>
      <Button type="submit" variant="contained" color="secondary" onClick={() => navigate('/')} >
        Go back
      </Button>
      <h2>Add User</h2>
      {error && <h3 style={{ color: "red" }}>{error}</h3>}
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField id="outlined-basic" name="name" label="Name" variant="outlined" value={name} type="text" onChange={handleInput} />
        <br />
        <TextField id="outlined-basic" name="email" label="Email" variant="outlined" value={email} type="email" onChange={handleInput} />
        <br />
        <TextField id="outlined-basic" name="contact" label="Contact" variant="outlined" value={contact} type="number" onChange={handleInput} />
        <br />
        <TextField id="outlined-basic" name="country" label="Country" variant="outlined" value={country} type="text" onChange={handleInput} />
        <br />
        <Button type="submit" variant="contained" color="primary" >
          Submit
        </Button>
      </form>
    </div>
  );
}

export default AddUser;
