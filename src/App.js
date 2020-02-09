import React, { Component } from 'react'
import './App.css'
import Member from './components/Membre'
import ButtonVieillir from './components/ButtonVieillir'

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

  handleClick1Year = () => {
    const familleCopie = {...this.state.famille}
    familleCopie.membre1.age ++
    this.setState({famille: familleCopie})
  }

  handleClick2Year = (number) => {
    const familleCopie = {...this.state.famille}
    familleCopie.membre1.age += number
    this.setState({familleCopie : famille})
  }

  handleChange = (event) => {
    const familleCopie = {...this.state.famille}
    const nomEntree = event.currentTarget.value
    famille.membre1.nom = nomEntree
    this.setState({famille: familleCopie})
  }

  render () {
    const { titre, type } = this.props
    const {famille} = this.state
    return (
      <div className='App'>
        <h1>{titre}</h1>
        <h2> de type {type}</h2>
        <input type="text" name="" value={famille.membre1.nom} onChange={this.handleChange} />
        <Member nom='Anton' age='22' />
        <Member nom='Farid' age='35' />
        <Member nom='Junior' age='18' />
        <Member nom='Samir' age='40' />
        <Member nom={famille.membre1.nom} age={famille.membre1.age} />
        <Member nom={famille.membre2.nom} age={famille.membre2.age} />
        <Member nom={famille.membre3.nom} age={famille.membre3.age} />
        <Member nom={famille.membre4.nom} age={famille.membre4.age} />
        <ButtonVieillir vieillir={this.handleClick1Year} />
        <ButtonVieillir vieillir={() => this.handleClick2Year(2)} />
      </div>
    )
  }
}

export default App
