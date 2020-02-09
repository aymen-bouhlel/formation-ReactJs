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
  render () {
    const { titre, type } = this.props
    return (
      <div className='App'>
        <h1>{titre}</h1>
        <h2> de type {type}</h2>
        <Member nom='Anton' age='22' />
        <Member nom='Farid' age='35' />
        <Member nom='Junior' age='18' />
        <Member nom='Samir' age='40' />
        <Member nom={this.state.famille.membre1.nom} age={this.state.famille.membre1.age} />
        <Member nom={this.state.famille.membre2.nom} age={this.state.famille.membre2.age} />
        <Member nom={this.state.famille.membre3.nom} age={this.state.famille.membre3.age} />
        <Member nom={this.state.famille.membre4.nom} age={this.state.famille.membre4.age} />
      </div>
    )
  }
}

export default App
