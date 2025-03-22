import React from 'react'
import './Title.css'
const Title = ({subTitle,tittle}) => {
  return (
    <div className='title'>
      <p>{subTitle}</p>
      <h2>{tittle}</h2>
    </div>
  )
}

export default Title