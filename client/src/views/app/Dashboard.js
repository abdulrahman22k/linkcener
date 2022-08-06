import { 
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
  Col,
  Container, 
  Row, 
  Button, 
  Modal,
  ModalHeader, 
  ModalBody, 
  ModalFooter, 
  Input,
  Alert
} from 'reactstrap'
import axios from 'axios'

import { useTranslation } from 'react-i18next'


import {PlusCircle, Hash, Edit3, X, Delete} from 'react-feather'
import { ThemeColors } from '@src/utility/context/ThemeColors'
import React, { useContext, useState, useEffect  } from 'react'
import {useNavigate} from 'react-router-dom'

const user = JSON.parse(localStorage.getItem("userData"))

const createPageEndpoint = 'http://localhost:3000/api/v1/landingpages/'
const getLandingsEndpoint = 'http://localhost:3000/api/v1/landingpages/'
const getLandingsUserEndpoint = 'http://localhost:3000/api/v1/landingpages/getLandingsUser'
const deleteLandingsEndpoint = 'http://localhost:3000/api/v1/landingpages/'


const Dashboard = () => {
  const navigate = useNavigate()
  const { colors } = useContext(ThemeColors)
  const [disabledModal, setDisabledModal] = useState(false)
  const [alias, setAlias] = useState('')
  const [aliasError, setAliasError] = useState(false)
  const [links, setLinks] = useState({})
  const { t } = useTranslation()

  const url = 'LinksCenter.link/'

  useEffect(() => {
    axios.get(`${getLandingsUserEndpoint}/${user._id}`)
    .then(e => {
      setLinks(e.data.data.landing.reverse())
    })
    .catch(e => {
    })
  }, [])
  const handleEditPage = (url) => {
    navigate(url)
  }
  const handleDeleteLink = (id) => {
    axios.delete(`${deleteLandingsEndpoint}${id}/${user._id}`).then(() => {
      setLinks(links.filter(link => { return link._id !== id }))
    })
  }

  const renderLinks = () => {
    if (links.length > 0) return links.map((link, index) => <Card key= {index}>
      <CardHeader>Home</CardHeader>
      <CardBody className="d-sm-flex d-inline justify-content-between">
        <CardText>
        <Hash color={colors.success.main} size={30} className='me-1'/>
        <a href={`http://localhost:3001/${link.url}`} target="_blank" > www.linksCenter/
        {link.url}</a>
        </CardText>
        <div className="">
          <Button.Ripple className='rounded-circle btn-icon' color='danger' onClick={() => handleDeleteLink(link._id)}>   
            <X  size={16}/>
          </Button.Ripple>
            <Button.Ripple onClick={() => handleEditPage(link.url)} className=' rounded-circle btn-icon' style={{marginLeft:'3px', marginRight:'3px'}} color='success'>   
              <Edit3 size={16}/>
            </Button.Ripple>
        </div>
      </CardBody>
    </Card>
  )
  }


  const handleCreateLink = (e) => {
    e.preventDefault()
    setAliasError(false)

     axios.post(`${createPageEndpoint  }${ user._id }`, 
        {
          url:alias
        }
    )
    .then(e => {

      setDisabledModal(!disabledModal)
      console.log('then', e)
      setLinks([e.data.data, ...links])
      setAlias('')
    })
    .catch(e => {
      setAliasError(true)
      console.log('erro', e)

    })
  }
  
  return (
      <div className='container-md mt-5 pt-2 dashboardContainer' >
        <Row className="d-flex justify-content-between ">
          <Col className=""><h2 className="">{t('Links')}</h2></Col>
          <Col  className="text-end">
          <div className='disabled-backdrop-modal'>
          <React.Fragment>
          <Button color="primary"   onClick={() => setDisabledModal(!disabledModal)} ><PlusCircle className="d-none d-sm-inline me-1"/>{t('Create Link')}</Button>
           <Modal
            isOpen={disabledModal}
            toggle={() => setDisabledModal(!disabledModal)}
            className='modal-dialog-centered'
            backdrop={false}
          >
            <ModalHeader toggle={() => setDisabledModal(!disabledModal)}>{t('Create New Page')}</ModalHeader>
            <ModalBody className='text-center py-3 px-1'>
             {aliasError && <Alert color='danger'>
                <div className='alert-body'>
                <X />
                  Alias taken try another one
                </div>
                </Alert> }
              <Input  className="d-inline text-center" style={{width:'auto'}} disabled value ={url}/> 
              <Input 
                className="d-inline" 
                style={{width:'auto'}} 
                type="text" 
                placeholder='your alias'
                value={alias}
                onChange={(e) => setAlias(e.target.value)}
                /> 
            </ModalBody>
            <ModalFooter>
              {/* <Button color='primary' onClick={() => setDisabledModal(!disabledModal)}> */}
              <Button color='primary' onClick={handleCreateLink}>
                {t('Create')}
              </Button>
            </ModalFooter>
          </Modal>
          </React.Fragment>
          </div> 
          </Col>
        </Row>
        <hr className="border border-bottom "/>
        {renderLinks()}

      </div>
  )
}
export default Dashboard