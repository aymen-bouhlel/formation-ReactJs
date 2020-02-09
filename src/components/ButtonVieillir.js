import React from 'react'

const ButtonVieillir = ({ vieillir }) => {
  const btnTitle = 'Vieillir'
  return (
    <button onClick={vieillir}>{btnTitle}</button>
  )
}

export default ButtonVieillir
