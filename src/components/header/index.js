import React from 'react'
import { Menu, Image } from 'semantic-ui-react'
import './styles.css'

function Header() {
  return (
    <Menu
      borderless
      fixed='top'
      className='brandHeader'>

      <Menu.Item>
        <Image
          size='small'
          src={require('../../temp_assets/logo-light.svg')}/>
      </Menu.Item>
    </Menu>
  )
}

export default Header;