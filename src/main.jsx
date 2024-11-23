import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import {AuthLayout, Login} from './components'
import {Users, Dashboard, MyProfile, RoleManagement} from './pages'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: (
          <AuthLayout authentication={true}>
              <Users />
          </AuthLayout>
        ),
      },
      {
        path: '/user-profile',
        element: (
          <AuthLayout authentication={true}>
              <MyProfile />
          </AuthLayout>
        ),
      },
      {
        path: '/role-management',
        element: (
          <AuthLayout authentication={true}>
              <RoleManagement />
          </AuthLayout>
        ),
      },
    ]
  },
  {
    path: "/login",
    element: (
      <AuthLayout authentication={false}>
          <Login />
      </AuthLayout>
    ),
  }
])

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  // </StrictMode>,
)
