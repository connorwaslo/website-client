import React from 'react'

// Todo: Accept width prop as % and replace 100%
function ProgressBar() {
  return (
    <div style={{
      position: 'relative',
      bottom: 0, left: '0', right: '0',
      height: '0.5em',
      width: '100%',
      background: '#00B791'
    }}/>
  )
}

export default ProgressBar