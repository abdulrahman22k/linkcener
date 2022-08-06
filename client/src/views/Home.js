import { useState, useContext, Fragment } from 'react'
import Avatar from '@components/avatar'
import { useSkin } from '@hooks/useSkin'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Row,
  Col,
  Container,
  Button,
  CardTitle
} from 'reactstrap'
import { AbilityContext } from '@src/utility/context/Can'
import { Link, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import {
  Facebook,
  Twitter,
  Mail,
  Coffee
} from 'react-feather'

//import '@styles/base/pages/page-auth.scss'

const ToastContent = ({ name, role }) => (
  <Fragment>
    <div className='toastify-header'>
      <div className='title-wrapper'>
        <Avatar size='sm' color='success' icon={<Coffee size={12} />} />
        <h6 className='toast-title font-weight-bold'>Welcome, {name}</h6>
      </div>
    </div>
    <div className='toastify-body'>
      <span>
        You have successfully logged in as an {role} user to STORE FRIENDS. Now
        you can start to explore. Enjoy!
      </span>
    </div>
  </Fragment>
)

const Home = (props) => {
  //const [skin, setSkin] = useSkin()
  const ability = useContext(AbilityContext)
  const history = useNavigate()
  const [email, setEmail] = useState('admin@storefriends.com')
  const [password, setPassword] = useState('admin')
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useTranslation()

  const toggle = () => setIsOpen(!isOpen)
  const x = 'ph26.png'
 // const illustration = skin === 'dark' ? 'login-v2-dark.svg' : 'login-v2.svg',
  const  source = require(`@src/assets/images/${x}`).default

  const handleLogin = () => {
    history.push('/login')
  }
  const handleSubmit = (event, errors) => {
    if (errors && !errors.length) {
      useJwt
        .login({ email, password })
        .then((res) => {
          const data = {
            ...res.data.data.user,
            accessToken: res.data.accessToken,
            refreshToken: res.data.refreshToken
          }
          dispatch(handleLogin(data))
          ability.update(res.data.data.user.ability)
          //history.push(getHomeRouteForLoggedInUser(data.role))
          history.push(`/store/${res.data.data.user.storename}`)
          toast.success(
            <ToastContent
              name={data.fullName || data.username || 'John Doe'}
              role={data.role || 'admin'}
            />,
            { transition: Slide, hideProgressBar: true, autoClose: 2000 }
          )
        })
        .catch((err) => console.log(err))
    }
  }

  return (
    <div>
     {/* navbar ***************************************************/}
      <Row className='m-3 mb-md-0 justify-content-between'>
      <><Col>
          <Link
            className='brand-logo'
            to='/'
            onClick={(e) => e.preventDefault()}
          >
            <h2 className='brand-text text-primary ml-1'>linksCenter</h2>
          </Link>
        </Col><Col className='text-end'>
            <Button  color='gradient-primary' size='lg'  onClick={() => history('/register')}
            >
              {t('Login')}
            </Button>
          </Col></>
    </Row>
        {/* Hero ***************************************************/}
    <div className='container-md'>
      <Row className='align-items-center'>
          <Col lg={6} md={12} className=' text-center text-lg-start mt-5 mt-md-0 pt-5 pt-lg-0'    >
            <Col
              lg='12'
            >
              <CardTitle
                tag='h1'
                className='text-primary display-2 fw-bolder'
              >
               {t('Your links all in one place linksCenter.')}
              </CardTitle>
              <h4 className='text-dark  h-2'>{t('Make it easier to communicate with you ,start monetizing today.')}
              </h4>
              <row className='d-flex align-items-center justify-content-center justify-content-lg-start  mt-3'>
                <Button
                  onClick={() => history('/register')}
                  color='gradient-warning'
                  className='btn-warning  btn-lg px-3 py-2'
                >
                  {t("Get started")} 
                </Button>
            
              </row>
            </Col>
          </Col>
         <Col
            className='d-none d-lg-flex '
            lg={6}
            md={12}
          >
              <img className='mt-5'  src={source}
                style={{
                  maxHeight: '75vh',
                  maxWdith: '75vh'

                  }} 
                  alt='welcome' />
          </Col>
      </Row>
    </div>
    </div>

  )
}

export default Home
