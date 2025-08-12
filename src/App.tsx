import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from './pages/About';
import React from 'react';
import Add from './pages/Add';
import Home from './pages/Home';
const router = createBrowserRouter([
  {
    path: "/",
    children:[
      {path:"",element:<Home />},
      {path:"home2",element:<Add/>},
    ]
  },
  {
    path: "/about",
    element: <About />,
  },
]);

function App() {

  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  )
}

export default App
