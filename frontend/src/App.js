import { Fragment } from 'react'
import { Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import VolunteerSignUp from './pages/VolunteerSignUp'
import EmployerSignUp from './pages/EmployerSignUp'
import Login from './pages/Login'
import AdminPanel from './pages/AdminPanel'

const App = () => {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/o-akcionom-danu' element={<About />} />
        <Route path='/volonter-prijava' element={<VolunteerSignUp />} />
        <Route path='/poslodavac-prijava' element={<EmployerSignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/panel' element={<AdminPanel />} />
      </Routes>
    </Fragment>
  )
}

export default App
