import React from 'react'
import './ButtonVieillir.css'

const ButtonVieillir = ({ vieillir }) => {
  const btnTitle = 'Vieillir'
  return (
    <button onClick={vieillir}>{btnTitle}</button>
  )
}

export default ButtonVieillir
