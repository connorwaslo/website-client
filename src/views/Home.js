import React from 'react'
import { Container } from 'semantic-ui-react'
import BusinessCard from "../components/BusinessCard";
import SearchBar from '../components/SearchBar';

function Home() {
  return (
    <Container>
      <SearchBar/>
      <BusinessCard name='Maya Day Club' location='Phoenix, AZ'/>
    </Container>
  );
}

export default Home;