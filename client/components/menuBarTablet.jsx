import React from 'react';
import { Segment,Grid,Image,Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

function MenuBarTablet(){
  return(
    <Segment style={styles.container}>
      <Grid >
        <Grid.Row>
          <Grid.Column width={2}/>

          <Grid.Column width={2}>
             <Image src='./client/assets/images/logo.png' size='large' />
          </Grid.Column>

          <Grid.Column width={4}/>

          <Grid.Column width={3} as={Link} to='/login' style={styles.loginContainer}>
             <Icon name="user circle" size='big'/>
             <span style={styles.loginText}>Log In</span>
          </Grid.Column>

          <Grid.Column width={5} as={Link} to='/register' style={styles.loginContainer}>
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
    marginTop:'10px',
    color:'black'
  }
}


export default MenuBarTablet;
