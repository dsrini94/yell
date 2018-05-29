import React,{Component}from 'react';
import {Grid,Icon } from 'semantic-ui-react';
import {AreaChart} from 'react-easy-chart';

export default class Chart extends Component {
  constructor(props){
    super(props);
  }
  render(){
    var icon='mobile';
    var text='CALLS';
    var count=542;
    var color =['#0083CA'];
    var dataArray=[
      { x: 'May', y: 10 },
      { x: 'Jun', y: 8 },
      { x: 'Jul', y: 4 },
      { x: 'Aug', y: 7 },
      { x: 'Sep', y: 5 },
      { x: 'Oct', y: 8 },
      { x: 'Nov', y: 7 },
      { x: 'Dec', y: 3 },
      { x: 'Jan 2018', y: 2 },
      { x: 'Feb', y: 6 },
      { x: 'Mar', y: 8 },
      { x: 'Apr', y: 7 }
    ];
    return(
      <Grid>
        <Grid.Row>
          <Grid.Column width={2}/>
          <Grid.Column width={12} style={{marginTop:'15px'}}>
            <h2> <Icon name={icon} size='big' /> {text}  &nbsp; {count}  &nbsp; <Icon name='info circle' size='small' /></h2>
          </Grid.Column>
            <Grid.Column width={2}/>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={2}/>
          <Grid.Column width={12} >
            <AreaChart
              axes
              xType={'text'}
              areaColors={color}
              margin={{top: 30, right: 30, bottom: 30, left: 30}}
              width={550}
              height={250}
               data={[
                 dataArray
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
