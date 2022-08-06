// ** React Imports
import { lazy } from 'react'


const Register = lazy(() => import('../../views/authentication/Register'))
const Home = lazy(() => import('../../views/Home'))
const Dashboard = lazy(() => import('../../views/app/Dashboard'))
const Design = lazy(() => import('../../views/app/Design'))
const Test = lazy(() => import('../../views/app/Test'))
const LinksPage = lazy(() => import('../../views/app/LinksPage'))
const AppRoutes = [ 

  {
    path:'/test',
    element: <Test/>
  },
{
    path: '/dashboard/:url',
    element: <Design />,
    meta:
    {
      publicRoute:true
    }
   
},
{
    path: '/dashboard',
    element: <Dashboard />
   
  },
  {
    path:'/home',
    element: <Home />,
    meta:{
      publicRoute: true,
      layout:'blank'

    }
  },
  {
    path:':url',
    element: <LinksPage/>,
    meta:{
      publicRoute:true,
      layout:'blank'
    }
  }
]

export default AppRoutes
