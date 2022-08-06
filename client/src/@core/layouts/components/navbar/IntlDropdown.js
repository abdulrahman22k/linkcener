// ** Third Party Components
import { useTranslation } from 'react-i18next'
import ReactCountryFlag from 'react-country-flag'


// ** RTL Hooks

import {useRTL} from '@hooks/useRTL'
// ** Reactstrap Imports
import { UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap'

const IntlDropdown = (props) => {
  const {isRtl, setIsRtl} = props
  // ** Hooks
  const { i18n } = useTranslation()

  // ** Vars
  const langObj = {
    sa: 'عربي',
    en: 'English'
  }

  // ** Function to switch Language
  const handleLangUpdate = (e, lang) => {
    e.preventDefault()
    if (lang === 'sa') setIsRtl(true)
    else setIsRtl(false)
    i18n.changeLanguage(lang)
  }
  return (
    <UncontrolledDropdown href='/' tag='li' className='dropdown-language nav-item'>
      <DropdownToggle href='/' tag='a' className='nav-link' onClick={e => e.preventDefault()}>
        <ReactCountryFlag
          svg
          className='country-flag flag-icon'
          countryCode={i18n.language === 'en' ? 'us' : i18n.language}
        />
        <span className='selected-language'>{langObj[i18n.language]}</span>
      </DropdownToggle>
      <DropdownMenu className='mt-0' end>

        <DropdownItem href='/' tag='a' onClick={e => handleLangUpdate(e, 'sa')}>
          <ReactCountryFlag className='country-flag' countryCode='sa' svg />
          <span className='ms-1'>عربي</span>
        </DropdownItem>
        <DropdownItem href='/' tag='a' onClick={e => handleLangUpdate(e, 'en')}>
          <ReactCountryFlag className='country-flag' countryCode='us' svg />
          <span className='ms-1'>English</span>
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  )
}

export default IntlDropdown
