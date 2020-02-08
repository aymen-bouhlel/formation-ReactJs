import React, { Fragment } from 'react'

const Membre = ({ nom, age }) => {
  return (
    <Fragment>
      <h2>Membre de famille :{nom.toUpperCase()}</h2>
      <h2>Age: {age}</h2>
    </Fragment>  
  )
}

export default Membre
