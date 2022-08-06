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
import ReactDevicePreview from 'react-device-preview'
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


const iconsName = {
  facebook: RiFacebookCircleLine,
  instagram: RiInstagramLine,
  twitter: RiTwitterLine,
  snapchat: RiSnapchatLine,
  whatsapp: RiWhatsappLine,
  youtube: RiYoutubeLine,
  linkedin :RiLinkedinLine,
  mail:RiMailLine,
  link:RiLink,
  dribbble:RiDribbbleFill
}

const MobileView = ({ 
  profileImage,
  title,
  backgroundColor,
  bio,
  icons,
  links,
  buttonsBackgroundColor,
  buttonsBorderRadius,
  buttonsBorderColor,
  buttonsTextColor,
  iconColor,
  buttonsShadowColor,
  buttonsShadowSize,
  buttonsIconsColor,
  textColor

}) => {

  const renderIcons = () => {
    if (icons.length > 0) return icons.map((ic, i) => {
      
      if (ic.name !== '') {
        const IconTag = iconsName[ic.name]
        return (
          <a key={i} href={ic.link} target='_blank'>
            <IconTag size='35' style={{ margin: '0 9px 0 9px' }} color={iconColor}/>
          </a>
        ) 
      } else return null
    })
    else return null
  }

  const renderLinks = () => {
    let IconButton = ''
    if (links.length > 0) return links.map((b, i) => {
      if (b.icon !== '' || b.text !== '' || b.link !== '') {
        if (b.icon !== '') {
          IconButton = iconsName[b.icon]
       }
       return (
           <a
           key={i} 
           className='me-1 mb-1 btn btn-light'
           href={b.link}
           target='_blank'
           rel='noopener noreferrer'
           style={{
             borderRadius:`${buttonsBorderRadius}px`,
             backgroundColor:buttonsBackgroundColor,
             borderColor:buttonsBorderColor,
             boxShadow:`0 ${buttonsShadowSize ? '5px' : '0' } ${buttonsShadowSize}px ${buttonsShadowColor}`
           }}
           >
           <Row>
           {b.icon !== '' ?  <Col xs='1'>
               <IconButton
                 style={{ transform: 'translateY(-2px)' }}
                 size={35}
                 color={buttonsIconsColor}
                 className=''
               />
             </Col>  : null 
             } 
             <Col >
               <h2 style={{color:buttonsTextColor}}> {b.text} </h2>
             </Col>
           </Row>
         </a>
     
       )
      }
    })
    else return null
  }

  return (
    <div className='sticky-top ' style={{overflow:'hidden'}}  >
      <Card className='shadow-none' style={{ height: '75vh', overflow:'hidden' }}>
        <div
          style={{
            position: 'sticky',
            top: '0 px',
            paddingTop: '13vh',
            display: 'flex',
            justifyContent: 'center',
            transformOrigin: 'center top',
            transform: 'scale(0.56)'
          }}
        >
          <ReactDevicePreview className='sticky-top shadow-lg' device='iphonex'>
            <div
              style={{
                transform:'scale(1.1)',
                padding: '9em  4em 0 4em ',
                width: '100%',
                height: '100%',
                background: `linear-gradient(0deg, rgba(2,0,36,.5) 0%,  ${backgroundColor} 0%`
              }}
            >
              <Row className="text-center ">
                <Col>
                {profileImage !== 'empty.jpg' ?   <img
                    src={`data:image/jpeg;base64,${profileImage}`}
                    className='mb-3'
                    style={{transform: 'scale(1.6)',
                    backgroundColor,
                    maxWidth: '75px',
                    maxHeight: '75px'
                    }}
                  /> :   <img
                    className='mb-3'
                    size='xl'
                    style={{transform: 'scale(1.6)'}}
                  />}
                  <h1
                    style={{
                      color: `${textColor}`,
                      textAlign: 'center'
                    }}
                  >
                    {title}
                  </h1>
                  <p
                    className=''
                    style={{
                      color: `${textColor}`,
                      textAlign: 'center',
                      maxWidth: '600px',
                      margin: '0 auto'
                    }}
                  >
                    {bio}
                  </p>
                </Col>
              </Row>
              {/* Icons -------------------------------------------------------------------------------------------------------------------- */}
              <Row className='text-center mt-1 mb-2'>
                <div>{renderIcons()}</div>
              </Row>
              {/* links -------------------------------------------------------------------------------------------------------------------- */}
              <Row
                className='py-1'
                style={{ maxWidth: '650px', margin: '0 auto' }}
              >
                {renderLinks()}
              </Row>
            </div>
          </ReactDevicePreview>
        </div>
      </Card>
    </div>
  )
}
export default MobileView
