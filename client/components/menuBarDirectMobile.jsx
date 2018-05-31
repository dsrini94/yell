import React from 'react';
import { Segment,Grid,Image,Icon,Dropdown } from 'semantic-ui-react'

function MenuBarDirectMobile(){
  return(
    <Segment style={styles.container}>
      <Grid >
        <Grid.Row>

          <Grid.Column width={2} />

          <Grid.Column width={4}>
            <Image src={'./client/assets/images/businessLogo.png'} size="large"/>
          </Grid.Column>

          <Grid.Column width={4} />

          <Grid.Column width={6} style={styles.loginContainer}>
            <Dropdown text="Alans's Account" style={styles.loginText}>
            <Dropdown.Menu>
              <Dropdown.Item text='My profile' />
              <Dropdown.Item text='Settings' />
              <Dropdown.Item text='Logout' />
            </Dropdown.Menu>
          </Dropdown>
          </Grid.Column>

        </Grid.Row>

        <Grid.Row style={{marginTop:-20}}>
          <Grid.Column width={16}>
            <Segment inverted color={'yellow'} style={styles.line}>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  )
}

const styles={

  line:{
    padding:2,
    borderRadius:0
  },
  loginContainer:{
    //marginTop:'5px',
    padding:10
  },
  loginText:{
    fontSize:15,
  },
  container:{
    paddingBottom:0,
    paddingLeft:0,
    paddingRight:0,
  }
}


export default MenuBarDirectMobile;
