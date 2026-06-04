import {createBrowserRouter} from 'react-router'
import Login from '../features/auth/pages/Login'
import AuthLayout from '../layout/AuthLayout'


export const MainRoute = createBrowserRouter([
    {
        element: <AuthLayout />,
        children:[
            {
                path:"/login",
                element:<Login />
            }
        ]
    },

])