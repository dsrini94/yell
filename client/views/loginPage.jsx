import React, {Component} from 'react';
import {Grid} from 'semantic-ui-react';
import LoginHeader from '../components/loginHeader.jsx';
import LoginFields from '../components/loginFields.jsx';

export default class Loginpage extends Component {
  constructor(){
    super();
    this.state={

    }
  }
  render() {
    return (
      <div>
        <Grid>
          <Grid.Row only='large screen'>
            <Grid.Column width={16}>
              <LoginHeader />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row only='large screen'>
            <Grid.Column width={16}>
              <LoginFields />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
