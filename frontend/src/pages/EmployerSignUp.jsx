import { Fragment, useState, useEffect, useRef } from 'react'
import axios from 'axios'

import classes from './SignUp.module.css'
import iconPlus from '../assets/iconplus.png'

const isEmpty = (value) => value.trim() === ''

const EmployerSignUp = () => {
  const [cities, setCities] = useState()
  const [employer, setEmployer] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const [noOfJobs, setNoOfJobs] = useState(0)
  const [formInputsValidity, setFormInputsValidity] = useState({
    companyName: true,
    fullRepName: true,
    repPosition: true,
    pib: true,
    phone: true,
    email: true,
    jobName: true,
    openingNo: true,
  })

  const companyNameRef = useRef()
  const fullRepNameRef = useRef()
  const repPositionRef = useRef()
  const pibRef = useRef()
  const phoneRef = useRef()
  const emailRef = useRef()
  const jobNameRef = useRef()
  const openingNoRef = useRef()

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

  const handleSubmit = (e) => {
    e.preventDefault()

    const companyName = companyNameRef.current.value
    const fullRepName = fullRepNameRef.current.value
    const repPosition = repPositionRef.current.value
    const pib = pibRef.current.value
    const phone = phoneRef.current.value
    const email = emailRef.current.value
    const jobName = jobNameRef.current.value
    const openingNo = openingNoRef.current.value

    const companyNameIsValid = !isEmpty(companyName)
    const fullRepNameisValid = !isEmpty(fullRepName)
    const repPositionIsValid = !isEmpty(repPosition)
    const pibIsValid = !isEmpty(pib)
    const phoneIsValid = !isEmpty(phone)
    const emailIsValid = !isEmpty(email)
    const jobNameIsValid = !isEmpty(jobName)
    const openingNoIsValid = !isEmpty(openingNo)

    setFormInputsValidity({
      companyName: companyNameIsValid,
      fullRepName: fullRepNameisValid,
      repPosition: repPositionIsValid,
      pib: pibIsValid,
      phone: phoneIsValid,
      email: emailIsValid,
      jobName: jobNameIsValid,
      openingNo: openingNoIsValid,
    })

    const formIsValid =
      companyNameIsValid &&
      fullRepNameisValid &&
      repPositionIsValid &&
      pibIsValid &&
      phoneIsValid &&
      emailIsValid &&
      jobNameIsValid &&
      openingNoIsValid

    if (!formIsValid) {
      return
    }

    const newEmployer = {
      companyName,
      fullRepName,
      repPosition,
      pib,
      phone,
      email,
      jobName,
      openingNo,
    }

    console.log(newEmployer)

    // axios
    //   .post('http://localhost:5000/add-employer', newEmployer)
    //   .then(() => {
    //     console.log('Employer created!')
    //   })
    //   .catch((err) => {
    //     console.log(err)
    //   })

    // setEmployer(newEmployer)
  }

  const handleAddPositionClick = () => {
    setNoOfJobs((prevState) => {
      return prevState + 1
    })
  }

  const positions = []

  for (let i = 0; i < noOfJobs; i++) {
    positions.push(
      <div style={{ padding: '15px', border: '2px solid' }} key={i}>
        <div
          className={`form-group mb-2 ${
            formInputsValidity.jobName ? '' : classes.invalid
          }`}
        >
          <label htmlFor='jobName' className='mb-1'>
            Pozicija:
          </label>
          <input
            type='text'
            className='form-control'
            id='jobName'
            placeholder='Unesite naziv pozicije'
            name='jobName'
            ref={jobNameRef}
          />
          {!formInputsValidity.jobName && <p>Morate popuniti ovo polje!</p>}
        </div>
        <div
          className={`form-group mb-2 ${
            formInputsValidity.openingNo ? '' : classes.invalid
          }`}
        >
          <label htmlFor='openingNo' className='mb-1'>
            Broj radnih mjesta:
          </label>
          <input
            type='number'
            className='form-control'
            id='openingNo'
            placeholder='Unesite broj radnih mjesta'
            name='openingNo'
            ref={openingNoRef}
          />
          {!formInputsValidity.openingNo && <p>Morate popuniti ovo polje!</p>}
        </div>
      </div>
    )
  }

  return (
    <Fragment>
      <h1 className='text-center my-3'>Prijava za poslodavce</h1>
      <div className={`container ${classes['bg-lavender-gray']}`}>
        <form onSubmit={handleSubmit}>
          <div
            className={`form-group pt-3 mb-2 ${
              formInputsValidity.companyName ? '' : classes.invalid
            }`}
          >
            <label htmlFor='companyName' className='mb-1'>
              Naziv firme:
            </label>
            <input
              type='text'
              className='form-control'
              id='companyName'
              placeholder='Unesite ime firme'
              name='companyName'
              ref={companyNameRef}
            />
            {!formInputsValidity.companyName && (
              <p>Morate popuniti ovo polje!</p>
            )}
          </div>
          <div
            className={`form-group mb-2 ${
              formInputsValidity.fullRepName ? '' : classes.invalid
            }`}
          >
            <label htmlFor='fullRepName' className='mb-1'>
              Ime i prezime lica za zastupanje:
            </label>
            <input
              type='text'
              className='form-control'
              id='fullRepName'
              placeholder='Unesite ime i prezime'
              name='fullRepName'
              ref={fullRepNameRef}
            />
            {!formInputsValidity.fullRepName && (
              <p>Morate popuniti ovo polje!</p>
            )}
          </div>
          <div
            className={`form-group mb-2 ${
              formInputsValidity.repPosition ? '' : classes.invalid
            }`}
          >
            <label htmlFor='repPosition' className='mb-1'>
              Funkcija lica za zastupanje:
            </label>
            <input
              type='text'
              className='form-control'
              id='repPosition'
              placeholder='Unesite funkciju'
              name='repPosition'
              ref={repPositionRef}
            />
            {!formInputsValidity.repPosition && (
              <p>Morate popuniti ovo polje!</p>
            )}
          </div>
          <div
            className={`form-group mb-2 ${
              formInputsValidity.pib ? '' : classes.invalid
            }`}
          >
            <label htmlFor='pib' className='mb-1'>
              PIB:
            </label>
            <input
              type='text'
              className='form-control'
              id='pib'
              placeholder='Unesite PIB'
              name='pib'
              ref={pibRef}
            />
            {!formInputsValidity.pib && <p>Morate popuniti ovo polje!</p>}
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
          {positions}
          <div className='container'>
            <div className='row'>
              <div className='col text-center'>
                <img
                  onClick={handleAddPositionClick}
                  src={iconPlus}
                  alt='plus icon'
                  className={classes.iconplus}
                />
              </div>
            </div>
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

export default EmployerSignUp
