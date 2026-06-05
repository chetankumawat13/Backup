import {createBrowserRouter} from 'react-router'
import Login from '../features/auth/pages/Login'
import AuthLayout from '../layout/AuthLayout'
import Register from '../features/auth/pages/Register'
import ProtectedRoute from './ProtectedRoute'
import Home from '../features/posts/pages/Home'


export const MainRoute = createBrowserRouter([
    {
        element: <AuthLayout />,
        children:[
            {
                path:"/login",
                element:<Login />
            },
            {
                path:"/register",
                element:<Register />
            }
        ]
    },
    {
        element:<ProtectedRoute />,
        children:[
            {
                path:'/',
                element:<Home />
            }
        ]
    }

])