import React from 'react';
import { Segment,Grid,Icon } from 'semantic-ui-react'

function AppBarTablet(){
  return(
    <Segment inverted style={styles.container}>
      <Grid >
        <Grid.Row>
          <Grid.Column width={1}/>

          <Grid.Column width={2}>
            <span style={styles.compName}>Yell.com</span>
          </Grid.Column>

          <Grid.Column width={3}>
            <span style={styles.text}>Yell Business</span>
          </Grid.Column>

          <Grid.Column width={2}>
            <span style={styles.text}>Download the app</span>
          </Grid.Column>

          <Grid.Column width={2}>
            <span style={styles.text}>Get a free listing</span>
          </Grid.Column>

          <Grid.Column width={5}>
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
    color:'yellow',
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


export default AppBarTablet;
