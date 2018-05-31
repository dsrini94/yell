import React from 'react';
import { Segment,Grid,Image,Icon } from 'semantic-ui-react'

function MenuBarDirectMobile(){
  return(
    <Segment style={styles.container}>
      <Grid >
        <Grid.Row>

          <Grid.Column width={2} />

          <Grid.Column width={4}>
            <Image src={'./client/assets/images/businessLogo.png'} size="large"/>
          </Grid.Column>

          <Grid.Column width={5} />

          <Grid.Column width={5} style={styles.loginContainer}>
            <span style={styles.loginText}>Alan's Account</span>
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
    marginTop:'10px',
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
