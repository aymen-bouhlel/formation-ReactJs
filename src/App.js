import React from 'react'
import './App.css'
import Member from './components/Membre'

function App () {
  return (
    <div className='App'>
      <h1>React App</h1>
      <Member nom='Anton' age='22' />
      <Member nom='Farid' age='35' />
      <Member nom='Junior' age='18' />
      <Member nom='Samir' age='40' />
    </div>
  )
}

export default App
