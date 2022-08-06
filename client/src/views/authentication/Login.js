import { useState } from 'react'

// ** React Imports
import { Link, useNavigate } from 'react-router-dom'

// ** Icons Imports
import { Facebook, Twitter, Mail, X} from 'react-feather'

// ** JWT service
import useJwt from '@src/auth/jwt/useJwt'

// ** Custom Components
import InputPasswordToggle from '@components/input-password-toggle'

// ** Reactstrap Imports
import { Card, CardBody, CardTitle, CardText, Form, Label, Input, Button, Alert } from 'reactstrap'

// ** Styles
import '@styles/react/pages/page-authentication.scss'
import axios from 'axios'

const loginEndPoint = 'http://127.0.0.1:3000/api/v1/users/login'

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async(e) => {
    e.preventDefault()
    try {
    await axios.post(loginEndPoint, {
    email,
    password
  }).then((e) => {
      console.log('login ', e)
    setEmailError(false)
      if (e.data.token) {
        localStorage.setItem("userData", JSON.stringify(e.data.data.user))
      }
    navigate('/')
    window.location.reload(false)

  }).catch(e => {
    console.log('login ', e)
    setEmailError(true)
  })
} catch (e) {
  setEmailError(true)
}
 
  }

  return (
    <div className='auth-wrapper auth-basic px-2'>
      <div className='auth-inner my-2'>
        <Card className='mb-0'>
          <CardBody>
            <Link className='brand-logo' to='/' onClick={e => e.preventDefault()}>
              <h2 className='brand-text text-primary ms-1'>LinksCenter</h2>
            </Link>
            <CardTitle tag='h4' className='mb-1'>
              Welcome to linksCenter! 👋
            </CardTitle>
            <CardText className='mb-2'>Please login to your account and start the adventure</CardText>
            { emailError && <Alert color='danger'>
                  <div className='alert-body'>
                  <X />
                    Incorrect email or password
                  </div>
              </Alert> }
            <Form className='auth-login-form mt-2' onSubmit={handleSubmit}>
         
              <div className='mb-1'>
                <Label className='form-label' for='login-email'>
                  Email
                </Label>
                <Input type='email' id='login-email' placeholder='john@example.com' value={email} onChange={(e) => setEmail(e.target.value)} autoFocus />
              </div>
              <div className='mb-1'>
                <div className='d-flex justify-content-between'>
                  <Label className='form-label' for='login-password'>
                    Password
                  </Label>
                  {/* <Link to='/pages/forgot-password-basic'>
                    <small>Forgot Password?</small>
                  </Link> */}
                </div>
                <InputPasswordToggle className='input-group-merge' value={password} onChange={(e) => setPassword(e.target.value)} id='login-password' />
              </div>
              <div className='form-check mb-1'>
                <Input type='checkbox' id='remember-me' />
                <Label className='form-check-label' for='remember-me'>
                  Remember Me
                </Label>
              </div>
              <Button color='primary' block>
                Login 
              </Button>
            </Form>
            <p className='text-center mt-2'>
              <span className='me-25'>New on our platform?</span>
              <Link to='/register'>
                <span>Create an account</span>
              </Link>
            </p>
            {/* <div className='divider my-2'>
              <div className='divider-text'>or</div>
            </div>
            <div className='auth-footer-btn d-flex justify-content-center'>
              <Button color='facebook'>
                <Facebook size={14} />
              </Button>
              <Button color='twitter'>
                <Twitter size={14} />
              </Button>
              <Button color='google'>
                <Mail size={14} />
              </Button>
            </div> */}
          </CardBody>
        </Card>
      </div>
    </div>
  )
}

export default Login
