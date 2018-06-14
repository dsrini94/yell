import React,{ Component } from 'react';

import { Menu, Segment, Table, Checkbox, Grid, Header, Label, Button, Pagination } from 'semantic-ui-react';

import SwipeableViews from 'react-swipeable-views';

import YellData from './../data/yellData.js'
import Graph1Data from './../data/graph1Data.js';
import Graph2Data from './../data/graph2Data.js';
import Graph3Data from './../data/graph3Data.js';
import Graph4Data from './../data/graph4Data.js';
import connectData from './../data/connectData.js';
import reputationData from './../data/reputationData.js';
import freelistingsData from './../data/freelistingsData.js';



import Charts from './chart.jsx'

export default class TableMenu extends Component
{
  constructor()
  {
    super();
    this.state={
      activeItem:'Yell.com',
      index:0,
      checkBox:false,
      graphIndex:0,
      preDisabled:true,
      nextDisabled:false,
      activePage:1
    }
  }

   handleItemClick(e, { name }) {
     if(name == "Yell.com")
      this.setState({ activeItem: name,index:0 })
     else
     if (name == "Connect")
      this.setState({ activeItem: name,index:1 })
     else
     if(name == "Reputation")
      this.setState({ activeItem: name,index:2 })
     else
     if(name == "Freelistings")
       this.setState({ activeItem: name,index:3 })

 }

 renderFreelistingsData()
 {
   return(
   freelistingsData.map((item,key)=>{
     console.log(item.company);
     return(
       <Table.Row key={key}>
          <Table.Cell collapsing style={{padding:0}}>
            <div style={{padding:3,float:'left',height:53}}>
            </div>
            <Checkbox style={{float:'left',padding:8}} checked={this.state.checkBox}/>
          </Table.Cell>
          <Table.Cell>{item.id}</Table.Cell>
          <Table.Cell>{item.company}</Table.Cell>
          <Table.Cell>{item.address}</Table.Cell>
          <Table.Cell><span>{item.telephone}</span></Table.Cell>
          <Table.Cell>edit</Table.Cell>
        </Table.Row>
      );

   })
 )
 }

 renderReputationData()
 {
   return(
     reputationData.map((item,key)=>{
       var color =  item.status == 'Live' ? 'green' : '#ed9147';
       return(
         <Table.Row key={key}>
            <Table.Cell collapsing style={{padding:0}}>
              <div style={{padding:3,backgroundColor:color,float:'left',height:53}}>
              </div>
              <Checkbox style={{float:'left',padding:8}} checked={this.state.checkBox}/>
            </Table.Cell>
            <Table.Cell>{item.name}</Table.Cell>
            <Table.Cell>{item.order}</Table.Cell>
            <Table.Cell>{item.date}</Table.Cell>
            <Table.Cell><span style={{color:color,fontWeight:'bold'}}>{item.status}</span></Table.Cell>
            <Table.Cell>edit</Table.Cell>
          </Table.Row>
  );

     })
   )
 }

 renderConnectData()
 {
   return(
     connectData.map((item,key)=>{
       var color =  item.status == 'Live' ? 'green' : '#ed9147';
       return(
         <Table.Row key={key}>
            <Table.Cell collapsing style={{padding:0}}>
              <div style={{padding:3,backgroundColor:color,float:'left',height:53}}>
              </div>
              <Checkbox style={{float:'left',padding:8}} checked={this.state.checkBox}/>
            </Table.Cell>
            <Table.Cell>{item.name}</Table.Cell>
            <Table.Cell>{item.order}</Table.Cell>
            <Table.Cell>{item.date}</Table.Cell>
            <Table.Cell><span style={{color:color,fontWeight:'bold'}}>{item.status}</span></Table.Cell>
            <Table.Cell>edit</Table.Cell>
          </Table.Row>
  );

     })
   )
 }

 handlePrevious()
 {
   if(this.state.graphIndex == 1)
      this.setState({graphIndex:this.state.graphIndex-1,preDisabled:true,nextDisabled:false})
    else
      this.setState({graphIndex:this.state.graphIndex-1,preDisabled:false,nextDisabled:false})
 }

