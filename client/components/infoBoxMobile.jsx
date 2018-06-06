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
        padding:20
      },
      number:{
        fontWeight:'bold',
        color:'white',
        fontSize:30
      },
      textContainer:{
        padding:15
      },
      text:{
        fontSize:15
      },
      tagLine:{
        fontSize:12
      }
    }

    return(
        <Grid>
          <Grid.Row>
            <Grid.Column>
              <div style={styles.numberContainer}>
                <center><span style={styles.number}>{this.props.number}</span></center>
              </div>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row style={{marginTop:-30}}>
            <Grid.Column>
              <div style={styles.textContainer}>
                <center><span style={styles.text}>{this.props.text}</span></center>
                <center><span style={styles.tagLine}>{this.props.tagLine}</span></center>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
    );
  }
}
