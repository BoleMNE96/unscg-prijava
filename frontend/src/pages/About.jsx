import classes from './About.module.css'

const About = () => {
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
            Za njihov posao, potrebno je sa poslodavcima unaprijed dogovoriti
            iznos dnevnice, a sve prikupljene dnevnice se uključuju u poseban
            fond pomoću koga se kasnije raspisuje konkurs koji za svoj cilj ima
            odabir, finansiranje, pružanje podrške i monitoringa jednom ili više
            projekata (u zavisnosti od prikupljenih sredstava) u matičnoj ili
            stranoj zemlji. Projekti koji bi imali mogućnost da konkurišu za
            novac za cilj svog djelovanja moraju imati poboljšanje pozicije
            mladih kroz razvijanje njihovih kapaciteta i znanja.
          </p>
        </div>
        <div className={`col-12 col-md-6 ${classes['bg-lavender-gray']} `}>
          <h4 className='p-4 m-3 text-center'>Akcioni dan kod nas?</h4>
          <p className='p-3 m-3 font-weight-normal'>
            U Crnoj Gori ovaj projekat predstavlja priliku za srednjoškolce da
            tokom jednog dana rade na mjestu usklađenom sa njihovim obrazovnim
            profilom i steknu iskustvo, kao i bolju percepciju onoga čime će se
            baviti u budućnosti. Trudimo se da svakom srednjoškolcu obezbijedimo
            radno mjesto koje odgovara njegovoj struci da bi učesnici stvorili
            autentičnu sliku o svom budućem zanimanju i stekli korisno iskustvo
            u praksi.
          </p>
          <p className='p-3 m-3 font-weight-normal'>
            Do sada je Unija srednjoškolaca projekat Akcioni dan realizovala
            2017. godine u Podgorici, 2018. u tri grada: Podgorici, Baru i
            Bijelom Polju i 2019. u čak 10 gradova: Budvi, Tivtu, Baru,
            Podgorici, Bijelom Polju, Herceg Novom, Mojkovcu, Rožajama,
            Plužinama i Beranama. Usljed virusa COVID-19, Akcioni dan 2020 nije
            bio realizovan. Ove godine projekat će se realizovati u drugoj
            polovini godine, 01. oktobra, zbog pogoršane epidemiološke
            situacije. Akcioni dan je podržan od strane SHL fondacije (Schuler
            Helfen Leben) iz Berlina.
          </p>
        </div>
        <div className={`col-12 ${classes['bg-very-dark-grayish-blue']} `}>
          <h4 className='p-4 m-3 text-center'>
            Fond za finansiranje projekata učeničkih parlamenata
          </h4>
          <p className='p-3 m-3 font-weight-normal'>
            Tokom Akcionog dana zapošljeni srednjoškolci rade za dogovorenu
            dnevnicu, koja je do sada iznosila 10€ po učeniku. Sva sredstva koja
            srednjoškolci zarade poslodavci su dužni da uplate u poseban Fond za
            finansiranje projekata učeničkih parlamenata. Na osnovu prikupljenih
            sredstava, Unija srednjoškolaca raspisuje Konkurs za dodjelu
            finansijskih sredstava prikupljenih tokom Akcionog dana. Sve srednje
            škole u Crnoj Gori imaju mogućnost da se prijave na konkurs i
            osmisle projekat na date teme. Projektom iz 2017. godine finansirali
            smo šest projekata iz ukupnog budžeta od 2000€, u 2018. smo podržali
            6 projekata iz budžeta od 4000€. Od novca koji je prikupljen 2019.
            godine finansirana su 4 projekta koji će početi sa realizacijom
            početkom ove školske godine.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
