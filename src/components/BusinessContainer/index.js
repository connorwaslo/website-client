import React from 'react'
import { Grid } from 'semantic-ui-react'
import BusinessCard from '../BusinessCard'

function BusinessContainer({ businesses }) {
  const NUM_COLUMNS = 4;

  function renderRows() {
    const numRows = Math.ceil(businesses.length / 4);
    let rows = [];

    // Iterate through every row
    for (let i = 0; i < numRows; i++) {
      // Grab the current row of businesses from the list
      const curRow = businesses.slice(i * NUM_COLUMNS, i * NUM_COLUMNS + NUM_COLUMNS);

      // Push the row to the list of rows for rendering
      rows.push(
        <Grid.Row stretched>
          {curRow.map(business => (
            renderCard(business)
          ))}
        </Grid.Row>
      )
    }

    return rows;
  }

  function renderCard(business) {
    const name = business.business_name;
    const location = 'Phoenix, AZ';
    const img = business.pic;
    const link = business.giftcardUrl;

    return (
      <Grid.Column>
        <BusinessCard
          name={name}
          location={location}
          img={img}
          link={link}
        />
      </Grid.Column>
    )
  }

  return (
    <Grid doubling columns={NUM_COLUMNS}>
      {renderRows()}
    </Grid>
  )
}

export default BusinessContainer;