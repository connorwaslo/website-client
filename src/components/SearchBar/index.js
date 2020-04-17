import React from 'react'
import { Input } from 'semantic-ui-react'
import './styles.css'

function SearchBar({ search, handleChangeSearch }) {
  return (
    <Input
      fluid
      icon='search'
      iconPosition='left'
      value={search}
      onChange={e => handleChangeSearch(e)}
      placeholder='Search for a local AZ bar, restaurant, coffee...'
      className='searchInput'
    />
  )
}

export default SearchBar;