import {createBrowserRouter} from 'react-router'
import Login from '../features/auth/pages/Login'
import AuthLayout from '../layout/AuthLayout'
import Register from '../features/auth/pages/Register'


export const Router = createBrowserRouter(
    [
        {
            path:'/',
            element:"heloo"
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


