import {createBrowserRouter} from 'react-router'
import Login from '../features/auth/pages/Login'
import AuthLayout from '../layout/AuthLayout'
import Register from '../features/auth/pages/Register'
import ProtectedRoute from './ProtectedRoute'
import HomeLayout from '../layout/HomeLayout'
import Home from '../features/home/pages/Home'


export const Router = createBrowserRouter(
    [
        {
            element:<ProtectedRoute><HomeLayout/></ProtectedRoute>,
            children:[
                {
                    path:'/',
                    element:<Home />
                }
            ]
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


