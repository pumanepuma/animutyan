import React, { createContext, useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import { JSON_SERVER, REACT_APP_API_URL } from './constants';
import { Auth } from './modules/auth/components/Auth';
import {Routes, createBrowserRouter, RouterProvider} from 'react-router-dom'
import TyansPage from './modules/tyan/pages/TyansPage';

interface TContext {
  isAuth:boolean,
  setIsAuth:(isAuth:boolean) => void
}

export const Context = createContext<TContext|null>(null)

export const  App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Auth />
    }
  ])
  const registerRouter = createBrowserRouter([
    {
      path:'/',
      element: <TyansPage />
    }
  ])
  const [isAuth,setIsAuth] = useState(false)
  return (
    <Context.Provider value={{isAuth:false,setIsAuth}}>
      <RouterProvider router={isAuth ? registerRouter : router}/>
    </Context.Provider>
  );
}
