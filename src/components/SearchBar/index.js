import React from 'react'
import { Input } from 'semantic-ui-react'

function SearchBar() {
  return (
    <Input
      fluid
      icon='search'
      iconPosition='left'
      placeholder='Search for a local AZ bar, restaurant, coffee...'
    />
  )
}

export default SearchBar;