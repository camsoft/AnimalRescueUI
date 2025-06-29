import { useState } from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home';

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<div>About Page</div>} />
        </>
    )
)

function App() {
  return (
    <>
        <RouterProvider router={router} >

        </RouterProvider >
    </>
  )
}

export default App
