import React from 'react'
import { Container } from 'semantic-ui-react'
import BusinessCard from "../components/BusinessCard";
import SearchBar from '../components/SearchBar';
import Header from '../components/header';
import Banner from '../components/banner';

function Home() {
  return (
    <Container>
      <Header/>

      <div style={{ paddingTop: '100px' }}>
        <Banner
          header='One credit purchase could save a business from closing because of COVID-19.'
          subheader="Buy credit now and get it back plus more for use later. It's like a loan for the business.
                    Except faster. Plus, by committing to in-store credit, the business is able to give you
                    even extra bang for your buck."
        />
        <SearchBar/>
        <BusinessCard name='Maya Day Club' location='Phoenix, AZ'/>
      </div>
    </Container>
  );
}

export default Home;