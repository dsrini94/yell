import React from 'react';
import { Segment,Grid,Image,Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
function MenuBarSuccess(){
  return(
    <Segment style={styles.container}>
      <Grid >
        <Grid.Row>
          <Grid.Column width={2}/>

          <Grid.Column width={2}>
             <Image src='./client/assets/images/logo.png' size='large' />
          </Grid.Column>


          <Grid.Column width={12} >
          </Grid.Column>

        </Grid.Row>
      </Grid>
    </Segment>
  )
}

const styles={

  container:{
    margin:0
  }
}


export default MenuBarSuccess;
