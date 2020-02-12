import React, { Fragment } from 'react'

const Membre = ({ nom, age }) => {
  return (
    <Fragment>
      <h2 style={{
        backgroundColor: age < 20 ? 'purple' : 'green',
        color: age < 20 ? 'white' : 'black' }}>
        {nom.toUpperCase()} : {age}
      </h2>
    </Fragment>  
  )
}

export default Membre
