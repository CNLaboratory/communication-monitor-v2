import React from 'react';
import { Navigate } from 'react-router-dom';
import AuthService from './services/auth.service';

export default function Logout (props) {

  props.logOut();

  return(
    <Navigate to='/' />
  )
}