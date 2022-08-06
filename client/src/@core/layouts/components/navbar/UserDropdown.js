// ** React Imports
import { Link } from 'react-router-dom'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Third Party Components
import { User, Mail, CheckSquare, MessageSquare, Settings, CreditCard, HelpCircle, Power } from 'react-feather'

// ** Reactstrap Imports
import { UncontrolledDropdown, DropdownMenu, DropdownToggle, DropdownItem } from 'reactstrap'
const capitalizeFL = str => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}
// ** Default Avatar Image
import defaultAvatar from '@src/assets/images/portrait/small/avatar-s-11.png'

const user = JSON.parse(localStorage.getItem("userData"))
const UserDropdown = () => {
  return (
    <UncontrolledDropdown tag='li' className='dropdown-user nav-item'>
      <DropdownToggle href='/' tag='a' className='nav-link dropdown-user-link' onClick={e => e.preventDefault()}>
        <div className='user-nav d-sm-flex d-none'>
          <span className='user-name fw-bold'>{user !== null ? capitalizeFL(user.name) : null}</span>
          <span className='user-status'>{user !== null ? user.role : null } </span>
        </div>
        <Avatar img={defaultAvatar} imgHeight='40' imgWidth='40' status='online' />
      </DropdownToggle>
      <DropdownMenu end>
        <DropdownItem tag={Link} to='/login'>
          <a 
            onClick={() => {
               localStorage.clear()
               localStorage.clear()
               }}>
            <Power size={14} className='me-75' />
             <span className='align-middle'>Logout</span>
          </a>
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  )
}

export default UserDropdown
