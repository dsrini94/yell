import React, {Component} from 'react';
import {Grid} from 'semantic-ui-react';
import RegisterHeader from '../components/registerHeader.jsx';
import RegisterFields from '../components/registerFields.jsx';
import AppBar from '../components/appBar.jsx'

export default class Registrationpage extends Component {
  constructor(){
    super();
    this.state={

    }
  }
  render() {
    return (
      <div>
        <Grid>
          <Grid.Row only='computer'>
            <Grid.Column width={16}>
              <AppBar />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row only='computer'>
            <Grid.Column width={16}>
              <RegisterHeader />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row only='computer'>
            <Grid.Column width={16}>
              <RegisterFields />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
