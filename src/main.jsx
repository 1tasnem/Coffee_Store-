import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './Components/Pages/Home.jsx'
import Coffe from './Components/Pages/Coffe.jsx'
import Dashboard from './Components/Pages/Dashboard.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Layout from './Components/Layout/Layout.jsx';
import CoffeeCard from './Components/CoffeeCard/CoffeeCard.jsx'

const router = createBrowserRouter([
  {
    path: "/",//index:true;
    element: <Layout></Layout>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
        loader: () => fetch('../categories.json'),
        children:[


          {
          path: '/',
          element:<CoffeeCard></CoffeeCard>,
           loader: () => fetch('../coffees.json'),
          },

          {
          path: '/category/:category',
          element:<CoffeeCard></CoffeeCard>,
           loader: () => fetch('../coffees.json'),
          },
        ],

        
      },
       {
        path:"/coffe",
        element:<Coffe></Coffe>,
        loader: () => fetch('../coffees.json')
        
      },
       {
        path:"/dashboard",
        element:<Dashboard></Dashboard>,
        
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
