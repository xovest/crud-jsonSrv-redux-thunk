import axios from 'axios';
import * as types from './actionType';

const getUsers = (users) => ({
  type: types.GET_USERS,
  payload: users
});

export const loadUsers = () => {
  return function (dispatch) {
    axios
      .get(`${process.env.REACT_APP_API}`)
      .then(res => {
        console.log(res);
        dispatch(getUsers(res.data));
      })
      .catch(err => console.log(err));
  };
};