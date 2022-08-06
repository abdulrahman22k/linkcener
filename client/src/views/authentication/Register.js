//**React hooks
import { useState } from 'react'
//import axios from 'axios'


// ** JWT service
 import useJwt from '@src/auth/jwt/useJwt'

// ** React Imports
import { Link, useNavigate  } from 'react-router-dom'

// ** Icons Imports
import { Facebook, Twitter, Mail, GitHub, X } from 'react-feather'

// ** Custom Components
import InputPasswordToggle from '@components/input-password-toggle'

// ** Reactstrap Imports
import { Card, CardBody, CardTitle, CardText, Form, Label, Input, Button, Alert } from 'reactstrap'

// ** Styles
import '@styles/react/pages/page-authentication.scss'


const Register = () => {
  
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [emailUsed, setEmailUsed] = useState(false)
  const navigate = useNavigate()

  const handleSubmitTwo = (e) => {
    e.preventDefault()

    useJwt.register({
      name:username,
      email,
      password,
      passwordConfirm:password
    }).then((e) => {
      setEmailUsed(false)
      localStorage.clear()
      localStorage.setItem("userData", JSON.stringify(e.data.data.user))
      navigate('/')
      window.location.reload(false)
    }
    ).catch(e => {

      setEmailUsed(true)
    })
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
              Adventure starts here 🚀
            </CardTitle>
            { emailUsed && <Alert color='danger'>
                  <div className='alert-body'>
                  <X />
                    Email used
                  </div>
              </Alert> }
            <Form className='auth-register-form mt-2' onSubmit={handleSubmitTwo}>
              <div className='mb-1'>
                <Label className='form-label' for='register-username'>
                  Username
                </Label>
                <Input type='text' id='register-username' placeholder='johndoe' autoFocus value={username} onChange={(e) => setUsername(e.target.value)}/>
              </div>
              <div className='mb-1'>
                <Label className='form-label' for='register-email'>
                  Email
                </Label>
                <Input type='email' id='register-email' placeholder='john@example.com' value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className='mb-1'>
                <Label className='form-label' for='register-password'>
                  Password
                </Label>                
                <InputPasswordToggle className='input-group-merge' id='register-password' value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
              {/* <div className='form-check mb-1'>
                <Input type='checkbox' id='terms' />
                <Label className='form-check-label' for='terms'>
                  I agree to
                  <a className='ms-25' href='/' onClick={e => e.preventDefault()}>
                    privacy policy & terms
                  </a>
                </Label>
              </div> */}
              <Button color='primary' type='submit'  >
                Sign up
              </Button>
            </Form>
            <p className='text-center mt-2'>
              <span className='me-25'>Already have an account?</span>
              <Link to='/login'>
                <span>Login in instead</span>
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
              <Button className='me-0' color='github'>
                <GitHub size={14} />
              </Button>
            </div> */}
          </CardBody>
        </Card>
      </div>
    </div>
  )
}

export default Register
