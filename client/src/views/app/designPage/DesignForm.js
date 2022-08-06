// ** React Imports
import { useRef, useState } from 'react'

// ** Custom Components
import Wizard from '@components/wizard'

import {useTranslation} from 'react-i18next'
// ** Steps
import ProfileInfo from './steps/ProfileInfo'
import DesignInfo from './steps/DesignInfo'

// ** Icons Imports
import { Edit3, User } from 'react-feather'

const DesignForm = ({
  logoName,
  setLogoName,
  landingId,
  profileImage,
  setProfileImage,
  setButtonsTextColor,
  buttonsTextColor,
  setButtonsBorderColor,
  buttonsBorderColor,
  setButtonsBackgroundColor,
  buttonsBackgroundColor,
  setButtonsBorderRadius,
  buttonsBorderRadius,
  setIconColor,
  iconColor,
  buttonsIconsColor,
  setButtonsIconsColor,
  textColor,
  setTextColor,
  buttonsShadowColor,
  setButtonsShadowColor,
  buttonsShadowSize,
  setButtonsShadowSize,
  setCountLinks,
  countLinks,
  countIcons,
  setCountIcons,
  title,
  setTitle,
  setBackgroundColor,
  backgroundColor,
  setBio,
  bio,
  setIcons,
  setLinks,
  links,
  icons
}) => {
  // ** Ref
  const ref = useRef(null)
  const { t } = useTranslation()
  // ** State
  const [stepper, setStepper] = useState(null)

  const steps = [
    {
      id: 'profile',
      title: `${t('Profile')}`,
      subtitle: `${t('Enter Your Profile Details')}`,
      icon: <User size={18} />,
      content: (
        <ProfileInfo
          setLogoName={setLogoName}
          stepper={stepper}
          landingId={landingId}
          setTitle={setTitle}
          title={title}
          setBio={setBio}
          bio={bio}
          setIcons={setIcons}
          setLinks={setLinks}
          links={links}
          icons={icons}
          countLinks={countLinks}
          setCountLinks={setCountLinks}
          countIcons={countIcons}
          setCountIcons={setCountIcons}
          profileImage={profileImage}
          setProfileImage={setProfileImage}
          type='wizard-modern'
        />
      )
    },
    {
      id: 'Design',
      title: `${t('Design')}`,
      subtitle:`${t('Add Your Own Touch')}`,
      icon: <Edit3 size={18} />,
      content: (
        <DesignInfo
          logoName={logoName}
          links={links}
          icons={icons}
          stepper={stepper}
          landingId = {landingId}
          title={title}
          bio={bio}
          profileImage={profileImage}
          setBackgroundColor={setBackgroundColor}
          backgroundColor={backgroundColor}
          setButtonsBorderRadius={setButtonsBorderRadius}
          buttonsBorderRadius={buttonsBorderRadius}
          setButtonsBackgroundColor={setButtonsBackgroundColor}
          buttonsBackgroundColor={buttonsBackgroundColor}
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
          buttonsIconsColor={buttonsIconsColor}
          setButtonsIconsColor={setButtonsIconsColor}
          textColor={textColor}
          setTextColor={setTextColor}
          type='wizard-modern'
        />
      )
    }
  ]

  return (
    <div className='modern-horizontal-wizard'>
      <Wizard
        type='modern-horizontal'
        ref={ref}
        steps={steps}
        options={{
          linear: false
        }}
        instance={(el) => setStepper(el)}
      />
    </div>
  )
}

export default DesignForm
