import React from 'react';
import { Segment,Grid,Image,Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

function MenuBarMobile(){
  return(
    <Segment style={styles.container}>
      <Grid >
        <Grid.Row>
          <Grid.Column width={4} style={styles.loginImage}>
             <Image src='./client/assets/images/logo.png' size='big' />
          </Grid.Column>
          <Grid.Column width={2} />

          <Grid.Column width={5} as={Link} to='/login' style={styles.loginContainer}>
             <Icon name="user circle" size='large'/>
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
    fontSize:12,
    textDecoration: 'underline',
  },
  loginContainer:{
    marginTop:'10px',
    color:'black'
  },
  loginImage:{
    marginTop:'10px'
  }
}


export default MenuBarMobile;