 handleNext()
 {
   if(this.state.graphIndex == 0)
      this.setState({graphIndex:this.state.graphIndex+1,nextDisabled:true,preDisabled:false})
    else
      this.setState({graphIndex:this.state.graphIndex+1,nextDisabled:false,preDisabled:false})
 }

 handlePaginationChange(e, { activePage }) {
   this.setState({activePage})
 }

 renderTableData()
 {

   if(this.state.activePage == 1)
   {
     return(
       YellData.map((item,key)=>{
         var color =  item.status == 'Live' ? 'green' : '#ed9147';
         if(key <= 5)
         {
           return(
             <Table.Row key={key}>
                <Table.Cell collapsing style={{padding:0}}>
                  <div style={{padding:3,backgroundColor:color,float:'left',height:53}}>
                  </div>
                  <Checkbox style={{float:'left',padding:8}} checked={this.state.checkBox}/>
                </Table.Cell>
                <Table.Cell>{item.name}</Table.Cell>
                <Table.Cell>{item.order}</Table.Cell>
                <Table.Cell>{item.classification}</Table.Cell>
                <Table.Cell>{item.location}</Table.Cell>
                <Table.Cell>{item.date}</Table.Cell>
                <Table.Cell><span style={{color:color,fontWeight:'bold'}}>{item.status}</span></Table.Cell>
                <Table.Cell>edit</Table.Cell>
              </Table.Row>
            );
         }


       })
     )
   }

   else
   {
     return(
       YellData.map((item,key)=>{
         var color =  item.status == 'Live' ? 'green' : '#ed9147';
         if(key > 5)
         {
           return(
             <Table.Row key={key}>
                <Table.Cell collapsing style={{padding:0}}>
                  <div style={{padding:3,backgroundColor:color,float:'left',height:53}}>
                  </div>
                  <Checkbox style={{float:'left',padding:8}} checked={this.state.checkBox}/>
                </Table.Cell>
                <Table.Cell>{item.name}</Table.Cell>
                <Table.Cell>{item.order}</Table.Cell>
                <Table.Cell>{item.classification}</Table.Cell>
                <Table.Cell>{item.location}</Table.Cell>
                <Table.Cell>{item.date}</Table.Cell>
                <Table.Cell><span style={{color:color,fontWeight:'bold'}}>{item.status}</span></Table.Cell>
                <Table.Cell>edit</Table.Cell>
              </Table.Row>
            );
         }


       })
     )
   }


 }

