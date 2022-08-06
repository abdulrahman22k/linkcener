// ** React Imports
import { Fragment, useState, useEffect } from 'react'

// ** Third Party Components
import Select, { components } from 'react-select'
import {useTranslation} from 'react-i18next'
import {
  ArrowLeft,
  ArrowRight,
  Plus,
  X,
  Twitter,
  Youtube,
  Facebook,
  Linkedin,
  Dribbble,
  Instagram,
  Mail,
  Link,
  GitHub,
  Gitlab
} from 'react-feather'

import {
  RiInstagramLine,
  RiWhatsappLine,
  RiFacebookCircleLine,
  RiSnapchatLine,
  RiTwitterLine,
  RiYoutubeLine,
  RiLinkedinLine,
  RiMailLine,
  RiLink,
  RiDribbbleFill
} from 'react-icons/ri'


// ** Custom Components
import Repeater from '@components/repeater'
import { SlideDown } from 'react-slidedown'

import axios from 'axios'

// ** Utils
import { selectThemeColors } from '@utils'

// ** Reactstrap Imports
import {
  Label,
  Row,
  Col,
  Form,
  Input,
  Button,
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  Card,
  CardBody
} from 'reactstrap'

// ** Styles
import '@styles/react/libs/react-select/_react-select.scss'
import { icons } from 'react-icons'
import { FaObjectUngroup } from 'react-icons/fa'

const iconOptions = [
  {
    label: 'Social Media',
    options: [
      {
        value: 'twitter',
        label: 'Twitter',
        icon:  Twitter
      },
      {
        value: 'facebook',
        label: 'Facebook',
        icon:  Facebook
      },
      {
        value: 'dribbble',
        label: 'Dribbble',
        icon:  Dribbble
      },
   
      {
        value: 'mail',
        label: 'Mail',
        icon:  Mail
      },
      {
        value: 'instagram',
        label: 'Instagram',
        icon:  Instagram
      },
      {
        value: 'linkedin',
        label: 'Linkedin',
        icon:  Linkedin
      },
      {
        value: 'youtube',
        label: 'Youtube',
        icon:  Youtube
      },
      {
        value:'link',
        label:'Link',
        icon: Link
      },
      { 
      value:'snapchat',
      label:'SnapChat',
      icon: RiSnapchatLine
      }

    ]
  }
]

const OptionComponent = ({ data, ...props }) => {
  const Icon = data.icon

  return (
    <components.Option {...props}>
      <Icon className='me-50' size={16} />
      {data.label}
    </components.Option>
  )
}
const convertToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader()
    fileReader.readAsDataURL(file)
    fileReader.onload = () => {
      resolve(fileReader.result)
    }
    fileReader.onerror = (error) => {
      reject(error)
    }
  })
}

