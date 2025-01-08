import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { HelmetProvider } from 'react-helmet-async';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import MainLayout from './Layout/MainLayout.jsx'
import Home from './Pages/Home/Home.jsx'
import Menu from './Pages/Home/menu/Menu.jsx';
import Order from './Pages/order/order/Order.jsx';
import AuthProvider from './Providers/AuthProvider.jsx';
import Login from './Pages/Login/Login.jsx';
import SignUp from './Pages/SignUp/SignUp.jsx';
import Dashboard from './Layout/Dashboard.jsx';
import Cart from './Pages/Dashboard/Cart/Cart.jsx';
import AllUsers from './Pages/Dashboard/AllUsers/AllUsers.jsx';
import AddItems from './Pages/Dashboard/AddItems/AddItems.jsx';
import AdminRoute from './Routes/AdminRoute.jsx';
import ManageItems from './Pages/Dashboard/ManageItem/ManageItems.jsx';
import UpdateItem from './Pages/Dashboard/UpdataItems/UpdateItem.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/menu',
        element: <Menu></Menu>
      },
      {
        path: '/order/:category',
        element: <Order></Order>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'signup',
        element: <SignUp></SignUp>
      },
    ]
  },
  {
    path: '/dashboard',
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: 'cart',
        element: <Cart></Cart>
      },

      // admin only routes
      {
        path: 'users',
        element: <AllUsers></AllUsers>
      },
      {
        path: 'addItems',
        element: <AdminRoute><AddItems></AddItems></AdminRoute>
      },
      {
        path: 'updateItem/:id',
        element: <AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/menu/${params.id}`)
      },
      {
        path: 'manageItems',
        element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
      },
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
          <div className='max-w-screen-xl mx-auto'>
            <RouterProvider router={router} />
          </div>
        </HelmetProvider>
      </QueryClientProvider>

    </AuthProvider>
  </StrictMode>,
)
