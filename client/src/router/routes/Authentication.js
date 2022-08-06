// ** React Imports
import { lazy } from 'react'


const Register = lazy(() => import('../../views/authentication/Register'))
const Login = lazy(() => import('../../views/authentication/Login'))


const AuthenticationRoutes = [

  {
    path: '/register',
    element: <Register />,
    meta: {
      publicRoute: true,
      layout:'blank',
      restricted: true
    }
  },
  {
    path: '/login',
    element: <Login />,
    meta:{
      publicRoute: true,
      restricted: true,
      layout:'blank'
    }
  }

]

export default AuthenticationRoutes
