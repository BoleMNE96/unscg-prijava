import { Link } from 'react-router-dom'
import classes from './Home.module.css'

const Home = () => {
  return (
    <div className={`container-fluid ${classes['text-color-space-cadet']}`}>
      <div className='row'>
        <div className={`col-12 col-md-6 ${classes['bg-alice-blue']} `}>
          <h4 className='p-4 m-3 text-center'> Šta je akcioni dan? </h4>
          <p className='p-3 m-3 font-weight-normal'>
            Projekat „Akcioni dan“ već od 1968. godine sprovodi se u zemljama
            Zapadne i Sjeverne Evrope, a poznat je pod imenom „Action day“,
            odnosno „Social day“. Projekat uopšteno podrazumijeva da, tokom
            jednog dana, učenici širom zemlje dobiju priliku da određen
            vremenski period budu zaposleni na mjestu koje sami odaberu, ili
            koje im obezbijedi organizator projekta, bez obaveze da tokom ta 24h
            pohađaju nastavu u školi.
          </p>
          <p className='p-3 m-3 font-weight-normal'>
            U Crnoj Gori ovaj projekat predstavlja priliku za srednjoškolce da
            tokom jednog dana rade na mjestu usklađenom sa njihovim obrazovnim
            profilom i steknu iskustvo, kao i bolju percepciju onoga čime će se
            baviti u budućnosti.
          </p>
        </div>
        <div
          className={`col-12 col-md-6 ${classes['bg-lavender-gray']} ${classes.center} flex-column`}
        >
          <div className='row w-100'>
            <div className='col-12 text-center'>
              <Link to='/volonter-prijava'>
                <button
                  type='button'
                  className={`${classes.btn} ${classes['btn-1']} ${classes['btn-sep']} fa-user w-60 my-3`}
                >
                  Prijava za volontere
                </button>
              </Link>
            </div>
          </div>

          <div className='row w-100'>
            <div className='col-12 text-center'>
              <Link to='/poslodavac-prijava'>
                {' '}
                <button
                  type='button'
                  className={`${classes.btn} ${classes['btn-1']} ${classes['btn-sep']} fa-briefcase w-60 my-3`}
                >
                  Prijava za poslodavce
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
