import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import InvestButton from '../InvestButton'
import ProgressBar from './ProgressBar'
import './styles.css'

function BusinessCard({ name, location, img, link }) {
  return (
    <Card className='businessCard'>
      <Image src={img} wrapped ui={false}/>
      <Card.Content>
        <Card.Header className='cardText' style={{ color: 'white' }}>{name}</Card.Header>
        <Card.Meta className='cardText' style={{ color: '#95949E' }}>{location}</Card.Meta>

        <div className='investButtonContainer'>
          <InvestButton link={link}/>
        </div>
      </Card.Content>
      <ProgressBar/>
    </Card>
  )
}

export default BusinessCard;