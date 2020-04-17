import React from 'react'
import { Card, Button } from 'semantic-ui-react'
import './styles.css'

function Banner({ visible, header, subheader, dismiss }) {
  if (!visible)
    return null

  return (
    <Card fluid className='bannerCard'>
      <Card.Content className='bannerContent'>
        <Button id='dismissButton' onClick={dismiss}>
          <p className='dismissText'>Dismiss</p>
        </Button>
        <Card.Header style={{ color: 'white', fontSize: '2em' }}>
          {header}
        </Card.Header>
        <Card.Description style={{ color: 'white' }}>
          {subheader}
        </Card.Description>
      </Card.Content>
    </Card>
  )
}

export default Banner;