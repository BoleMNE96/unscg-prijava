import classes from './Login.module.css'

import logo from '../assets/logo.png'

const Login = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.logo}>
        <img src={logo} alt='' />
      </div>
      <div className={`text-center mt-4 ${classes.name}`}>Admin Panel</div>
      <form className='p-3 mt-3' action=''>
        <div className={`${classes['form-field']} d-flex align-items-center`}>
          <input
            type='text'
            name='username'
            id='username'
            placeholder='Korisničko ime'
          />
        </div>
        <div className={`${classes['form-field']} d-flex align-items-center`}>
          <input
            type='password'
            name='password'
            id='password'
            placeholder='Lozinka'
          />
        </div>
        <button className={`${classes.btn} btn`}>Prijavite se</button>
      </form>
    </div>
  )
}

export default Login