  render()
  {
    const { activeItem } = this.state

    return(
      <div style={{marginTop:-10}}>
        <Menu pointing secondary color={'orange'}>
          <Menu.Item name='Yell.com' active={activeItem ==='Yell.com' } onClick={this.handleItemClick.bind(this)}>
              Yell.com
              <Label color='orange'>10</Label>
          </Menu.Item>
          <Menu.Item name='Connect' active={activeItem === 'Connect'} onClick={this.handleItemClick.bind(this)} >
            Connect
            <Label color='orange'>3</Label>
          </Menu.Item>
          <Menu.Item name='Reputation' active={activeItem === 'Reputation'} onClick={this.handleItemClick.bind(this)} >
            Reputation
            <Label color='orange'>3</Label>
          </Menu.Item>
          <Menu.Item name='Freelistings' active={activeItem === 'Freelistings'} onClick={this.handleItemClick.bind(this)} >
            Freelistings
          </Menu.Item>

          <Menu.Item >
            <Button color='orange' disabled = {!this.state.checkBox}>Multi Edit</Button>
          </Menu.Item>
        </Menu>



        <SwipeableViews index={this.state.index}>
          <div style={{overflow:'hidden'}}>
            <Grid>

              <Grid.Row>
                <Grid.Column width={1}>
                  <Button circular color={'orange'} icon='arrow left' disabled={this.state.preDisabled} onClick={this.handlePrevious.bind(this)} style={{marginLeft:20,marginTop:100}}/>
                </Grid.Column>

                <Grid.Column width={14}>
                <SwipeableViews index={this.state.graphIndex}>
                  <div style={{overflow:'hidden'}}>

                    <Grid>
                      <Grid.Row >

                        <Grid.Column width={6}>
                          <Charts graphData={Graph1Data} width={350} height={200} heading={'Calls'} count={542} icon={'mobile'} color={['#0083CA']}/>
                        </Grid.Column>

                        <Grid.Column width={7}>
                          <Charts graphData={Graph2Data} width={350} height={200} heading={'Clicks'} count={265} icon={'pointing up'} color={['#ed9147']}/>
                        </Grid.Column>

                      </Grid.Row>
                    </Grid>

                  </div>

                  <div style={{overflow:'hidden'}}>
                    <Grid>
                      <Grid.Row >
                        <Grid.Column width={6}>
                          <center><Charts graphData={Graph3Data} width={350} height={200} heading={'Impression'} count={26010} icon={'eye'} color={['#e0c10f']}/></center>
                        </Grid.Column>

                        <Grid.Column width={7}>
                          <center><Charts graphData={Graph4Data} width={350} height={200} heading={'Activities'} count={561} icon={'cubes'} color={['#269e1e']}/></center>
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>
                  </div>

                </SwipeableViews>
              </Grid.Column>


                <Grid.Column width={1}>
                  <Button circular color={'orange'} icon='arrow right' disabled={this.state.nextDisabled} onClick={this.handleNext.bind(this)} style={{marginTop:100,marginLeft:-100}}/>
                </Grid.Column>

              </Grid.Row>

              <Grid.Row>
                <Grid.Column width={16}>
                    <Table celled >
                       <Table.Header>
                         <Table.Row>
                           <Table.HeaderCell> <Checkbox onChange={()=>this.setState({checkBox:!this.state.checkBox})}/></Table.HeaderCell>
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
                    <center> <Pagination defaultActivePage={1} totalPages={2} style={{marginTop:10}} onPageChange={this.handlePaginationChange.bind(this)}/> </center>

                </Grid.Column>


              </Grid.Row>
            </Grid>

          </div>
          <div style={{overflow:'hidden'}}>
            <Grid>

              <Grid.Row>
                <Grid.Column width={1}>
                  <Button circular color={'orange'} icon='arrow left' disabled={this.state.preDisabled} onClick={this.handlePrevious.bind(this)} style={{marginLeft:20,marginTop:100}}/>
                </Grid.Column>

                <Grid.Column width={14}>
                <SwipeableViews index={this.state.graphIndex}>
                  <div style={{overflow:'hidden'}}>

                    <Grid>
                      <Grid.Row >

                        <Grid.Column width={6}>
                          <Charts graphData={Graph4Data} width={350} height={200} heading={'Calls'} count={542} icon={'mobile'} color={['#0083CA']}/>
                        </Grid.Column>

                        <Grid.Column width={7}>
                          <Charts graphData={Graph1Data} width={350} height={200} heading={'Clicks'} count={265} icon={'pointing up'} color={['#ed9147']}/>
                        </Grid.Column>

                      </Grid.Row>
                    </Grid>

                  </div>

                  <div style={{overflow:'hidden'}}>
                    <Grid>
                      <Grid.Row >
                        <Grid.Column width={6}>
                          <center><Charts graphData={Graph2Data} width={350} height={200} heading={'Impression'} count={26010} icon={'eye'} color={['#e0c10f']}/></center>
                        </Grid.Column>

                        <Grid.Column width={7}>
                          <center><Charts graphData={Graph3Data} width={350} height={200} heading={'Activities'} count={561} icon={'cubes'} color={['#269e1e']}/></center>
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>
                  </div>

                </SwipeableViews>
              </Grid.Column>


                <Grid.Column width={1}>
                  <Button circular color={'orange'} icon='arrow right' disabled={this.state.nextDisabled} onClick={this.handleNext.bind(this)} style={{marginTop:100,marginLeft:-100}}/>
                </Grid.Column>

              </Grid.Row>

              <Grid.Row>
                <Grid.Column width={16}>
                    <Table celled >
                       <Table.Header>
                         <Table.Row>
                           <Table.HeaderCell> <Checkbox onChange={()=>this.setState({checkBox:!this.state.checkBox})}/></Table.HeaderCell>
                           <Table.HeaderCell>Product Name</Table.HeaderCell>
                           <Table.HeaderCell>Order No./Line No</Table.HeaderCell>
                           <Table.HeaderCell>Date</Table.HeaderCell>
                           <Table.HeaderCell>Status</Table.HeaderCell>
                           <Table.HeaderCell />
                         </Table.Row>
                       </Table.Header>

                       <Table.Body>
                         {this.renderConnectData()}
                       </Table.Body>

                     </Table>
                </Grid.Column>


              </Grid.Row>
            </Grid>

          </div>
          <div style={{overflow:'hidden'}}>
            <Grid>

              <Grid.Row>
                <Grid.Column width={1}>
                  <Button circular color={'orange'} icon='arrow left' disabled={this.state.preDisabled} onClick={this.handlePrevious.bind(this)} style={{marginLeft:20,marginTop:100}}/>
                </Grid.Column>

                <Grid.Column width={14}>
                <SwipeableViews index={this.state.graphIndex}>
                  <div style={{overflow:'hidden'}}>

                    <Grid>
                      <Grid.Row >

                        <Grid.Column width={6}>
                          <Charts graphData={Graph2Data} width={350} height={200} heading={'Calls'} count={542} icon={'mobile'} color={['#0083CA']}/>
                        </Grid.Column>

                        <Grid.Column width={7}>
                          <Charts graphData={Graph4Data} width={350} height={200} heading={'Clicks'} count={265} icon={'pointing up'} color={['#ed9147']}/>
                        </Grid.Column>

                      </Grid.Row>
                    </Grid>

                  </div>

                  <div style={{overflow:'hidden'}}>
                    <Grid>
                      <Grid.Row >
                        <Grid.Column width={6}>
                          <center><Charts graphData={Graph1Data} width={350} height={200} heading={'Impression'} count={26010} icon={'eye'} color={['#e0c10f']}/></center>
                        </Grid.Column>

                        <Grid.Column width={7}>
                          <center><Charts graphData={Graph3Data} width={350} height={200} heading={'Activities'} count={561} icon={'cubes'} color={['#269e1e']}/></center>
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>
                  </div>

                </SwipeableViews>
              </Grid.Column>


                <Grid.Column width={1}>
                  <Button circular color={'orange'} icon='arrow right' disabled={this.state.nextDisabled} onClick={this.handleNext.bind(this)} style={{marginTop:100,marginLeft:-100}}/>
                </Grid.Column>

              </Grid.Row>
              <Grid.Row>
                <Grid.Column width={16}>
                    <Table celled >
                       <Table.Header>
                         <Table.Row>
                           <Table.HeaderCell> <Checkbox onChange={()=>this.setState({checkBox:!this.state.checkBox})}/></Table.HeaderCell>
                           <Table.HeaderCell>Product Name</Table.HeaderCell>
                           <Table.HeaderCell>Order No./Line No</Table.HeaderCell>
                           <Table.HeaderCell>Date</Table.HeaderCell>
                           <Table.HeaderCell>Status</Table.HeaderCell>
                           <Table.HeaderCell />
                         </Table.Row>
                       </Table.Header>

                       <Table.Body>
                         {this.renderReputationData()}
                       </Table.Body>

                     </Table>
                </Grid.Column>

              </Grid.Row>
            </Grid>

          </div>
          <div style={{overflow:'hidden'}}>
            <Grid>
              <Grid.Row>
                <Grid.Column width={16}>
                  <Segment inverted color={'grey'}>
                    <center>No Prformance Data</center>
                  </Segment>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </div>
        </SwipeableViews>
      </div>
    );
  }
}
