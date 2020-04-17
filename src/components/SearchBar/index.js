import React from 'react'
import { Input } from 'semantic-ui-react'
import './styles.css'

function SearchBar() {
  return (
    <Input
      fluid
      icon='search'
      iconPosition='left'
      placeholder='Search for a local AZ bar, restaurant, coffee...'
      className='searchInput'
    />
  )
}

export default SearchBar;