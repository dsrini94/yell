import React ,{Component} from 'react';
import { Grid,Icon,Message } from 'semantic-ui-react'

export default class AccountCreatedPage extends Component{
  constructor(props){
    super(props);
  }
  render(){
    console.log('this.props.match.params.value',this.props.location.state.message);
  return(
      <Grid >
        <Grid.Row>
          <Grid.Column width={5}/>
          <Grid.Column width={6}>
            <Message success>
              <p>
                {this.props.location.state.message}
                You may now <span style={{textDecoration:'underline'}}>log-in</span>'
              </p>
            </Message>
          </Grid.Column>
          <Grid.Column width={5}/>
        </Grid.Row>
      </Grid>
  )
}
}
