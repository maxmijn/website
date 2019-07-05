import React from 'react'

function Cases () {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f0b7a4', width: '100%', display: 'flex', justifyContent: 'center' }}>
      <div className='grid-container2'>
        <div style={{ backgroundColor: '#f1d1b5', gridColumnStart: '1', gridColumnEnd: '3', gridRowStart: '1', gridRowEnd: '3' }} />
        <div style={{ backgroundColor: '#305f72', gridColumnStart: '2', gridColumnEnd: '4', gridRowStart: '2', gridRowEnd: '4', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <p>Content</p>
        </div>
      </div>
    </div>
  )
}

export default Cases
