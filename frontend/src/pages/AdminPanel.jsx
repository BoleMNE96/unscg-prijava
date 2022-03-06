import React, { useEffect, useState } from 'react'
import axios from 'axios'

const AdminPanel = () => {
  const [volunteers, setVolunteers] = useState()
  const [employers, setEmployers] = useState()
  const [isLoading, setIsLoading] = useState(false)

  const getVolunteers = () => {
    axios
      .get('http://localhost:5000/get-volunteers')
      .then((response) => {
        setVolunteers(response.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const getEmployers = () => {
    axios
      .get('http://localhost:5000/get-employers')
      .then((response) => {
        setEmployers(response.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    setIsLoading(true)
    getVolunteers()
    getEmployers()
    setIsLoading(false)
  }, [])

  return (
    <div className='container mt-3'>
      <div className='table-responsive'>
        <h2>Volonteri</h2>
        <table className='table table-bordered'>
          <thead>
            <tr>
              <th>Ime i prezime</th>
              <th>Email adresa</th>
              <th>Matični broj</th>
              <th>Broj telefona</th>
              <th>Grad</th>
              <th>Škola</th>
              <th>Smjer</th>
            </tr>
          </thead>
          <tbody>
            {!isLoading &&
              volunteers &&
              volunteers.map((volunteer) => (
                <tr key={volunteer._id}>
                  <td>{volunteer.fullName}</td>
                  <td>{volunteer.email}</td>
                  <td>{volunteer.jmbg}</td>
                  <td>{volunteer.phone}</td>
                  <td>{volunteer.city.city_name}</td>
                  <td>{volunteer.school.school_name}</td>
                  <td>{volunteer.course.course_name}</td>
                  <td className='d-flex'>
                    <button className='btn btn-primary m-1'>Izmijeni</button>
                    <button className='btn btn-danger m-1'>Izbriši</button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div className='table-responsive'>
        <h2>Poslodavci</h2>
        <table className='table table-bordered'>
          <thead>
            <tr>
              <th>Naziv firme</th>
              <th>Lice za zastupanje</th>
              <th>Funkcija lica za zastupanje</th>
              <th>PIB</th>
              <th>Broj telefona</th>
              <th>Email adresa</th>
              <th>Poslovi</th>
            </tr>
          </thead>
          <tbody>
            {!isLoading &&
              employers &&
              employers.map((employer) => (
                <tr key={employer._id}>
                  <td>{employer.companyName}</td>
                  <td>{employer.fullRepName}</td>
                  <td>{employer.repPosition}</td>
                  <td>{employer.pib}</td>
                  <td>{employer.phone}</td>
                  <td>{employer.email}</td>
                  <td>
                    {employer.jobs.map((job) => (
                      <tr>
                        <td>{job.job_name + ' ' + job.openingNo}</td>
                      </tr>
                    ))}
                  </td>
                  <td className='d-flex'>
                    <button className='btn btn-primary m-1'>Izmijeni</button>
                    <button className='btn btn-danger m-1'>Izbriši</button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AdminPanel
