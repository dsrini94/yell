import React, { Component } from 'react';

import { Grid, Segment } from 'semantic-ui-react'


export default class InfoBox extends Component
{

  constructor(props)
  {
    super(props);
  }

  render()
  {

    const styles={
      container:{
        borderRadius:0,
        padding:5
      },
      numberContainer:{
        backgroundColor:this.props.color,
        padding:45
      },
      number:{
        fontWeight:'bold',
        color:'white',
        fontSize:55
      },
      textContainer:{
        paddingTop:30
      },
      text:{
        fontSize:18
      },
      tagLine:{
        fontSize:12
      }
    }

    return(
      <Segment style={styles.container}>
        <Grid>
          <Grid.Row columns={2}>
            <Grid.Column style={styles.numberContainer}>
              <div >
                <center><span style={styles.number}>{this.props.number}</span></center>
              </div>
            </Grid.Column>

            <Grid.Column>
              <div style={styles.textContainer}>
                <span style={styles.text}>{this.props.text}</span>
                <br/>
                <span style={styles.tagLine}>{this.props.tagLine}</span>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    );
  }
}
