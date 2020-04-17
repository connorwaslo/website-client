import React, { useState } from 'react'
import { Container } from 'semantic-ui-react'
import BusinessCard from "../components/BusinessCard";
import SearchBar from '../components/SearchBar';
import Header from '../components/Header';
import Banner from '../components/Banner';
import { useSelector } from 'react-redux';

function Home() {
  const [search, setSearch] = useState('');
  const [visibleBusinesses, setVisibleBusinesses] = useState([]); // Todo: Load businesses from redux
  const [showBanner, setShowBanner] = useState(true);

  const { allBusinesses } = useSelector(state => ({
    allBusinesses: state.businesses.all
  }));


  function handleChangeSearch(e) {
    e.preventDefault();

    let newSearch = e.target.value;

    // Filter visible businesses by new search term
    let showBusinesses = allBusinesses.filter(biz => biz.business_name.includes(newSearch));

    console.log(showBusinesses);

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

        <BusinessCard name='Maya Day Club' location='Phoenix, AZ'/>
      </div>
    </Container>
  );
}

export default Home;