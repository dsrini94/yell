import React from 'react';
import { Segment,Grid,Icon } from 'semantic-ui-react'

function AppBar(){
  return(
    <Segment inverted style={styles.container}>
      <Grid >
        <Grid.Row>
          <Grid.Column width={2}/>

          <Grid.Column width={1}>
            <span style={styles.compName}>Search</span>
          </Grid.Column>

          <Grid.Column width={2}>
            <span style={styles.text}>Reviews</span>
          </Grid.Column>

          <Grid.Column width={4}/>

          <Grid.Column width={2}>
            <span style={styles.text}>Download the app</span>
          </Grid.Column>

          <Grid.Column width={2}>
            <span style={styles.text}>Get a free listing</span>
          </Grid.Column>

          <Grid.Column width={3}>
            <span style={styles.text}>Advertise</span>
            <Icon name='phone' />
            <span style={styles.text}>0800 777 449</span>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  )
}

const styles={
  compName:{
    fontWeight:'bold'
  },
  text:{
    fontWeight:'bold'
  },
  container:{
    margin:0,
    borderRadius:0
  }
}


export default AppBar;
