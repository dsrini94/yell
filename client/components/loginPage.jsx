import React, {Component} from 'react';
import {Grid,Input} from 'semantic-ui-react';
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
          <Grid.Row>
            <Grid.Column width={5} />
            <Grid.Column width ={6}>
              <Grid>
                <Grid.Row>
                  <Grid.Column width={16}>
                    <h3 style={{textAlign:'center'}}>Login</h3>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={16}>
                    <h4>Email Address</h4>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={16}>
                    <Input />
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Grid.Column>
            <Grid.Column width={5} />
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
