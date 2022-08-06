// ** Router imports
import { lazy } from 'react'

// ** Router imports
import { useRoutes, Navigate } from 'react-router-dom'

// ** Layouts
import BlankLayout from '@layouts/BlankLayout'
import VerticalLayout from '@layouts/VerticalLayout'

// ** Utils
import { getUserData, getHomeRouteForLoggedInUser } from '../utility/Utils'
import { Nav } from 'reactstrap'

// ** Components
const Error = lazy(() => import('../views/Error'))
const NotAuthorized = lazy(() => import('../views/NotAuthorized'))
const Home = lazy(() => import('../views/Home'))

const Router = ({ allRoutes }) => {
  const getHomeRoute = () => {
    const user = getUserData()
    if (user) {
      console.log('user:', user)
      return getHomeRouteForLoggedInUser(user.role)
    } else {  
      return '/home'
    }
  }

  const routes = useRoutes([
    {
      path: '/',
      index: true,
      element: <Navigate replace to={getHomeRoute()} />

    },
  

    {
      path: '/auth/not-auth',
      element: <BlankLayout />,
      children: [{ path: '/auth/not-auth', element: <NotAuthorized /> }]
    },
    {
      path: '*',
      
      element: <BlankLayout />,
      children: [{ path: '*', element: <Error /> }]
    },
    ...allRoutes
  ])

  return routes
}

export default Router
