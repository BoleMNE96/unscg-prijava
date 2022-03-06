import { Link } from 'react-router-dom'

import logo from '../assets/logo.png'

const Header = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <div className='container'>
        <Link to='/' className='navbar-brand'>
          <img src={logo} width='170' alt='' className='d-inline-block' />
          <span className='text-uppercase'>Akcioni dan</span>
        </Link>

        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#toggleMobileMenu'
          aria-controls='toggleMobileMenu'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='toggleMobileMenu'>
          <ul className='navbar-nav text-center ms-auto'>
            <li className='nav-item px-2'>
              <Link to='/' className='nav-link'>
                Početna
              </Link>
            </li>
            <li className='nav-item px-2'>
              <Link to='/o-akcionom-danu' className='nav-link'>
                O akcionom danu
              </Link>
            </li>
            <li className='nav-item px-2'>
              <a
                href='https://unscg.me/'
                target='_blank'
                rel='noreferrer'
                className='nav-link'
              >
                Unija srednjoskolaca Crne Gore
              </a>
            </li>
            <li className='nav-item px-2'>
              <Link to='/login' className='nav-link'>
                Admin Panel
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header
