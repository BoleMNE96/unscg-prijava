import { Fragment, useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

import classes from './SignUp.module.css'

const isEmpty = (value) => value.trim() === ''
const isJmbg = (value) => value.trim().length === 13

const VolunteerSignUp = () => {
  const [cities, setCities] = useState()
  const [schools, setSchools] = useState()
  const [courses, setCourses] = useState()
  const [volunteer, setVolunteer] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const [formInputsValidity, setFormInputsValidity] = useState({
    fullName: true,
    email: true,
    jmbg: true,
    phone: true,
    city: true,
    school: true,
    course: true,
  })

  const navigate = useNavigate()

  const fullNameRef = useRef()
  const emailRef = useRef()
  const jmbgRef = useRef()
  const phoneRef = useRef()
  const cityRef = useRef()
  const schoolRef = useRef()
  const courseRef = useRef()

  useEffect(() => {
    setIsLoading(true)
    axios
      .get('http://localhost:5000/get-cities')
      .then((response) => {
        setCities(response.data)
        setIsLoading(false)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const handleCitySelect = (e) => {
    axios
      .get(`http://localhost:5000/get-schools/${e.target.value}`)
      .then((response) => {
        setSchools(response.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const handleSchoolSelect = (e) => {
    axios
      .get(`http://localhost:5000/get-courses/${e.target.value}`)
      .then((response) => {
        setCourses(response.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const fullName = fullNameRef.current.value
    const email = emailRef.current.value
    const jmbg = jmbgRef.current.value
    const phone = phoneRef.current.value
    const city = cityRef.current.value
    const school = schoolRef.current.value
    const course = courseRef.current.value

    const fullNameIsValid = !isEmpty(fullName)
    const emailIsValid = !isEmpty(email)
    const jmbgIsValid = isJmbg(jmbg)
    const phoneIsValid = !isEmpty(phone)
    const cityIsValid = !isEmpty(city)
    const schoolIsValid = !isEmpty(school)
    const courseIsValid = !isEmpty(course)

    setFormInputsValidity({
      fullName: fullNameIsValid,
      email: emailIsValid,
      jmbg: jmbgIsValid,
      phone: phoneIsValid,
      city: cityIsValid,
      school: schoolIsValid,
      course: courseIsValid,
    })

    const formIsValid =
      fullNameIsValid &&
      emailIsValid &&
      jmbgIsValid &&
      phoneIsValid &&
      cityIsValid &&
      schoolIsValid &&
      courseIsValid

    if (!formIsValid) {
      return
    }

    const newVolunteer = {
      fullName,
      email,
      jmbg,
      phone,
      city,
      school,
      course,
    }

    axios
      .post('http://localhost:5000/add-volunteer', newVolunteer)
      .then(() => {
        console.log('Volunteer created!')
      })
      .catch((err) => {
        console.log(err)
      })

    setVolunteer(newVolunteer)
    navigate('/volonteri-unos')
  }

  return (
    <Fragment>
      <h1 className='text-center my-3'>Prijava za volontere</h1>
      <div className={`container ${classes['bg-lavender-gray']}`}>
        <form onSubmit={handleSubmit}>
          <div
            className={`form-group pt-3 mb-2 ${
              formInputsValidity.fullName ? '' : classes.invalid
            }`}
          >
            <label htmlFor='fullName' className='mb-1'>
              Ime i prezime:
            </label>
            <input
              type='text'
              className='form-control'
              id='fullName'
              placeholder='Unesite ime i prezime'
              name='fullName'
              ref={fullNameRef}
            />
            {!formInputsValidity.fullName && <p>Morate popuniti ovo polje!</p>}
          </div>
          <div
            className={`form-group mb-2 ${
              formInputsValidity.email ? '' : classes.invalid
            }`}
          >
            <label htmlFor='email' className='mb-1'>
              E-mail adresa:
            </label>
            <input
              type='email'
              className='form-control'
              id='email'
              placeholder='Unesite e-mail adresu'
              name='email'
              ref={emailRef}
            />
            {!formInputsValidity.email && <p>Morate popuniti ovo polje!</p>}
          </div>
          <div
            className={`form-group mb-2 ${
              formInputsValidity.jmbg ? '' : classes.invalid
            }`}
          >
            <label htmlFor='jmbg' className='mb-1'>
              Matični broj:
            </label>
            <input
              type='text'
              className='form-control'
              id='jmbg'
              placeholder='Unesite JMBG'
              name='jmbg'
              ref={jmbgRef}
            />
            {!formInputsValidity.jmbg && (
              <p>Matični broj mora imati 13 cifara!</p>
            )}
          </div>
          <div
            className={`form-group mb-2 ${
              formInputsValidity.phone ? '' : classes.invalid
            }`}
          >
            <label htmlFor='phone' className='mb-1'>
              Broj telefona:
            </label>
            <input
              type='text'
              className='form-control'
              id='phone'
              placeholder='Unesite broj telefona'
              name='phone'
              ref={phoneRef}
            />
            {!formInputsValidity.phone && <p>Morate popuniti ovo polje!</p>}
          </div>
          <div
            className={`form-group mb-2 ${
              formInputsValidity.city ? '' : classes.invalid
            }`}
          >
            <label htmlFor='city' className='mb-1'>
              Grad:
            </label>
            <select
              name='city'
              id='city'
              className='form-control'
              onInput={handleCitySelect}
              ref={cityRef}
            >
              <option value=''>--- Izaberite grad ---</option>
              {!isLoading &&
                cities &&
                cities.map((city) => (
                  <option key={city._id} value={city._id}>
                    {city.city_name}
                  </option>
                ))}
            </select>
            {!formInputsValidity.city && <p>Morate odabrati grad!</p>}
          </div>
          <div
            className={`form-group mb-2 ${
              formInputsValidity.school ? '' : classes.invalid
            }`}
          >
            <label htmlFor='school' className='mb-1'>
              Škola:
            </label>
            <select
              name='school'
              id='school'
              className='form-control'
              onInput={handleSchoolSelect}
              ref={schoolRef}
            >
              <option value=''>--- Izaberite školu ---</option>
              {!isLoading &&
                schools &&
                schools.map((school) => (
                  <option key={school._id} value={school._id}>
                    {school.school_name}
                  </option>
                ))}
            </select>
            {!formInputsValidity.school && <p>Morate odabrati školu!</p>}
          </div>
          <div
            className={`form-group mb-2 ${
              formInputsValidity.course ? '' : classes.invalid
            }`}
          >
            <label htmlFor='course' className='mb-1'>
              Smjer:
            </label>
            <select
              name='course'
              id='course'
              className='form-control'
              ref={courseRef}
            >
              <option value=''>--- Izaberite smjer ---</option>
              {!isLoading &&
                courses &&
                courses.map((course) => (
                  <option key={course._id} value={course._id}>
                    {course.course_name}
                  </option>
                ))}
            </select>
            {!formInputsValidity.course && <p>Morate odabrati smjer!</p>}
          </div>
          <div className='row'>
            <div className='col text-center'>
              <button
                className={`${classes.btn} ${classes['btn-2']}`}
                type='submit'
              >
                Unesite podatke
              </button>
            </div>
          </div>
        </form>
      </div>
    </Fragment>
  )
}

export default VolunteerSignUp
