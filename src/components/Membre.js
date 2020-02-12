import React, { Fragment } from 'react'

const Membre = ({ nom, age }) => {
  return (
    <Fragment>
      <h2 style={{ backgroundColor:'purple', color:'white' }}>{nom.toUpperCase()} : {age}</h2>
    </Fragment>  
  )
}

export default Membre
