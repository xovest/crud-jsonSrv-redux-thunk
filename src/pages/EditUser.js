import React, { useEffect, useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import { useNavigate, useParams } from 'react-router';
import { getSingleUser, updateUser } from '../redux/actions';
import { useDispatch, useSelector } from 'react-redux';

const EditUser = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    contact: "",
    country: ""
  });
  const [error, setError] = useState("");
  let { id } = useParams();
  const { user } = useSelector(state => state.data);

  useEffect(() => {
    dispatch(getSingleUser(id));
  }, []);

  useEffect(() => {
    if (user) {
      setState({ ...user });
    }
  }, [user]);

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
      dispatch(updateUser(state, id));
      navigate('/');
      setError('');
    }
  }

  return (
    <div>
      <Button type="submit" variant="contained" color="secondary" onClick={() => navigate('/')} >
        Go back
      </Button>
      <h2>Editing {user.name}</h2>
      {error && <h3 style={{ color: "red" }}>{error}</h3>}
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField id="filled-basic" name="name" label="Name" variant="filled" value={name || ""} type="text" onChange={handleInput} />
        <br />
        <TextField id="filled-basic" name="email" label="Email" variant="filled" value={email || ""} type="email" onChange={handleInput} />
        <br />
        <TextField id="filled-basic" name="contact" label="Contact" variant="filled" value={contact || ""} type="number" onChange={handleInput} />
        <br />
        <TextField id="filled-basic" name="country" label="Country" variant="filled" value={country || ""} type="text" onChange={handleInput} />
        <br />
        <Button type="submit" variant="contained" color="primary" >
          Update
        </Button>
      </form>
    </div>
  );
}

export default EditUser;
