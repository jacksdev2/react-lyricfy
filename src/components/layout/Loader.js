import React from 'react'
import loader from './loader.gif'


export default () => {
  return (
    <div>
      <img
        src={loader}
        alt="Loading..."
        style={{width: '100px', margin: '80px auto', display: 'block'}}
      />
    </div>
  )
}
