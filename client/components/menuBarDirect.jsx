import React from 'react';
import { Segment,Grid,Image,Icon,Dropdown } from 'semantic-ui-react'

function MenuBar(){
  return(
    <Segment style={styles.container}>
      <Grid >
        <Grid.Row>
          <Grid.Column width={2}/>

          <Grid.Column width={2}>
             <Image src='./client/assets/images/businessLogo.png' size='large' style={styles.image}/>
          </Grid.Column>
          <Grid.Column width={8}/>
          <Grid.Column width={3} style={styles.loginContainer}>
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

  container:{
    margin:0,
    padding:0
  },
  line:{
    padding:2,
    borderRadius:0
  },
  loginContainer:{
    marginTop:'10px',
    padding:10
  },
  image:{
    padding:10
  },
  loginText:{
    fontSize:15,
  }
}


export default MenuBar;
