// ** React Imports
import { Fragment } from 'react'

import axios from 'axios'

//** Color pick color */
import { ChromePicker } from 'react-color'

// * Arabic Lang
import { useTranslation } from 'react-i18next'

// ** Icons Imports
import { ArrowLeft, Feather, Facebook } from 'react-feather'
import { FaFacebookF, FaFacebookSquare, FaFacebook  } from "react-icons/fa"

// ** Reactstrap Imports
import {
  Label, 
  Row,
  Col,
  Form,
  Input,
  Button,
  UncontrolledPopover,
  PopoverHeader,
  PopoverBody,
  InputGroup,
  InputGroupText,
  Card,
  CardBody,
  CardText
} from 'reactstrap'

const updateLandingPage = 'http://localhost:3000/api/v1/landingpages/'

const DesignInfo = ({
  logoName,
  profileImage,
  stepper,
  landingId,
  icons,
  links,
  bio,
  title,
  buttonsBackgroundColortype,
  setBackgroundColor,
  backgroundColor,
  setButtonsBackgroundColor,
  buttonsBackgroundColor,
  setButtonsBorderRadius,
  buttonsBorderRadius,
  setButtonsBorderColor,
  buttonsBorderColor,
  setButtonsTextColor,
  buttonsTextColor,
  setIconColor,
  iconColor,
  buttonsShadowColor,
  setButtonsShadowColor,
  buttonsShadowSize,
  setButtonsShadowSize,
  textColor,
  setTextColor,
  buttonsIconsColor,
  setButtonsIconsColor
}) => {

    const { t } = useTranslation()
  const handleUpdateLanding = (e) => {
    axios.patch(`${updateLandingPage}${landingId}`, {
      background: backgroundColor,
      title,
      bio,
      textColor,
      icon:icons
      .filter(iconItem => {
        return (iconItem.link !== '' || iconItem.name !== '')
      }),
      button:links
      .filter(linkitme => {
        return (linkitme.link !== '' || linkitme.icon !== '' || linkitme.text !== '')
      }),
      buttonShadowSize: buttonsShadowSize,
      buttonShadowColor:buttonsShadowColor,
      buttonBorderRadius:buttonsBorderRadius,
      buttonBackgroundColor:buttonsBackgroundColor,
      buttonTextColor:buttonsTextColor,
      buttonIconColor:buttonsIconsColor,
      logo: logoName,
      iconColor
    })
  }

  return (
    <Fragment>
      <div className='content-header'>
        <h5 className='mb-0'>{t("Customize Your Design")}</h5>
      </div>

      <h3>
        <Feather /> {t("Colors")}
      </h3>
      <Form onSubmit={(e) => e.preventDefault()}>
        <Row className='my-1'>
          <Col md='4'>
            <Card className='bg-transparent shadow-sm border-light '>
              <CardBody>
                <CardText>{t("Buttons Color")}</CardText>
                <InputGroup className='mt-50' id='popTop'>
                  <InputGroupText
                    style={{ backgroundColor: buttonsBackgroundColor }}
                  >
                    {'\u00a0\u00a0'}
                  </InputGroupText>
                  <Input type='text' placeholder={t('Color')} />
                </InputGroup>
                <UncontrolledPopover placement='top' target='popTop'>
                  <PopoverHeader>{t("Pcik a Color")}</PopoverHeader>
                  <PopoverBody>
                    <ChromePicker
                      disableAlpha
                      color={buttonsBackgroundColor}
                      onChange={(updateColor) => setButtonsBackgroundColor(updateColor.hex)
                      }
                      className='shadow-none'
                    />
                  </PopoverBody>
                </UncontrolledPopover>
              </CardBody>
            </Card>
          </Col>

          <Col md='4'>
            <Card className='bg-transparent shadow-sm border-light '>
              <CardBody>
                <CardText>{t('Buttons Text')} </CardText>
                <InputGroup className='mt-50' id='popTop2'>
                  <InputGroupText style={{ backgroundColor: buttonsTextColor }}>
                    {'\u00a0\u00a0'}
                  </InputGroupText>
                  <Input
                    type='text'
                    value={buttonsTextColor}
                    placeholder={t('Color')}
                  />
                </InputGroup>
                <UncontrolledPopover placement='top' target='popTop2'>
                  <PopoverHeader>{t("Pcik a Color")}</PopoverHeader>
                  <PopoverBody>
                    <ChromePicker
                      disableAlpha
                      color={buttonsTextColor}
                      onChange={(updateColor) => setButtonsTextColor(updateColor.hex)
                      }
                      className='shadow-none'
                    />
                  </PopoverBody>
                </UncontrolledPopover>
              </CardBody>
            </Card>
          </Col>
          <Col md='4'>
            <Card className='bg-transparent shadow-sm border-light '>
              <CardBody>
                <CardText>{t('Buttons border')}</CardText>
                <InputGroup className='mt-50' id='popTop3'>
                  <InputGroupText
                    style={{ backgroundColor: buttonsBorderColor }}
                  >
                    {'\u00a0\u00a0'}
                  </InputGroupText>
                  <Input
                    type='text'
                    value={buttonsBorderColor}
                    placeholder={t('Color')}
                  />
                </InputGroup>
                <UncontrolledPopover placement='top' target='popTop3'>
                  <PopoverHeader>{t("Pcik a Color")}</PopoverHeader>
                  <PopoverBody>
                    <ChromePicker
                      disableAlpha
                      color={buttonsBorderColor}
                      onChange={(updateColor) => setButtonsBorderColor(updateColor.hex)
                      }
                      className='shadow-none'
                    />
                  </PopoverBody>
                </UncontrolledPopover>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row className='my-1'>
          <Col md='4'>
            <Card className='bg-transparent shadow-sm border-light '>
              <CardBody>
                <CardText>{t('Shadow Color')}</CardText>
                <InputGroup className='mt-50' id='popTop4'>
                  <InputGroupText style={{ backgroundColor: buttonsShadowColor }}>
                    {'\u00a0\u00a0'}
                  </InputGroupText>
                  <Input type='text' value={buttonsShadowColor} placeholder={t('Color')} />
                </InputGroup>
                <UncontrolledPopover placement='top' target='popTop4'>
                  <PopoverHeader>{t("Pcik a Color")}</PopoverHeader>
                  <PopoverBody>
                    <ChromePicker
                      disableAlpha
                      color={buttonsShadowColor}
                      onChange={(updateColor) => setButtonsShadowColor(updateColor.hex)
                      }
                      className='shadow-none'
                    />
                  </PopoverBody>
                </UncontrolledPopover>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card className='shadow-sm border-light bg-transparent'>
              <CardBody>
                <CardText className=''>{t('Shadow size')}</CardText>

                <div className='my-1 d-flex justify-content-between'>
                  <div>
                    <Input
                      type='radio'
                      id='ex1-active1'
                      defaultChecked
                      style={{ marginRight: '4px' }}
                      name='ex1'
                      onChange = {() => setButtonsShadowSize(0)}
                    />
                    <Label className='form-check-label' for='ex1-active1'>
                      {t('Off')}
                    </Label>
                  </div>
                  <div>
                    <Input
                      type='radio'
                      id='ex1-active'
                      style={{ marginRight: '4px' }}
                      name='ex1'
                      onChange = {() => setButtonsShadowSize(5)}
                    />
                    <Label className='form-check-label' for='ex1-active'>
                    {t('Small')}
                    </Label>
                  </div>
                  <div>
                    <Input
                      type='radio'
                      id='ex1-active2'
                      style={{ marginRight: '4px' }}
                      name='ex1'
                      onChange = {() => setButtonsShadowSize(15)}
                    />
                    <Label className='form-check-label' for='ex1-active2'>
                      {t("Regular")}
                    </Label>
                  </div>

                  <div>
                    <Input
                      type='radio'
                      id='ex1-active3'
                      style={{ marginRight: '4px' }}
                      name='ex1'
                      onChange = {() => setButtonsShadowSize(30)}
                    />
                    <Label className='form-check-label' for='ex1-active3'>
                    {t('Larger')}
                    </Label>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>

        {/*  Button Shape ********************************************************************************** */}
        <Row>
        <Col md='4'>
            <Card className='bg-transparent shadow-sm border-light '>
              <CardBody>
                <CardText>{t('Buttons Icons Color')}</CardText>
                <InputGroup className='mt-50' id='popTop25'>
                  <InputGroupText style={{ backgroundColor: buttonsIconsColor }}>
                    {'\u00a0\u00a0'}
                  </InputGroupText>
                  <Input type='text' value={buttonsIconsColor} placeholder={t('Color')} />
                </InputGroup>
                <UncontrolledPopover placement='top' target='popTop25'>
                  <PopoverHeader>{t("Pcik a Color")}</PopoverHeader>
                  <PopoverBody>
                    <ChromePicker
                      disableAlpha
                      color={buttonsIconsColor}
                      onChange={(updateColor) => setButtonsIconsColor(updateColor.hex)}
                      className='shadow-none'
                    />
                  </PopoverBody>
                </UncontrolledPopover>
              </CardBody>
            </Card>
        </Col>
        <Col md='8'>
        <Card className=' shadow-sm border border-light pt-2'>
          <CardBody>
            <Row className='d-flex'>
              <Col md={7} className='align-self-center'>
                <div className=''>
                  <Label className='form-label' for='default-range'>
                    {t('Border Radius')}
                  </Label>
                  <Input
                    type='range'
                    value={buttonsBorderRadius}
                    onChange={(radius) => setButtonsBorderRadius(radius.target.value)}
                    name='default-range'
                    min='0'
                    max='40'
                    id='default-range'
                  />
                </div>
              </Col>
              <Col className='align-self-center'>
                <Button
                  block
                  className='mt-1'
                  style={{
                    borderRadius: `${buttonsBorderRadius}px `,
                    backgroundColor: `${buttonsBackgroundColor} !important`
                  }}
                >
                  {' '}
                  {t('Test Button')}{' '}
                </Button>
              </Col>
            </Row>
          </CardBody>
        </Card>
        </Col>
        </Row>
    

        {/* Start icon Shape ********************************************************************************** */}
        <hr className='' />
        <Row className='my-2'>

          <Col md='4'>
            <Card className='bg-transparent shadow-sm border-light '>
              <CardBody>
                <CardText>{t('Icons Color')}</CardText>
                <InputGroup className='mt-50' id='popTop50'>
                  <InputGroupText style={{ backgroundColor: iconColor }}>
                    {'\u00a0\u00a0'}
                  </InputGroupText>
                  <Input type='text' value={iconColor} placeholder={t('Color')} />
                </InputGroup>
                <UncontrolledPopover placement='top' target='popTop50'>
                  <PopoverHeader>{t("Pcik a Color")}</PopoverHeader>
                  <PopoverBody>
                    <ChromePicker
                      disableAlpha
                      color={iconColor}
                      onChange={(updateColor) => setIconColor(updateColor.hex)}
                      className='shadow-none'
                    />
                  </PopoverBody>
                </UncontrolledPopover>
              </CardBody>
            </Card>
          </Col>

          <Col md='4'>
            <Card className='bg-transparent shadow-sm border-light '>
              <CardBody>
                <CardText>{t('Background Color')}</CardText>
                <InputGroup className='mt-50' id='popTop7'>
                  <InputGroupText style={{ backgroundColor }}>
                    {'\u00a0\u00a0'}
                  </InputGroupText>
                  <Input
                    type='text'
                    value={backgroundColor}
                    placeholder={t('Color')}
                  />
                </InputGroup>
                <UncontrolledPopover placement='top' target='popTop7'>
                  <PopoverHeader>{t("Pcik a Color")}</PopoverHeader>
                  <PopoverBody>
                    <ChromePicker
                      disableAlpha
                      color={backgroundColor}
                      onChange={(updateColor) => setBackgroundColor(updateColor.hex)
                      }
                      className='shadow-none'
                    />
                  </PopoverBody>
                </UncontrolledPopover>
              </CardBody>
            </Card>
          </Col>

          <Col md='4'>
            <Card className='bg-transparent shadow-sm border-light '>
              <CardBody>
                <CardText>{t('Text Color')}</CardText>
                <InputGroup className='mt-50' id='popTop5'>
                  <InputGroupText style={{ backgroundColor: textColor }}>
                    {'\u00a0\u00a0'}
                  </InputGroupText>
                  <Input type='text' value={textColor} placeholder={t('Color')} />
                </InputGroup>
                <UncontrolledPopover placement='top' target='popTop5'>
                  <PopoverHeader>{t("Pcik a Color")}</PopoverHeader>
                  <PopoverBody>
                    <ChromePicker
                      disableAlpha
                      color={textColor}
                      onChange={(updateColor) => setTextColor(updateColor.hex)}
                      className='shadow-none'
                    />
                  </PopoverBody>
                </UncontrolledPopover>
              </CardBody>
            </Card>
        </Col>
            {/* <Card className='shadow-sm border-light bg-transparent'>
              <CardBody>
                <CardText className=''>{t('Icons type')}</CardText>
                <div className='d-flex justify-content-between'>
                  <Button style={{ padding: '10px 20px' }} outline>
                    <FaFacebookSquare color='#4267B2' size='20px' />
                  </Button>
                  <Button style={{ padding: '10px 20px' }} outline>
                    <FaFacebook color='#4267B2' size='20px' />
                  </Button>
                  <Button style={{ padding: '10px 20px' }} outline>
                    <FaFacebookF color='#4267B2' size='20px' />
                  </Button>
                  <Button style={{ padding: '10px 20px' }} outline>
                    <Facebook color='#4267B2' size='20px' />
                  </Button>
                </div>
              </CardBody>
            </Card> */}
        </Row>
        {/* End icon Shape ********************************************************************************** */}

        {/* Start Background ********************************************************************************** */}
        <Row className='my-2'>
          
          {/* <Col>
            <Card className='shadow-sm border-light bg-transparent'>
              <CardBody>
                <CardText for={`inputImage`}>Background Image</CardText>
                <Input
                  type='file'
                  id={`inputImage`}
                  name='image'
                  placeholder='Enter your Profile image'
                />
              </CardBody>
            </Card>
          </Col> */}
        </Row>
        {/* End Background ********************************************************************************** */}

        {/*  Form Buttons ********************************************************************************** */}
        <div className='d-flex justify-content-between'>
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
            color='success'
            className='btn-submit'
            onClick={handleUpdateLanding}
          >
            {t('Submit')}
          </Button>
        </div>
      </Form>
    </Fragment>
  )
}

export default DesignInfo
