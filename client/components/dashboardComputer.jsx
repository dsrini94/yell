import React,{ Component } from 'react';


import { Grid, Menu, Segment, Icon, Header, Form, Input, Button, Table, Label, Pagination } from 'semantic-ui-react';
import SwipeableViews from 'react-swipeable-views';


import InfoBox from './infoBoxComputer.jsx';
import TableMenu from './tableComputer.jsx';
import Charts from './chart.jsx';


import Graph1Data from './../data/graph1Data.js';
import allInvoiceData from './../data/allInvoiceData.js';
import pendingPayment from './../data/pendingPaymentData.js';



export default class DashBoardComputer extends React.Component
{
  constructor()
  {
    super();
    this.state={
      activeItem:'Dashboard',
      activeItem1:'All Incoices',
      index:0
    }
  }

  handleItemClick(e, { name })
  {
    this.setState({ activeItem: name,index:1 })
  }

  handleIndex(e, { name }) {
    this.setState({ activeItem1: name,index:e })
}

handleSegmentClick()
{
  this.setState({ activeItem: 'Accounts and Billings',index:1 })
}

handleAllInvoiceRender()
{
  return(
    allInvoiceData.map((item,key)=>{
      var color =  item.action == 'Make Payment' ? 'red' : 'green';
      return(
        <Table.Row key={key}>
           <Table.Cell collapsing style={{padding:0}}>
             <div style={{padding:3,backgroundColor:color,height:32,float:'left',marginRight:5}}>
             </div>
             <span style={{padding:10}}>{item.date}</span>
           </Table.Cell>
           <Table.Cell>{item.number}</Table.Cell>
           <Table.Cell>{item.bal}</Table.Cell>
           <Table.Cell><span style={{color:color}}>{item.action}</span></Table.Cell>
         </Table.Row>
 );

    })
  )
}

handlePendingPaymentRender()
{
  return(
    pendingPayment.map((item,key)=>{
      var color =  item.action == 'Make Payment' ? 'red' : 'green';
      return(
        <Table.Row key={key}>
           <Table.Cell collapsing style={{padding:0}}>
             <div style={{padding:3,backgroundColor:color,height:32,float:'left',marginRight:5}}>
             </div>
             <span style={{padding:10}}>{item.date}</span>
           </Table.Cell>
           <Table.Cell>{item.number}</Table.Cell>
           <Table.Cell>{item.bal}</Table.Cell>
           <Table.Cell><span style={{color:color}}>{item.action}</span></Table.Cell>
         </Table.Row>
 );

    })
  )
}

