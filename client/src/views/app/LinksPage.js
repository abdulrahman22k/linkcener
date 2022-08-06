/* eslint-disable quote-props */
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
  Col,
  Container,
  Row,
  Button
} from 'reactstrap'
import axios from 'axios'
import {
  PlusCircle,
  Hash,
  Edit3,
  X,
  ArrowLeft,
  Feather,
  Snapchat,
  Facebook,
  Twitter,
  Instagram
} from 'react-feather'
import {
  FaFacebookF,
  FaFacebookSquare,
  FaFacebook,
  FaInstagram
} from 'react-icons/fa'
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

import { useContext, useState, Fragment, Link, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet'

const iconsName = {
  'facebook': RiFacebookCircleLine,
  'instagram': RiInstagramLine,
  'twitter': RiTwitterLine,
  'snapchat': RiSnapchatLine,
  'whatsapp': RiWhatsappLine,
  'youtube': RiYoutubeLine,
  'linkedin' :RiLinkedinLine,
  'mail':RiMailLine,
  'link':RiLink,
  'dribbble':RiDribbbleFill
}
const getLandingPage = 'http://127.0.0.1:3000/api/v1/landingpages/'
const getImage = 'http://127.0.0.1:3000/api/v1/landingpages/getimage/'

const LinksPage = () => {
  const { url } = useParams()
  const [pageInfo, setPageInfo] = useState({ 
    "background": "#1d7dd2",
    "bio": "Lorem, ipsum dolor sit amet consectetur adipisicing dicta obcaecati deserunt eaque?",
    "font": "Roboto",
    "color": "#222222",
    "title": "linksCenter",
    "textColor": "#fff",
    "logo": [],
    "buttonIconColor":'#1d7dd2',
    "buttonBorderRadius":'8',
    "buttonBackgroundColor":'#fff',
    "buttonTextColor":'#222',
    "button": [],
    "photo": [],
    "icon": []
  })
  const [profileImage, setProfileImage] = useState('empty.jpg')
    useEffect(() => {
      axios.get(`${getLandingPage}${url}`)
      .then(e => {
        setPageInfo(e.data.data)
        axios.get(`${getImage}profile-${e.data.data._id}.jpg`, {
          responseType: 'arraybuffer'
        })
        .then(e => {
          const img = new Buffer.from(e.data).toString("base64")
          setProfileImage(img)
        })
      }).catch(e => setPageInfo({}))

    }, [])
  const renderIcons = (icon) => {
    if (icon.length > 0) return icon.map((ic, i) => {
      if (ic.name !== '') {
        const IconTag = iconsName[ic.name]
        return (
          <a key={i} href={ic.link} target='_blank'>
            <IconTag size='35' style={{ margin: '0 9px 0 9px' }} color={pageInfo.iconColor} />
          </a>
        )
      }
      })
  }
  const renderLinks = () => {
    let IconButton = ''
    if (pageInfo.button.length > 0) return pageInfo.button.map((b, i) => {
      if (b.icon !== '' || b.text !== '' || b.link !== '') {
        if (b.icon !== '') {
         IconButton = iconsName[b.icon]
        }
      return (
        <a
          key={i}
          className='me-1 mb-1 btn'
          href={b.link}
          target='_blank'
          rel='noopener noreferrer'
          style={{
            backgroundColor:pageInfo.buttonBackgroundColor,
            borderRadius:pageInfo.buttonBorderRadius,
            boxShadow:`0 ${pageInfo.buttonShadowSize ? '5px' : '0' } ${pageInfo.buttonShadowSize}px ${pageInfo.buttonShadowColor}`
          }}
        >
          <Row>
          { b.icon !== '' ? <Col xs='1'>
              <IconButton
                style={{ transform: 'translateY(-2px)' }}
                size={35}
                color={pageInfo.buttonIconColor}
              />
            </Col> : null
          }
           
            <Col xs='10'>
              <h2 style={{color:pageInfo.buttonTextColor}}> {b.text} </h2>
            </Col>
          </Row>
        </a>
      )
    }
    } 
    )
    else return null
  }
  

  return (
    <div className='text-center p-4' style={{margin: '70px'}}>
      <Helmet
        bodyAttributes={{
          style: `background: linear-gradient(9deg, ${pageInfo.background} 0%, ${pageInfo.background} 100%`
        }}
      />
      <Row>
        <Col>
        { (profileImage !== 'empty') ? <img
          src={`data:image/jpeg;base64,${profileImage}`}
          className='mb-3'
          size='xl'
          style={{transform: 'scale(1.8)',
          backgroundColor:pageInfo.background,
          maxWidth: '75px',
          maxHeight: '75px'
          }}
          /> : <img
          className='mb-1'
          size='xl'
          style={{transform: 'scale(1.2)'}}
        /> }
          <h1 style={{ color: `${pageInfo.textColor}`, textAlign: 'center' }}>
            {pageInfo.title}
          </h1>
          <p
            className=''
            style={{
              color: `${pageInfo.textColor}`,
              textAlign: 'center',
              maxWidth: '600px',
              margin: '0 auto'
            }}
          >
            {pageInfo.bio}
          </p>
        </Col>
      </Row>
      {/* Icons -------------------------------------------------------------------------------------------------------------------- */}
      <Row className='mt-1 mb-2'>
        <div>{renderIcons(pageInfo.icon)}</div>
      </Row>
      {/* links -------------------------------------------------------------------------------------------------------------------- */}
      <Row className='py-1' style={{ maxWidth: '650px', margin: '0 auto' }}>
        {renderLinks()}
      </Row>
    </div>
  )
}
export default LinksPage
