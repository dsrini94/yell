import React,{ Component } from 'react';

import { Menu, Segment, Table, Checkbox, Grid, Header } from 'semantic-ui-react';

import SwipeableViews from 'react-swipeable-views';

import YellData from './../data/yellData.js'
import Graph1Data from './../data/graph1Data.js';


import Charts from './chart.jsx'

export default class TableMenu extends Component
{
  constructor()
  {
    super();
    this.state={
      activeItem:'Yell.com (13)',
      index:0
    }
  }

   handleItemClick(e, { name }) {
     this.setState({ activeItem: name,index:e })
 }

 renderTableData()
 {
   return(
     YellData.map((item,key)=>{
       var color =  item.status == 'live' ? 'green' : '#ed9147';
       return(
         <Table.Row key={key}>
            <Table.Cell collapsing style={{padding:0}}>
              <div style={{padding:3,backgroundColor:color,float:'left',height:32}}>
              </div>
              <Checkbox style={{float:'left',padding:8}} />
            </Table.Cell>
            <Table.Cell>{item.name}</Table.Cell>
            <Table.Cell>{item.number}</Table.Cell>
            <Table.Cell>{item.classification}</Table.Cell>
            <Table.Cell>{item.location}</Table.Cell>
            <Table.Cell>{item.date}</Table.Cell>
            <Table.Cell><span style={{color:color,fontWeight:'bold'}}>{item.status}</span></Table.Cell>
            <Table.Cell>edit</Table.Cell>
          </Table.Row>
  );

     })
   )
 }

  render()
  {
    const { activeItem } = this.state

    return(
      <div>
        <Menu  pointing secondary>
          <Menu.Item name='Yell.com (13)' active={activeItem ==='Yell.com (13)' } onClick={this.handleItemClick.bind(this,0)} />
          <Menu.Item name='connect (1)' active={activeItem === 'connect (1)'} onClick={this.handleItemClick.bind(this,1)} />
          <Menu.Item name='Reputation (2)' active={activeItem === 'Reputation (2)'} onClick={this.handleItemClick.bind(this,2)} />
          <Menu.Item name='Freelistings (5)' active={activeItem === 'Freelistings (5)'} onClick={this.handleItemClick.bind(this,3)} />
        </Menu>

        <SwipeableViews index={this.state.index}>
          <div style={{overflow:'hidden'}}>
            <Grid>
              <Grid.Row>
                <Grid.Column width={12}>
                    <Table celled compact definition>
                       <Table.Header>
                         <Table.Row>
                           <Table.HeaderCell> <Checkbox /></Table.HeaderCell>
                           <Table.HeaderCell>Advert Name</Table.HeaderCell>
                           <Table.HeaderCell>Order Number/Line</Table.HeaderCell>
                           <Table.HeaderCell>Classification</Table.HeaderCell>
                           <Table.HeaderCell>Location</Table.HeaderCell>
                           <Table.HeaderCell>Live Date</Table.HeaderCell>
                           <Table.HeaderCell>Status</Table.HeaderCell>
                           <Table.HeaderCell />
                         </Table.Row>
                       </Table.Header>

                       <Table.Body>
                         {this.renderTableData()}
                       </Table.Body>

                     </Table>
                </Grid.Column>

                <Grid.Column width={4} style={{marginLeft:-40}}>
                  <center><Header as={'h4'}>Performance on Yell.Com</Header></center>
                  <br/>
                  <Charts graphData={Graph1Data} heading={'Calls'} count={542} icon={'mobile'} color={['#0083CA']}/>
                  <Charts graphData={Graph1Data} heading={'Clicks'} count={265} icon={'pointing up'} color={['#ed9147']}/>
                  <Charts graphData={Graph1Data} heading={'Activities'} count={561} icon={'cubes'} color={['#269e1e']}/>
                  <Charts graphData={Graph1Data} heading={'Impression'} count={26010} icon={'eye'} color={['#e0c10f']}/>
                </Grid.Column>
              </Grid.Row>
            </Grid>

          </div>
          <div >
            slide n°2
          </div>
          <div >
            slide n°3
          </div>
          <div >
            slide n°4
          </div>
        </SwipeableViews>

      </div>
    );
  }
}
