import React, { useEffect, useState } from 'react';
import { Container, Image } from 'semantic-ui-react'
import SearchBar from '../components/SearchBar';
import Header from '../components/Header';
import Banner from '../components/Banner';
import { useSelector } from 'react-redux';
import BusinessContainer from '../components/BusinessContainer';

function Home() {
  const { allBusinesses } = useSelector(state => ({
    allBusinesses: state.businesses.all
  }));

  const [search, setSearch] = useState('');
  const [visibleBusinesses, setVisibleBusinesses] = useState(allBusinesses);
  const [showBanner, setShowBanner] = useState(true);

  function handleChangeSearch(e) {
    e.preventDefault();

    let newSearch = e.target.value;

    // Filter visible businesses by new search term
    // Convert both terms to lowercase for ease of use
    let showBusinesses = allBusinesses.filter(biz => biz.business_name.toLowerCase().includes(newSearch.toLowerCase()));

    setSearch(e.target.value);
    setVisibleBusinesses(showBusinesses);
  }

  return (
    <Container>
      <Header/>

      <div style={{ paddingTop: '100px' }}>
        <Banner
          visible={showBanner}
          header='One credit purchase could save a business from closing because of COVID-19.'
          subheader="Buy credit now and get it back plus more for use later. It's like a loan for the business.
                    Except faster. Plus, by committing to in-store credit, the business is able to give you
                    even extra bang for your buck."
          dismiss={() => setShowBanner(false)}
        />

        <div style={{ marginTop: '3em', marginBottom: '3em' }}>
          <SearchBar search={search} handleChangeSearch={handleChangeSearch}/>
        </div>

        <BusinessContainer businesses={visibleBusinesses}/>
      </div>
    </Container>
  );
}

export default Home;