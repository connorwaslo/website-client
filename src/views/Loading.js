import React from 'react'

function Loading() {
  return (
    <div style={{
      width: '100vw', height: '100vh', display: 'flex',
      justifyContent: 'center', alignItems: 'center',
      backgroundColor: '#313038' }}
    >
      <h1 style={{ color: '#FFFFFF' }}>Loading...</h1>
    </div>
  )
}

export default Loading;