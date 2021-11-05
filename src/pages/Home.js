import React, { useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { loadUsers } from '../redux/actions';

export default function Home() {
  let dispatch = useDispatch();
  const { users } = useSelector(state => state.data);

  useEffect(() => {
    dispatch(loadUsers());
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650, marginTop: 100 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">Contact</TableCell>
            <TableCell align="center">Country</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users && users.map((user) => (
            <TableRow
              key={user.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {user.name}
              </TableCell>
              <TableCell align="center">{user.email}</TableCell>
              <TableCell align="center">{user.contact}</TableCell>
              <TableCell align="center">{user.country}</TableCell>
              <TableCell align="center"></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}