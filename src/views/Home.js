import React from 'react'
import { Container } from 'semantic-ui-react'
import BusinessCard from "../components/BusinessCard";
import SearchBar from '../components/SearchBar';
import Header from '../components/header';

function Home() {
  return (
    <Container>
      <Header/>

      <div style={{ paddingTop: '80px' }}>
        <SearchBar/>
        <BusinessCard name='Maya Day Club' location='Phoenix, AZ'/>
      </div>
    </Container>
  );
}

export default Home;