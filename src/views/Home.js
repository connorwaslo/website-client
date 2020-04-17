import React from 'react'
import { Container } from 'semantic-ui-react'
import BusinessCard from "../components/BusinessCard";

function Home() {
  return (
    <Container>
      <h1>Home</h1>
      <BusinessCard name='Maya Day Club' location='Phoenix, AZ'/>
    </Container>
  );
}

export default Home;