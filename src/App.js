import React, { Component } from 'react'
import './App.css'
import Member from './components/Membre'

const famille = {
  membre1 : {
    nom: 'Samuel',
    age: 22
  },
  membre2 : {
    nom: 'Stella',
    age: 24
  },
  membre3 : {
    nom: 'David',
    age: 18
  },
  membre4 : {
    nom: 'Olfa',
    age: 35
  }
}

class App extends Component {
  state = {
    famille 
  }

  handleClick = () => {
    console.log('Click')
  }

  render () {
    const { titre, type } = this.props
    const {famille} = this.state
    return (
      <div className='App'>
        <h1>{titre}</h1>
        <h2> de type {type}</h2>
        <Member nom='Anton' age='22' />
        <Member nom='Farid' age='35' />
        <Member nom='Junior' age='18' />
        <Member nom='Samir' age='40' />
        <Member nom={famille.membre1.nom} age={famille.membre1.age} />
        <Member nom={famille.membre2.nom} age={famille.membre2.age} />
        <Member nom={famille.membre3.nom} age={famille.membre3.age} />
        <Member nom={famille.membre4.nom} age={famille.membre4.age} />
        <button onClick={this.handleClick} >Vieillir</button>
      </div>
    )
  }
}

export default App
