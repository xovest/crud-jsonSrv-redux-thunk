import axios from 'axios';
import * as types from './actionType';

const getUsers = (users) => ({
  type: types.GET_USERS,
  payload: users
});

const userDeleted = () => ({
  type: types.DELETE_USER
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

export const deleteUser = (id) => {
  return function (dispatch) {
    axios
      .delete(`${process.env.REACT_APP_API}/${id}`)
      .then(res => {
        console.log(res);
        dispatch(userDeleted());
        dispatch(loadUsers());
      })
      .catch(err => console.log(err));
  };
};