import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from './pages/About';
import React from 'react';
import Add from './pages/Add';
import Home from './pages/Home';
import Reminders from './pages/Reminders';
import Instructions from './pages/Instructions';
const router = createBrowserRouter([
  {
    path: "/",
    children:[
      {path:"",element:<Home />},
      {path:"home2",element:<Add/>},
    ],

  },
  {
    path: "/about",
    element: <About />,
    
  },
  {
    path: "/reminders/:uid",
    element:<Reminders />,
  },
  {
    path: "/instructions/:uid",
    element:<Instructions />,
  }
  
]);

function App() {

  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  )
}

export default App
