import React, { Component } from 'react'
import './App.css'
import Member from './components/Membre'

class App extends Component {
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
      </div>
    )
  }
}

export default App
