import React from 'react';
import { Segment,Grid,Image,Icon } from 'semantic-ui-react'

function MenuBar(){
  return(
    <Segment style={styles.container}>
      <Grid >
        <Grid.Row>
          <Grid.Column width={2}/>

          <Grid.Column width={2}>
             <Image src='./client/assets/images/logo.png' size='large' />
          </Grid.Column>

          <Grid.Column width={7}/>

          <Grid.Column width={2} style={styles.loginContainer}>
             <Icon name="user circle" size='big'/>
             <span style={styles.loginText}>Log In</span>
          </Grid.Column>

          <Grid.Column width={2} style={styles.loginContainer}>
            <span style={styles.loginText}>Create Account</span>
          </Grid.Column>

        </Grid.Row>
      </Grid>
    </Segment>
  )
}

const styles={

  container:{
    margin:0
  },
  loginText:{
    fontSize:18,
    textDecoration: 'underline',
  },
  loginContainer:{
    marginTop:'10px'
  }
}


export default MenuBar;
