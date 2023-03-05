import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Auth } from './modules/auth/components/Auth';
import TyansPage from './modules/tyan/pages/TyansPage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <App />
);
