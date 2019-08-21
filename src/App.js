import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Slide from './Slide.js'

const fireBaseDias = [
  {
    koptekst: "KEWKKO",
    plaatje: "https://ichef.bbci.co.uk/news/660/cpsprodpb/87BA/production/_105364743_41440931_2196574140417666_5390287486666670080_n.jpg",
  },
  {
    koptekst: "DUCK DUCK!",
    plaatje: "https://www.mcmurrayhatchery.com/images/global/mc/McMurrayHatchery-White-Pekin-Duck.jpg"
  }
]

function App() {

  // [ naamvanState, functieOmStateTeVerandere ] = useState(beginWaarde)
  const [loggedIn, toggleLogIn ] = useState(false) // eh... firebase wil hier iets over te zeggen hebben?
  const [dias, updateDias ] = useState(fireBaseDias)  
  const [nieuweDia, updateNieuweDia ] = useState({ koptekst: '', plaatje: '' })

  // const handleChange = (event) => {
  //   updateNieuweDia({
  //     ...nieuweDia,
  //     koptekst: event.target.value
  //   })
  // }

  // const handleChangePlaatje = (event) => {
  //   updateNieuweDia({
  //     ...nieuweDia,
  //     plaatje: event.target.value
  //   })
  // }

  const handleChange = (event) => {
    updateNieuweDia({
      ...nieuweDia,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    updateDias([...dias, nieuweDia])
  }


  return (
    <div className="App" >
      <div>{ 
        loggedIn 
        ? <div><h1>'Je bent ingelogd'</h1><button onClick={() => toggleLogIn(false)}>Log uit</button></div>
        : <button onClick={() => toggleLogIn(true)}>Log in</button>
      }
      </div>
      <form onSubmit={handleSubmit}>
        <label>Titel</label>
        <input 
          onChange={handleChange} 
          value={nieuweDia.koptekst} 
          name="koptekst" 
          placeholder="vul hier een titel in joh"
        />
        <label>Plaatje</label>
        <input 
          onChange={handleChange}
          value={nieuweDia.plaatje}
          name="plaatje"
          placeholder="url"
        />
        <input type="submit"/>
      </form>
      <header className="App-header">
        {/* Using props  of "Passing props" */}
        {/* We gebruiken array i.p.v. hardcoden (komt straks uit firebase) */}
        { dias
            .map(dia => {
            return <Slide koptekst={dia.koptekst} plaatje={dia.plaatje} />
          })
        }

      </header>

    </div>
  );
}

export default App;