  render()
  {
    const { activeItem,activeItem1 } = this.state


    if(this.state.activeItem == 'Dashboard')
    {

          return(
            <Grid>
              <Grid.Row>

                <Grid.Column width={2} />

                <Grid.Column width={5} style={{marginTop:35}}>
                    <center>
                    <span style={styles.headingText}>Guildford Tyre Co. Ltd</span>
                  </center>
                </Grid.Column>

              </Grid.Row>

              <Grid.Row >

                <Grid.Column width={3}>
                  <Menu pointing secondary vertical color={"orange"}>
                    <Menu.Item name='Dashboard' active={activeItem === 'Dashboard'} onClick={this.handleItemClick.bind(this)} icon={'dashboard'} />
                    <Menu.Item name='Your Analytics' active={activeItem === 'Your Analytics'} onClick={this.handleItemClick.bind(this)} icon={'line chart'} />
                    <Menu.Item name='Accounts and Billings' active={activeItem === 'Accounts and Billings'} onClick={this.handleItemClick.bind(this)} icon={'newspaper'}/>
                    <Menu.Item name='Business Profile' active={activeItem === 'Business Profile'} onClick={this.handleItemClick.bind(this)} icon={'user outline'}/>
                  </Menu>
                </Grid.Column>

                <Grid.Column width={13}>

                  <Grid padded>
                    <Grid.Row columns={3}>
                      <Grid.Column>
                          <InfoBox number={'05'} text={'eContracts Awaiting Sign Off'} color={'#1cbfb1'} tagLine={''}/>
                      </Grid.Column>

                      <Grid.Column onClick={this.handleSegmentClick.bind(this)}>
                          <InfoBox number={'05'} text={'Pending Payments'} color={'#f49e42'} tagLine={''}/>
                      </Grid.Column>

                      <Grid.Column>
                        <InfoBox number={'50'} text={'New Calls'} color={'#81c485'} tagLine={'(in past one month)'}/>
                      </Grid.Column>
                    </Grid.Row>

                    <Grid.Row>
                      <Grid.Column width={16}>
                        <Segment inverted color={'yellow'}>
                          <center><span style={styles.text}>Your Adverts and Performance</span></center>
                        </Segment>
                      </Grid.Column>
                    </Grid.Row>

                    <Grid.Row>
                      <Grid.Column width={16}>
                        <TableMenu />
                        <Pagination defaultActivePage={5} totalPages={2} style={{marginTop:-50}}/>
                      </Grid.Column>

                    </Grid.Row>

                  </Grid>



                </Grid.Column>

              </Grid.Row>
            </Grid>
          );
    }
    else if (this.state.activeItem == 'Accounts and Billings') {
      return(
        <Grid>
          <Grid.Row>

            <Grid.Column width={2} />

            <Grid.Column width={5} style={{marginTop:35}}>
                <center>
                <span style={styles.headingText}>Guildford Tyre Co. Ltd</span>
              </center>
            </Grid.Column>

          </Grid.Row>

          <Grid.Row >

            <Grid.Column width={3}>
              <Menu pointing secondary vertical color={"orange"}>
                <Menu.Item name='Dashboard' active={activeItem === 'Dashboard'} onClick={this.handleItemClick.bind(this)} icon={'dashboard'} />
                <Menu.Item name='Your Analytics' active={activeItem === 'Your Analytics'} onClick={this.handleItemClick.bind(this)} icon={'line chart'} />
                <Menu.Item name='Accounts and Billings' active={activeItem === 'Accounts and Billings'} onClick={this.handleItemClick.bind(this)} icon={'newspaper'}/>
                <Menu.Item name='Business Profile' active={activeItem === 'Business Profile'} onClick={this.handleItemClick.bind(this)} icon={'user outline'}/>
              </Menu>
            </Grid.Column>

            <Grid.Column width={13}>
              <Grid>
                <Grid.Row>
                  <Grid.Column width={4}>
                    <Form>
                        <Form.Field>
                          <label>Start Date</label>
                          <Input placeholder='Start Date' type="date" icon="calendar"/>
                        </Form.Field>
                      </Form>
                  </Grid.Column>

                  <Grid.Column width={4}>
                    <Form>
                        <Form.Field>
                          <label>End Date</label>
                          <Input placeholder='End Date' type="date" icon="calendar"/>
                        </Form.Field>
                      </Form>
                  </Grid.Column>

                  <Grid.Column width={3}>
                    <Button color="yellow" style={styles.button}>Show Invoices</Button>
                  </Grid.Column>

                </Grid.Row>

                <Grid.Row>
                  <Grid.Column width={13}>
                    <div>
                      <Menu  pointing secondary>
                        <Menu.Item name='All Invoices' active={activeItem ==='All Invoices' } onClick={this.handleIndex.bind(this,0)}>
                            All Invoices
                            <Label color='orange'>10</Label>
                        </Menu.Item>
                        <Menu.Item name='Pending Payments' active={activeItem === 'Pending Payments'}  onClick={this.handleIndex.bind(this,1)}>
                          Pending Payments
                          <Label color='orange'>2</Label>
                        </Menu.Item>
                      </Menu>

                      <SwipeableViews index={this.state.index}>
                        <div style={{overflow:'hidden'}}>
                          <Grid>
                            <Grid.Row>
                              <Grid.Column width={11}>
                                  <Table divided>
                                     <Table.Header>
                                       <Table.Row>
                                         <Table.HeaderCell>Invoice Date</Table.HeaderCell>
                                         <Table.HeaderCell>Invoice Number/Line</Table.HeaderCell>
                                         <Table.HeaderCell>Balance</Table.HeaderCell>
                                         <Table.HeaderCell>Action</Table.HeaderCell>
                                       </Table.Row>
                                     </Table.Header>

                                     <Table.Body>
                                       {this.handleAllInvoiceRender()}
                                     </Table.Body>

                                   </Table>
                              </Grid.Column>

                            </Grid.Row>
                          </Grid>

                        </div>

                        <div style={{overflow:'hidden'}}>
                          <Grid>
                            <Grid.Row>
                              <Grid.Column width={10}>
                                  <Table divided>
                                     <Table.Header>
                                       <Table.Row>
                                         <Table.HeaderCell>Invoice Date</Table.HeaderCell>
                                         <Table.HeaderCell>Invoice Number/Line</Table.HeaderCell>
                                         <Table.HeaderCell>Balance</Table.HeaderCell>
                                         <Table.HeaderCell>Action</Table.HeaderCell>
                                       </Table.Row>
                                     </Table.Header>

                                     <Table.Body>
                                       {this.handlePendingPaymentRender()}
                                     </Table.Body>

                                   </Table>
                              </Grid.Column>

                            </Grid.Row>
                          </Grid>
                        </div>

                      </SwipeableViews>

                    </div>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Grid.Column>

          </Grid.Row>
        </Grid>
      );

    }
    else {
      return(
        <Grid padded>
          <Grid.Row>

            <Grid.Column width={2} />

            <Grid.Column width={5} style={{marginTop:35}}>
                <center>
                <span style={styles.headingText}>Guildford Tyre Co. Ltd</span>
              </center>
            </Grid.Column>

          </Grid.Row>

          <Grid.Row >

            <Grid.Column width={3}>
              <Menu pointing secondary vertical color={"orange"}>
                <Menu.Item name='Dashboard' active={activeItem === 'Dashboard'} onClick={this.handleItemClick.bind(this)} icon={'dashboard'} />
                <Menu.Item name='Your Analytics' active={activeItem === 'Your Analytics'} onClick={this.handleItemClick.bind(this)} icon={'line chart'} />
                <Menu.Item name='Accounts and Billings' active={activeItem === 'Accounts and Billings'} onClick={this.handleItemClick.bind(this)} icon={'newspaper'}/>
                <Menu.Item name='Business Profile' active={activeItem === 'Business Profile'} onClick={this.handleItemClick.bind(this)} icon={'user outline'}/>
              </Menu>
            </Grid.Column>

            <Grid.Column width={13}>
              <Segment inverted color="grey"><center><Header inverted>No Posts Yet.</Header></center></Segment>
            </Grid.Column>

          </Grid.Row>
        </Grid>
      )
    }

  }
}

const styles={
  segment:{
    flex:1
  },
  text:{
    fontWeight:'bold',
    color:'black',
    fontSize:18
  },
  container:{
    margin:0,
    borderRadius:0
  },
  headingText:{
    fontSize:20,
    fontWeight:'bold',
    marginTop:'20px'
  },
  button:{
    color:'black',
    marginTop:22
  }
}
