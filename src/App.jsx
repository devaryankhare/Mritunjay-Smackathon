import React from 'react';
import Layout from './components/Layout.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import SignupPage from './components/SignupPage.jsx';
import LoginPage from './components/LoginPage.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FirstAid from './components/FirstAid.jsx';
import SeeReports from './components/SeeReports.jsx';

import { createBrowserRouter,createRoutesFromElements ,Route, RouterProvider} from 'react-router-dom';
import { AuthProvider } from '../src/components/AuthProvider.jsx';
import PxForm from './components/PxForm.jsx';
import LandingPage from './components/LandingPage.jsx';
import DietPlanner from './components/DietPlanner.jsx';


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='signup' element={<SignupPage />} />
      <Route path='login' element={<LoginPage />} />
      <Route path='/' element={<Layout />}>
      <Route path='/' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='first-aid' element={<FirstAid />} />
      <Route path='addprescription' element={<PxForm />} />
      <Route path='seereports' element={<SeeReports />} />
        <Route path='landing' element={<LandingPage />} />
        <Route path='diet-planner' element={<DietPlanner />} />

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