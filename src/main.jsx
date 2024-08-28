import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LoginPage from './pages/login.jsx';
import Register from './pages/register.jsx';
import Products from './pages/products.jsx';
import UsersPage from './pages/users.jsx';
import './styles/global.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/login",
    element: <LoginPage/>

  },
  {
    path: "/register",
    element: <Register/>
  },
  {
    path: "/products",
    element: <Products/>
  },
  {
    path: "/users",
    element: <UsersPage/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <RouterProvider router={router} />
  </React.StrictMode>,
)
