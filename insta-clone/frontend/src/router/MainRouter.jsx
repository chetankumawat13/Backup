import {createBrowserRouter} from 'react-router'
import Login from '../features/auth/pages/Login'
import AuthLayout from '../layout/AuthLayout'
import Register from '../features/auth/pages/Register'
import ProtectedRoute from './ProtectedRoute'
import Home from '../features/posts/pages/Home'
import FeedLayout from '../layout/FeedLayout'


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
                element:<FeedLayout />,
                children:[
                    {
                        path:'/',
                        element:<Home />
                    }
                ]
            }
        ]
    }

])