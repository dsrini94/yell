import React,{Component}from 'react';
import {Grid,Icon } from 'semantic-ui-react';
import {AreaChart} from 'react-easy-chart';


export default class Chart extends Component {
  constructor(props){
    super(props);
  }
  render(){

    return(
      <Grid>
        <Grid.Row>
          <Grid.Column width={2}/>
          <Grid.Column width={12} >
            <h5> <Icon name={this.props.icon} size='large' /> {this.props.heading}  &nbsp; {this.props.count}  &nbsp; <Icon name='info circle' size='small' /></h5>
          </Grid.Column>
            <Grid.Column width={2}/>
        </Grid.Row>
        <Grid.Row style={{marginTop:-40}}>
          <Grid.Column width={2}/>
          <Grid.Column width={12} >
            <AreaChart
              axes
              xType={'text'}
              areaColors={this.props.color}
              margin={{top: 30, right: 30, bottom: 30, left: 30}}
              width={this.props.width}
              height={this.props.height}
               data={[
                 this.props.graphData
               ]}
             />
          </Grid.Column>
          <Grid.Column width={2}/>
        </Grid.Row>
      </Grid>
    )
  }
}
// const styles={
//   compName:{
//     color:'yellow',
//     fontWeight:'bold'
//   },
//   text:{
//     fontWeight:'bold'
//   },
//   container:{
//     margin:0,
//     borderRadius:0
//   }
// }
