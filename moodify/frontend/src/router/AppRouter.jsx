import {createBrowserRouter} from 'react-router'
import Login from '../features/auth/pages/Login'
import AuthLayout from '../layout/AuthLayout'
import Register from '../features/auth/pages/Register'
import ProtectedRoute from './ProtectedRoute'


export const Router = createBrowserRouter(
    [
        {
            path:'/',
            element:<ProtectedRoute>{'home'}</ProtectedRoute>
        },
        {

            element:<AuthLayout />,
            children:[
                {
                    path:'/login',
                    element:<Login />
                },
                {
                    path:'/register',
                    element:<Register />
                }
            ]
        }
    ]
)


