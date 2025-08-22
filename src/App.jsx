import React from 'react';
import Layout from './components/Layout.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import SignupPage from './components/SignupPage.jsx';
import LoginPage from './components/LoginPage.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { createBrowserRouter,createRoutesFromElements ,Route, RouterProvider} from 'react-router-dom';
import { AuthProvider } from '../src/components/AuthProvider.jsx';


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='signup' element={<SignupPage />} />
       <Route path='login' element={<LoginPage />} />
    <Route path='/' element={<Layout />}>
      <Route path='/' element={<Home />} />
      <Route path='about' element={<About />} />
        
       

    </Route>
    
    <Route path='*' element={<Error />} />
    </>
  )
)

export default function App() {
  return (
    <>
      <AuthProvider>
        <RouterProvider router={router} />
        <ToastContainer position="top-center" autoClose={5000} />
      </AuthProvider>
    </>
  );
}