import React,{ Component } from 'react';

import { Menu, Segment, Table, Checkbox, Grid, Header, Label, Button, Pagination } from 'semantic-ui-react';

import SwipeableViews from 'react-swipeable-views';

import YellData from './../data/yellData.js'
import Graph1Data from './../data/graph1Data.js';
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
     this.setState({ activeItem: name,index:e })
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
      <div>
        <Menu  pointing secondary>
          <Menu.Item name='Yell.com' active={activeItem ==='Yell.com' } onClick={this.handleItemClick.bind(this,0)}>
              Yell.com
              <Label color='orange'>10</Label>
          </Menu.Item>
          <Menu.Item name='Connect' active={activeItem === 'Connect'} onClick={this.handleItemClick.bind(this,1)} >
            Connect
            <Label color='orange'>1</Label>
          </Menu.Item>
          <Menu.Item name='Reputation' active={activeItem === 'Reputation'} onClick={this.handleItemClick.bind(this,2)} >
            Reputation
            <Label color='orange'>2</Label>
          </Menu.Item>
          <Menu.Item name='Freelistings' active={activeItem === 'Freelistings'} onClick={this.handleItemClick.bind(this,3)} >
            Freelistings
            <Label color='orange'>5</Label>
          </Menu.Item>

          <Menu.Item >
            <Button color='orange' disabled = {!this.state.checkBox}>Multi Edit</Button>
          </Menu.Item>
        </Menu>



        <SwipeableViews index={this.state.index}>
          <div style={{overflow:'hidden'}}>
            <Grid>

              <Grid.Row>
                <SwipeableViews index={this.state.graphIndex}>
                  <div style={{overflow:'hidden'}}>

                    <Grid>
                      <Grid.Row columns={2}>
                        <Grid.Column>
                          <Charts graphData={Graph1Data} width={400} height={250} heading={'Calls'} count={542} icon={'mobile'} color={['#0083CA']}/>
                        </Grid.Column>

                        <Grid.Column>
                          <Charts graphData={Graph1Data} width={400} height={250} heading={'Clicks'} count={265} icon={'pointing up'} color={['#ed9147']}/>
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>

                  </div>

                  <div style={{overflow:'hidden'}}>
                    <Grid>
                      <Grid.Row columns={2}>
                        <Grid.Column>
                          <center><Charts graphData={Graph1Data} width={400} height={250} heading={'Impression'} count={26010} icon={'eye'} color={['#e0c10f']}/></center>
                        </Grid.Column>

                        <Grid.Column>
                          <center><Charts graphData={Graph1Data} width={400} height={250} heading={'Activities'} count={561} icon={'cubes'} color={['#269e1e']}/></center>
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>
                  </div>

                  <div style={{overflow:'hidden'}}>
                  </div>
                </SwipeableViews>
              </Grid.Row>

              <Grid.Row>
                <Grid.Column width={8}>
                    <Button color={'orange'} style={{float:'right'}} disabled={this.state.preDisabled} onClick={this.handlePrevious.bind(this)}>Previous</Button>
                </Grid.Column>
                <Grid.Column width={8}>
                  <Button color={'orange'} disabled={this.state.nextDisabled} onClick={this.handleNext.bind(this)} style={{float:'left'}}>Next</Button>
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
                <SwipeableViews index={this.state.graphIndex}>
                  <div style={{overflow:'hidden'}}>
                    <center><Charts graphData={Graph1Data} width={550} height={250} heading={'Calls'} count={542} icon={'mobile'} color={['#0083CA']}/></center>
                  </div>

                  <div style={{overflow:'hidden'}}>
                    <center><Charts graphData={Graph1Data} width={550} height={250} heading={'Clicks'} count={265} icon={'pointing up'} color={['#ed9147']}/></center>
                  </div>

                  <div style={{overflow:'hidden'}}>
                    <center><Charts graphData={Graph1Data} width={550} height={250} heading={'Activities'} count={561} icon={'cubes'} color={['#269e1e']}/></center>
                  </div>

                  <div style={{overflow:'hidden'}}>
                    <center><Charts graphData={Graph1Data} width={550} height={250} heading={'Impression'} count={26010} icon={'eye'} color={['#e0c10f']}/></center>
                  </div>
                </SwipeableViews>
              </Grid.Row>

              <Grid.Row>
                <Grid.Column width={8}>
                    <Button color={'orange'} style={{float:'right'}} disabled={this.state.preDisabled} onClick={this.handlePrevious.bind(this)}>Previous</Button>
                </Grid.Column>
                <Grid.Column width={8}>
                  <Button color={'orange'} disabled={this.state.nextDisabled} onClick={this.handleNext.bind(this)} style={{float:'left'}}>Next</Button>
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
                <SwipeableViews index={this.state.graphIndex}>
                  <div style={{overflow:'hidden'}}>
                    <center><Charts graphData={Graph1Data} width={550} height={250} heading={'Calls'} count={542} icon={'mobile'} color={['#0083CA']}/></center>
                  </div>

                  <div style={{overflow:'hidden'}}>
                    <center><Charts graphData={Graph1Data} width={550} height={250} heading={'Clicks'} count={265} icon={'pointing up'} color={['#ed9147']}/></center>
                  </div>

                  <div style={{overflow:'hidden'}}>
                    <center><Charts graphData={Graph1Data} width={550} height={250} heading={'Activities'} count={561} icon={'cubes'} color={['#269e1e']}/></center>
                  </div>

                  <div style={{overflow:'hidden'}}>
                    <center><Charts graphData={Graph1Data} width={550} height={250} heading={'Impression'} count={26010} icon={'eye'} color={['#e0c10f']}/></center>
                  </div>
                </SwipeableViews>
              </Grid.Row>

              <Grid.Row>
                <Grid.Column width={8}>
                    <Button color={'orange'} style={{float:'right'}} disabled={this.state.preDisabled} onClick={this.handlePrevious.bind(this)}>Previous</Button>
                </Grid.Column>
                <Grid.Column width={8}>
                  <Button color={'orange'} disabled={this.state.nextDisabled} onClick={this.handleNext.bind(this)} style={{float:'left'}}>Next</Button>
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
                <SwipeableViews index={this.state.graphIndex}>
                  <div style={{overflow:'hidden'}}>
                    <center><Charts graphData={Graph1Data} width={550} height={250} heading={'Calls'} count={542} icon={'mobile'} color={['#0083CA']}/></center>
                  </div>

                  <div style={{overflow:'hidden'}}>
                    <center><Charts graphData={Graph1Data} width={550} height={250} heading={'Clicks'} count={265} icon={'pointing up'} color={['#ed9147']}/></center>
                  </div>

                  <div style={{overflow:'hidden'}}>
                    <center><Charts graphData={Graph1Data} width={550} height={250} heading={'Activities'} count={561} icon={'cubes'} color={['#269e1e']}/></center>
                  </div>

                  <div style={{overflow:'hidden'}}>
                    <center><Charts graphData={Graph1Data} width={550} height={250} heading={'Impression'} count={26010} icon={'eye'} color={['#e0c10f']}/></center>
                  </div>
                </SwipeableViews>
              </Grid.Row>

              <Grid.Row>
                <Grid.Column width={8}>
                    <Button color={'orange'} style={{float:'right'}} disabled={this.state.preDisabled} onClick={this.handlePrevious.bind(this)}>Previous</Button>
                </Grid.Column>
                <Grid.Column width={8}>
                  <Button color={'orange'} disabled={this.state.nextDisabled} onClick={this.handleNext.bind(this)} style={{float:'left'}}>Next</Button>
              </Grid.Column>
              </Grid.Row>

              <Grid.Row>
                <Grid.Column width={16}>
                    <Table celled >
                       <Table.Header>
                         <Table.Row>
                           <Table.HeaderCell> <Checkbox onChange={()=>this.setState({checkBox:!this.state.checkBox})}/></Table.HeaderCell>
                           <Table.HeaderCell>Listing ID</Table.HeaderCell>
                           <Table.HeaderCell>Company</Table.HeaderCell>
                           <Table.HeaderCell>Address</Table.HeaderCell>
                           <Table.HeaderCell>Telephone</Table.HeaderCell>
                           <Table.HeaderCell />
                         </Table.Row>
                       </Table.Header>

                       <Table.Body>
                         {this.renderFreelistingsData()}
                       </Table.Body>

                     </Table>
                </Grid.Column>

              </Grid.Row>
            </Grid>

          </div>
        </SwipeableViews>
      </div>
    );
  }
}
