import React from 'react'
import { Card, Button } from 'semantic-ui-react'
import './styles.css'

function Banner({ header, subheader, dismiss }) {
  return (
    <Card fluid className='bannerCard'>
      <Card.Content className='bannerContent'>
        <Button id='dismissButton' onClick={() => alert('Clicked Dismiss')}>
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