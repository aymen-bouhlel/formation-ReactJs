import React, { Fragment } from 'react'

const Membre = (props) => {
  const name = props.nom
  const age = props.age
  return (
    <Fragment>
      <h2>Membre de famille :{name.toUpperCase()}</h2>
      <h2>Age: {age}</h2>
    </Fragment>
    
  )
}

export default Membre
