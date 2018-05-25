import React, {Component} from 'react';
import {Grid,Input} from 'semantic-ui-react';

export default class YellDirectFields extends Component {
  constructor(){
    super();
    this.state={
    }
  }
  render(){
    return(
        <Grid style={{width:'105%'}} >
          <Grid.Row>
            <Grid.Column width={16}>
              <h3>Account Number</h3>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={16}>
              <Input fluid/>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={16}>
              <h3>Postcode</h3>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={16}>
              <Input fluid/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
    )
  }
}
