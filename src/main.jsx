import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from './pages/login.jsx';
import Register from './pages/register.jsx';
import LenhNhapXuat from './pages/lenhnhapxuat.jsx';
import UsersPage from './pages/users.jsx';
import './styles/global.css';
import TodoApp from './component/todo/TodoApp.jsx';
import ErrorPage from './pages/error.jsx';
import { AuthWrapper } from './component/context/auth.context.jsx';
import PrivateRoute from './pages/private.route.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage/>,
    children: [
      {
        index: true,
        element: <TodoApp/>
      },
      {
        path: "/products",
        element: (
        <PrivateRoute>
          <LenhNhapXuat/>
          </PrivateRoute>
        )
      },
      {
        path: "/users",
        element: <UsersPage/>
      }
    ]
  },
  {
    path: "/login",
    element: <LoginPage/>

  },
  {
    path: "/register",
    element: <Register/>
  }
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <AuthWrapper>
      <RouterProvider router={router} />
    </AuthWrapper>
    
  // </React.StrictMode>,
)
