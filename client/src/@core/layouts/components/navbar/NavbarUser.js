// ** Dropdowns Imports
import UserDropdown from './UserDropdown'
import IntlDropdown from './IntlDropdown'

const NavbarUser = (props) => {
  const {isRtl, setIsRtl } = props
  return (
    <ul className='nav navbar-nav align-items-center ms-auto'>
      <IntlDropdown 
        isRtl={isRtl}
        setIsRtl={setIsRtl}
      />
      <UserDropdown />
    </ul>
  )
}
export default NavbarUser
