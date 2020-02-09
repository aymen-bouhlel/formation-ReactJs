import React, { Fragment } from 'react'

const Membre = ({ nom, age }) => {
  return (
    <Fragment>
      <h2>{nom.toUpperCase()} : {age}</h2>
    </Fragment>  
  )
}

export default Membre
