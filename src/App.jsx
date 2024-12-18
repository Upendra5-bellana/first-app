import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from '../src/components/Header';
import Body from '../src/components/Body';
import About from '../src/components/About';
import Contact from '../src/components/Contact';
import Error from '../src/components/Error';
import { RestaurantMenu } from './components/RestAurantMenu';
import {createBrowserRouter,RouterProvider,Outlet} from 'react-router-dom'



const App=()=>{
  return (
    <div className="app">
   <Header />
   <Outlet />
   
   </div>
  )
};

export const appRouter=createBrowserRouter([
  {
    path: "/",
    element: <App /> ,
    children:[
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path:"/restaurant:resid",
        element:<RestaurantMenu />,
      }

    ],
    errorElement: <Error />
  },
 
]);

export default App
