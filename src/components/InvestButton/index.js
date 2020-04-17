import React from 'react'
import { Button } from 'semantic-ui-react'
import './styles.css'

function InvestButton({ link }) {
  function openLink() {
    window.open(link, '_blank');
  }

  return (
    <Button onClick={openLink} className='investButton'>
      Invest
    </Button>
  )
}

export default InvestButton;