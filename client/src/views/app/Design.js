import { Card, CardHeader, CardBody, CardTitle, CardText, Col, Container, Row, Button} from 'reactstrap'
import {PlusCircle, Hash, Edit3, X} from 'react-feather'
import { ThemeColors } from '@src/utility/context/ThemeColors'
import { useContext, useState, useEffect } from 'react'
import DesignForm from './designPage/DesignForm'
import ReactDevicePreview from 'react-device-preview'
import MobileView from './designPage/MobileView'
import { StickyContainer, Sticky } from 'react-sticky'
import { useParams } from 'react-router-dom'
import axios from 'axios'
const getLandingPage = 'http://127.0.0.1:3000/api/v1/landingpages/'
const getImage = 'http://127.0.0.1:3000/api/v1/landingpages/getimage/'

const Design = () => {
  const { url } = useParams()
  const [backgroundColor, setBackgroundColor] = useState('#1d7dd2')
  const [bio, setBio] = useState('Lorem, ipsum dolor sit amet consectetur adipisicing dicta obcaecati deserunt eaque?')
  const [title, setTitle] = useState('LinksCenter')
  const [icons, setIcons] = useState([])
  const [links, setLinks] = useState([])
  const [buttonsBackgroundColor, setButtonsBackgroundColor] = useState('#fff')
  const [buttonsBorderRadius, setButtonsBorderRadius] = useState(8)
  const [buttonsTextColor, setButtonsTextColor] = useState('#222')
  const [buttonsBorderColor, setButtonsBorderColor] = useState('#fff')
  const [buttonsShadowSize, setButtonsShadowSize] = useState(0)
  const [buttonsShadowColor, setButtonsShadowColor] = useState('#222')
  const [iconColor, setIconColor] = useState('#fff')
  const [buttonsIconsColor, setButtonsIconsColor] = useState('#fff')
  const [textColor, setTextColor] = useState('#fff')
  const [profileImage, setProfileImage] = useState('empty.jpg')
  const [logoName, setLogoName] = useState('')
  const [countIcons, setCountIcons] = useState(0)
  const [countLinks, setCountLinks] = useState(0)
  const [landingId, setLandingId] = useState('')

  useEffect(async () => {
  await axios.get(`${getLandingPage}${url}`)
    .then(e => {
      const pageInfo = e.data.data
      setLandingId(pageInfo._id)
      setBackgroundColor(pageInfo.background)
      setTitle(pageInfo.title)
      setBio(pageInfo.bio)
      setIcons(pageInfo.icon)
      setLinks(pageInfo.button)
      setTextColor(pageInfo.textColor)
      setButtonsShadowSize(pageInfo.buttonShadowSize)
      setButtonsShadowColor(pageInfo.buttonShadowColor)
      setButtonsIconsColor(pageInfo.buttonIconColor)
      setButtonsBorderRadius(pageInfo.buttonBorderRadius)
      setButtonsBackgroundColor(pageInfo.buttonBackgroundColor)
      setButtonsTextColor(pageInfo.buttonTextColor)
      setLogoName(pageInfo.logo)
      setIconColor(pageInfo.iconColor)
      setCountIcons(pageInfo.icon.length)
      setCountLinks(pageInfo.button.length)

      axios.get(`${getImage}profile-${pageInfo._id}.jpg`, {
        responseType: 'arraybuffer'
      })
      .then(e => {
        const img = new Buffer.from(e.data).toString("base64")
        setProfileImage(img)
      })
     
    })

  }, [])
  return (
    <div >
      <Row>
        <Col lg={7}>
           <DesignForm
            logoName={logoName}
            setLogoName={setLogoName}
            landingId = {landingId}
            setBackgroundColor={setBackgroundColor}
            backgroundColor={backgroundColor}
            setCountIcons={setCountIcons}
            setCountLinks={setCountLinks}
            countLinks ={countLinks}
            countIcons ={countIcons}
            setTitle={setTitle}
            title={title}
            setBio={setBio}
            bio={bio}
            icons={icons}
            links={links}
            setIcons={setIcons}
            setLinks={setLinks}
            setButtonsBackgroundColor={setButtonsBackgroundColor}
            buttonsBackgroundColor={buttonsBackgroundColor}
            setButtonsBorderRadius={setButtonsBorderRadius}
            buttonsBorderRadius={buttonsBorderRadius}
            setButtonsTextColor={setButtonsTextColor}
            buttonsTextColor={buttonsTextColor}
            setButtonsBorderColor={setButtonsBorderColor}
            buttonsBorderColor={buttonsBorderColor}
            iconColor={iconColor}
            setIconColor={setIconColor}
            buttonsShadowColor={buttonsShadowColor}
            setButtonsShadowColor={setButtonsShadowColor}
            buttonsShadowSize={buttonsShadowSize}
            setButtonsShadowSize={setButtonsShadowSize}
            textColor={textColor}
            setTextColor={setTextColor}
            buttonsIconsColor={buttonsIconsColor}
            setButtonsIconsColor={setButtonsIconsColor}
            profileImage={profileImage}
            setProfileImage={setProfileImage}
            />
          </Col>
           
            <Col
             lg={5} 
            style={{height: '100%'}}>
              <MobileView
                style={{top:'0px', position: 'sticky'}}
                buttonsBackgroundColor={buttonsBackgroundColor}
                buttonsBorderRadius={buttonsBorderRadius}
                bio={bio}
                title={title}
                backgroundColor={backgroundColor}
                links={links}
                icons={icons}
                buttonsBorderColor={buttonsBorderColor}
                buttonsTextColor={buttonsTextColor}
                iconColor={iconColor}
                buttonsIconsColor={buttonsIconsColor}
                buttonsShadowColor={buttonsShadowColor}
                buttonsShadowSize={buttonsShadowSize}
                textColor={textColor}
                profileImage={profileImage}
              />
            </Col>
        </Row>
    </div>
  )
}
export default Design