const ProfileInfo = ({
  setLogoName,
  landingId,
  countIcons,
  setCountIcons,
  countLinks,
  setCountLinks,
  stepper,
  type,
  title,
  setTitle,
  bio,
  setBio,
  setIcons,
  setLinks,
  links,
  icons,
  setProfileImage,
  profileImage
}) => {
  const [open, setOpen] = useState('')
  const { t } = useTranslation()

/* start icons handling ******************************************************************/
const increaseCountIcons = () => {
  setIcons([...icons, {name:'', link:''}])
  console.log('increasCountIcons counticons', countIcons)

  setCountIcons(countIcons + 1)
  console.log('increasCountIcons counticons', countIcons)
}
const handleIconName = (iconNameValue, i) => {
    // eslint-disable-next-line multiline-ternary
    setIcons(
      icons.map((icon, index) => {
        return (
          // eslint-disable-next-line multiline-ternary
          i === index ? { ...icon, name:iconNameValue } : { ...icon }
        )
      })
    )
}
const handleLinkIcon = (link, i) => {
    // eslint-disable-next-line multiline-ternary
    setIcons(
      icons.map((icon, index) => {
        return (
          // eslint-disable-next-line multiline-ternary
          i === index ? { ...icon, link} : { ...icon }
        )
      })
    )
    console.log(icons)

}
const deleteIcon = (e, i) => {
    setIcons(
      icons.map((icon, index) => {
        return (
          // eslint-disable-next-line multiline-ternary
          i === index ? { ...icon, name:''} : { ...icon }
        )
      })
    )

    console.log('i', i, 'countIcon', countIcons)
    e.preventDefault()
    const slideDownWrapper = e.target.closest('.react-slidedown'),
      form = e.target.closest('form')
    if (slideDownWrapper) {
      slideDownWrapper.remove()
    } else {
      form.remove()
    }
}
/*end icons handling ******************************************************************/
/*************************************************************************************/

/* start buttons handling ****************************************************************/

const increaseCountLinks = () => {
  setCountLinks(countLinks + 1)
  setLinks([...links, {link:'', text:'', icon:'link'}])
}
const handleButtonLink = (buttonLink, i) => {
  // eslint-disable-next-line multiline-ternary
  setLinks(
    links.map((button, index) => {
      return (
        // eslint-disable-next-line multiline-ternary
        i === index ? { ...button, link:buttonLink } : { ...button }
      )
    })
  )
}
const handleButtonText = (buttonText, i) => {
  // eslint-disable-next-line multiline-ternary
  setLinks(
    links.map((button, index) => {
      return (
        // eslint-disable-next-line multiline-ternary
        i === index ? { ...button, text:buttonText } : { ...button }
      )
    })
  )
}
const handleButtonIcon = (buttonIcon, i) => {
  // eslint-disable-next-line multiline-ternary
  setLinks(
    links.map((link, index) => {
      return (
        // eslint-disable-next-line multiline-ternary
        i === index ? { ...link, icon:buttonIcon } : { ...link }
      )
    })
  )
}
const deleteLink = (e, i) => {
  setLinks(
    links.map((link, index) => {
      return (
        // eslint-disable-next-line multiline-ternary
        i === index ? {...link, icon:'', link:'', text:''} : { ...link }
      )
    })
  )
  // const iconsArr = [...icons]
  // iconsArr.splice(i, 1)
  // setIcons(iconsArr)
  e.preventDefault()
  const slideDownWrapper = e.target.closest('.react-slidedown'),
    form = e.target.closest('form')
  if (slideDownWrapper) {
    slideDownWrapper.remove()
  } else {
    form.remove()
  }
}
/* end buttons handling ******************************************************************/
/****************************************************************************************/
const handleProfileImage =  (event) => {
  event.preventDefault()
  const data = new FormData()
  data.append('myImage', event.target.files[0])
  const config = {
    headers: {
      'content-type': 'multipart/form-data'
    }
  }
  axios.post(`http://localhost:3000/api/v1/landingpages/uploadProfileImage/${landingId}`, data, config)
    .then(async (res) => {
      const base64 = await convertToBase64(event.target.files[0])
      setProfileImage(base64.substr(base64.indexOf(',') + 1, base64.length))
      setLogoName(`profile-${landingId}.jpg`)
    })
}

  const toggle = (id) => {
    open === id ? setOpen() : setOpen(id)
  }
  return (
    <Fragment>
      <div className='content-header'></div>

      <Form onSubmit={(e) => e.preventDefault()}>
        <Row>
          <Col sm={12}>
            <Accordion className='accordion-border' open={open} toggle={toggle}>
              <AccordionItem>
                <AccordionHeader targetId='1'>
                  {' '}
                  <strong>{t('Profile Information')}</strong>
                </AccordionHeader>
                <AccordionBody accordionId='1'>
                  <Label className='form-label' for={`title-${type}`}>
                    {t('Title')}
                  </Label>
                  <Input
                    onChange={(titleValue) => setTitle(titleValue.target.value)}
                    value={title}
                    type='text'
                    id={`title-${type}`}
                    name='title'
                    placeholder='Enter your Title'
                  />
                  <Label className='form-label mt-1' for={`inputImage-${type}`}>
                    {t('Profile Image')}
                  </Label>
                  <Input
                    multiple 
                    accept="image/*"
                    type='file'
                    id='myImage'
                    name='myImage'
                    placeholder='Enter your Profile image'
                    onChange={handleProfileImage}
                  />
                  <Label className='form-label mt-1' for={`bio-${type}`}>
                    {t('Bio')}
                  </Label>
                  <Input
                    onChange={(bioVal) => setBio(bioVal.target.value)}
                    bio={bio}
                    type='textarea'
                    id={`bio-${type}`}
                    name='title'
                    placeholder={`${t('Enter your Bio')}`}
                  />
                </AccordionBody>
              </AccordionItem>
            </Accordion>

            {/****************************************************************** icons ******************************************************************/}
            <Accordion
              className='accordion-border mt-1'
              open={open}
              toggle={toggle}
            >
              <AccordionItem>
                <AccordionHeader targetId='2'>
                  {' '}
                  <strong>{t('Icons')}</strong>
                </AccordionHeader>
                <AccordionBody accordionId='2'>
                  {/****************************************************************** icons Body ******************************************************************/}

                  <Card className='shadow-none border'>
                    <CardBody>
                      <Repeater count={countIcons}>
                        {(i) => {
                          const Tag = i === 0 ? 'div' : SlideDown
                          return (
                            <Tag key={i}>
                              <Form>
                                <Row className='justify-content-between align-items-center'>
                                  <Col lg={3} className='mb-md-0 mb-1'>
                                    <Label className='form-label'>{t('Icon')}</Label>
                                    <Select
                                      options={iconOptions}
                                      onChange={(e) => handleIconName(e.value, i)}
                                      className='react-select'
                                      classNamePrefix='select'
                                      components={{
                                        Option: OptionComponent
                                      }}
                                    />
                                  </Col>

                                  <Col md={7} className='mb-md-0 mb-1'>
                                    <Label
                                      className='form-label mt-1'
                                      for={`animation-quantity-${i}`}
                                    >
                                      {t('Link')}
                                    </Label>
                                    <Input
                                      onChange={(linkVal) => handleLinkIcon(linkVal.target.value, i)
                                      }
                                      type='link'
                                      id={`animation-quantity-${i}`}
                                      placeholder='Enter your link'
                                    />
                                  </Col>
                                  <Col md={2}>
                                    <Button
                                      color='danger'
                                      className='text-nowrap px-1 mt-2'
                                      onClick={(e) => deleteIcon(e, i)}
                                      outline
                                    >
                                      <X size={14} className='' />
                                    </Button>
                                  </Col>

                                  <Col sm={12}>
                                    <hr />
                                  </Col>
                                </Row>
                              </Form>
                            </Tag>
                          )
                        }}
                      </Repeater>
                      <Button
                        className='btn-icon'
                        color='primary'
                        onClick={increaseCountIcons}
                      >
                        <Plus size={14} />
                        <span className='align-middle ms-25'>{t('Add New Icon')}</span>
                      </Button>
                    </CardBody>
                  </Card>
                </AccordionBody>
              </AccordionItem>
            </Accordion>

            {/****************************************************************** links ******************************************************************/}

            <Accordion
              className='accordion-border mt-1'
              open={open}
              toggle={toggle}
            >
              <AccordionItem>
                <AccordionHeader targetId='3'>
                  {' '}
                  <strong>{t('links')}</strong>
                </AccordionHeader>
                <AccordionBody accordionId='3'>
                  {/****************************************************************** links Body ******************************************************************/}
                  <Card className='shadow-none border'>
                    <CardBody>
                      <Repeater count={countLinks}>
                        {(i) => {
                          const Tag = i === 0 ? 'div' : SlideDown
                          return (
                            <Tag key={i}>
                              <Form>
                                <Row className='justify-content-between align-items-center'>
                                  <Col lg={6} className='mb-md-0 mb-1'>
                                    <Label className='form-label'>{t('Icon')}</Label>
                                    <Select
                                      onChange={(e) => handleButtonIcon(e.value, i)}
                                      value=''
                                      options={iconOptions}
                                      className='react-select'
                                      classNamePrefix='select'
                                      components={{
                                        Option: OptionComponent
                                      }}
                                    />
                                  </Col>
                                  <Col lg={6} className='mb-md-0 mb-1'>
                                    <Label
                                      className='form-label'
                                      for={`animation-quantity-${i}`}
                                    >
                                      {t('Text')}
                                    </Label>
                                    <Input
                                      onChange={(e) => handleButtonText(e.target.value, i)}
                                      type='text'
                                      id={`animation-quantity-${i}`}
                                      value={links.length > 0 ? links[i].text : 'empt'}
                                      placeholder='Enter your Text'
                                    />
                                  </Col>
                                  <Col lg={6} className='mb-md-0 mb-1'>
                                    <Label
                                      className='form-label mt-1'
                                      for={`animation-quantity-${i}`}
                                    >
                                      {t('Link')}
                                    </Label>
                                    <Input
                                      onChange={(e) => handleButtonLink(e.target.value, i)}
                                      value={links.length > 0 ? links[i].link : 'empt'}

                                      type='link'
                                      id={`animation-quantity-${i}`}
                                      placeholder='Enter your link'
                                    />
                                  </Col>
                                  <Col lg={6}>
                                    <Label
                                      style={{display:'block'}}
                                      className='form-label mt-1 '
                                      for={`animation-quantity-${i}`}
                                    >
                                      {t('Delete the link')}
                                    </Label>
                                    <Button
                                      color='danger'
                                      className='text-nowrap'
                                      onClick={(e) => deleteLink(e, i)}
                                      outline
                                    >
                                      <X size={14} className='me-1' />
                                       {t('Delete')}
                                    </Button>
                                  </Col>
                                  <Col sm={12}>
                                    <hr />
                                  </Col>
                                </Row>
                              </Form>
                            </Tag>
                          )
                        }}
                      </Repeater>
                      <Button
                        className='btn-icon'
                        color='primary'
                        onClick={increaseCountLinks}
                      >
                        <Plus size={14} />
                        <span className='align-middle ms-25'>{t('Add New Link')}</span>
                      </Button>
                    </CardBody>
                  </Card>
                </AccordionBody>
              </AccordionItem>
            </Accordion>
          </Col>
        </Row>
        <div className='d-flex justify-content-between mt-1'>
          <Button
            color='primary'
            className='btn-prev'
            onClick={() => stepper.previous()}
          >
            <ArrowLeft
              size={14}
              className='align-middle me-sm-25 me-0'
            ></ArrowLeft>
            <span className='align-middle d-sm-inline-block d-none'>
              {t('Previous')}
            </span>
          </Button>
          <Button
            color='primary'
            className='btn-next'
            onClick={() => stepper.next()}
          >
            <span className='align-middle d-sm-inline-block d-none'>{t('Next')}</span>
            <ArrowRight
              size={14}
              className='align-middle ms-sm-25 ms-0'
            ></ArrowRight>
          </Button>
        </div>
      </Form>
    </Fragment>
  )
}

export default ProfileInfo
