import React from 'react';
import { Segment,Grid,Icon,Dropdown,Menu } from 'semantic-ui-react'

function AppBarMobile(){
  return(
    <Menu inverted attached='top' pointing>
      <Dropdown item icon='bars' simple size="huge">
        <Dropdown.Menu>
          <Dropdown.Item>Download the App</Dropdown.Item>
          <Dropdown.Item>Get a free listing</Dropdown.Item>
          <Dropdown.Divider />
        </Dropdown.Menu>
      </Dropdown>

      <Menu.Menu position='left'>
        <Menu.Item >
          <span style={styles.titleText}>Yell.com</span>
        </Menu.Item>

        <Menu.Item >
          <span >Advertise</span>
          <Icon name="phone" />
          <span >0800 777 449</span>
        </Menu.Item>
      </Menu.Menu>

    </Menu>
  )
}

const styles={
  compName:{
    color:'yellow',
    fontWeight:'bold'
  },
  titleText:{
    color:'yellow'
  },
  container:{
    margin:0,
    borderRadius:0
  }
}


export default AppBarMobile;
