import React, { Component} from 'react';

import { Pagination, Label, Sidebar, Segment, Button, Menu, Image, Icon, Header, Grid, Checkbox ,Accordion, Form, Input} from 'semantic-ui-react'

import MenuBarDirectMobile from './menuBarDirectMobile.jsx';
import InfoBox from './infoBoxMobile.jsx';
import Charts from './chart.jsx';
import allInvoiceData from './../data/allInvoiceData.js';
import pendingPayment from './../data/pendingPaymentData.js';
import DashboardFooter from './../components/dashboardFooter.jsx';
import SwipeableViews from 'react-swipeable-views';

import YellData from './../data/yellData.js';
import Graph1Data from './../data/graph1Data.js';
import Graph2Data from './../data/graph2Data.js';
import Graph3Data from './../data/graph3Data.js';
import Graph4Data from './../data/graph4Data.js';
import connectData from './../data/connectData.js';
import reputationData from './../data/reputationData.js';
import freelistingsData from './../data/freelistingsData.js';



export default class MobileDashboard extends Component
{
  constructor()
  {
    super();
    this.state={
      visible:false,
      activeItem:'Yell.com',
      index:0,
      activeIndexAccordion:99,
      selectedSideBar:'DashBoard',
      accountsIndex:0,
      activeItem1:'Pending Payments',
      index1:0,
      activeIndexAccordion1:99,
      checkBox:false,
      activePage:1,
      allInvoiceActivePage:1,
      graphIndex:0
    }
  }

  handlePaginationChange(e, { activePage }) {
    this.setState({activePage})
  }

  handleSideBar(){
    this.setState({visible:!this.state.visible})
  }

  handleAllInvoicePaginationChange(e, { activePage }) {
    this.setState({allInvoiceActivePage:activePage})
  }


  handleItemClick(e, { name }) {
    if(name == "Yell.com")
     this.setState({ activeItem: name,index:0,color1:'orange',color2:'black',color3:'blackblack',color4:'black' })
    else
    if (name == "Connect")
     this.setState({ activeItem: name,index:1,color1:'black',color2:'orange',color3:'black',color4:'black' })
    else
    if(name == "Reputation")
     this.setState({ activeItem: name,index:2,color1:'black',color2:'',color3:'orange',color4:'black' })
    else
    if(name == "Freelistings")
      this.setState({ activeItem: name,index:3,color1:'black',color2:'black',color3:'black',color4:'orange' })

}

handleClick(e){
  const newIndex = this.state.activeIndexAccordion === e ? -1 : e
  this.setState({ activeIndexAccordion: newIndex })
}

handleIndex(e, { name }) {
  if(name == 'All Invoices')
    this.setState({ activeItem1: name,accountsIndex:0 })
  else
    this.setState({ activeItem1: name,accountsIndex:1 })

}

renderReputationData()
{
  return(
    reputationData.map((item,key)=>{
      var color =  item.status == 'Live' ? 'green' : '#ed9147';
      return(
        <div key={key}>
        <Grid.Row key={key}>
          <Grid.Column width={16}>
            <Accordion>
               <Accordion.Title active={this.state.activeIndexAccordion === key} index={key} onClick={this.handleClick.bind(this,key)}>
                 <Grid>
                   <Grid.Row style={{padding:0}}>
                     <Grid.Column width={3}>
                       <span>
                       <div style={{padding:2,backgroundColor:color,float:'left',height:40}}></div>
                       <Checkbox style={{marginTop:'18%',marginLeft:'9%'}} checked={this.state.checkBox}/>
                     </span>
                     </Grid.Column>
                     <Grid.Column width={4} style={{marginTop:'2%',marginLeft:'-5%'}}>
                        {item.name}
                     </Grid.Column>
                     <Grid.Column width={4} style={{marginTop:'2%',marginLeft:'-3%'}}>
                       {item.order}
                     </Grid.Column>
                     <Grid.Column width={4} style={{marginTop:'2%'}}>
                       <span style={{color:color,fontWeight:'bold',padding:20}}>{item.status}</span>
                     </Grid.Column>
                      <Grid.Column width={1} style={{marginTop:'3%',marginLeft:'5%'}}>
                        <Icon name='dropdown' style={{float:'right'}}/>
                      </Grid.Column>
                   </Grid.Row>
                 </Grid>
             </Accordion.Title>
               <Accordion.Content active={this.state.activeIndexAccordion === key}>
                 <Grid style={{marginTop:'2%'}}>
                   <Grid.Row>
                     <Grid.Column width={2} />
                     <Grid.Column width={4}>
                       <Header as='h5'>Date</Header>
                       {item.date}
                     </Grid.Column>
                     <Grid.Column width={3} style={{marginTop:'3%'}}>
                       <label >Edit</label>
                     </Grid.Column>
                   </Grid.Row>
                 </Grid>
               </Accordion.Content>
             </Accordion>
          </Grid.Column>
         </Grid.Row>
         <br/>
       </div>
      )
    })
  )
}

renderFreelistingsData()
{
  return(
    freelistingsData.map((item,key)=>{
      var color =  item.status == 'Live' ? 'green' : '#ed9147';
      return(
        <div key={key}>
        <Grid.Row key={key}>
          <Grid.Column width={16}>
            <Accordion>
               <Accordion.Title active={this.state.activeIndexAccordion === key} index={key} onClick={this.handleClick.bind(this,key)}>
                 <Grid>
                   <Grid.Row style={{padding:0}}>
                     <Grid.Column width={3}>
                       <span>
                       <div style={{padding:2,backgroundColor:color,float:'left',height:40}}></div>
                       <Checkbox style={{marginTop:'18%',marginLeft:'9%'}} checked={this.state.checkBox}/>
                     </span>
                     </Grid.Column>
                     <Grid.Column width={4} style={{marginTop:'2%',marginLeft:'-5%'}}>
                        {item.id}
                     </Grid.Column>
                     <Grid.Column width={4} style={{marginTop:'2%',marginLeft:'-3%'}}>
                       {item.company}
                     </Grid.Column>
                     <Grid.Column width={4} style={{marginTop:'2%'}}>
                       <span style={{ontWeight:'bold',padding:20}}>edit</span>
                     </Grid.Column>
                      <Grid.Column width={1} style={{marginTop:'3%',marginLeft:'5%'}}>
                        <Icon name='dropdown' style={{float:'right'}}/>
                      </Grid.Column>
                   </Grid.Row>
                 </Grid>
             </Accordion.Title>
               <Accordion.Content active={this.state.activeIndexAccordion === key}>
                 <Grid style={{marginTop:'2%'}}>
                   <Grid.Row>
                     <Grid.Column width={2} />
                     <Grid.Column width={4}>
                       <Header as='h5'>Address</Header>
                       {item.address}
                     </Grid.Column>
                     <Grid.Column width={4}>
                       <Header as='h5'>Telephone</Header>
                       {item.telephone}
                     </Grid.Column>
                   </Grid.Row>
                 </Grid>
               </Accordion.Content>
             </Accordion>
          </Grid.Column>
         </Grid.Row>
         <br/>
       </div>
      )
    })
  )
}

renderConnectData()
{
  return(
    connectData.map((item,key)=>{
      var color =  item.status == 'Live' ? 'green' : '#ed9147';
      return(
        <div key={key}>
        <Grid.Row key={key}>
          <Grid.Column width={16}>
            <Accordion>
               <Accordion.Title active={this.state.activeIndexAccordion === key} index={key} onClick={this.handleClick.bind(this,key)}>
                 <Grid>
                   <Grid.Row style={{padding:0}}>
                     <Grid.Column width={3}>
                       <span>
                       <div style={{padding:2,backgroundColor:color,float:'left',height:40}}></div>
                       <Checkbox style={{marginTop:'18%',marginLeft:'9%'}} checked={this.state.checkBox}/>
                     </span>
                     </Grid.Column>
                     <Grid.Column width={4} style={{marginTop:'2%',marginLeft:'-5%'}}>
                        {item.name}
                     </Grid.Column>
                     <Grid.Column width={4} style={{marginTop:'2%',marginLeft:'-3%'}}>
                       {item.order}
                     </Grid.Column>
                     <Grid.Column width={4} style={{marginTop:'2%'}}>
                       <span style={{color:color,fontWeight:'bold',padding:20}}>{item.status}</span>
                     </Grid.Column>
                      <Grid.Column width={1} style={{marginTop:'3%',marginLeft:'5%'}}>
                        <Icon name='dropdown' style={{float:'right'}}/>
                      </Grid.Column>
                   </Grid.Row>
                 </Grid>
             </Accordion.Title>
               <Accordion.Content active={this.state.activeIndexAccordion === key}>
                 <Grid style={{marginTop:'2%'}}>
                   <Grid.Row>
                     <Grid.Column width={2} />
                     <Grid.Column width={4}>
                       <Header as='h5'>Date</Header>
                       {item.date}
                     </Grid.Column>
                     <Grid.Column width={3} style={{marginTop:'3%'}}>
                       <label >Edit</label>
                     </Grid.Column>
                   </Grid.Row>
                 </Grid>
               </Accordion.Content>
             </Accordion>
          </Grid.Column>
         </Grid.Row>
         <br/>
       </div>
      )
    })
  )
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
            <Grid.Row key={key}>
              <Grid.Column width={16}>
                <Accordion>
                   <Accordion.Title active={this.state.activeIndexAccordion === key} index={key} onClick={this.handleClick.bind(this,key)}>
                     <Grid>
                       <Grid.Row style={{padding:0}}>
                         <Grid.Column width={3}>
                           <span>
                           <div style={{padding:2,backgroundColor:color,float:'left',height:40}}></div>
                           <Checkbox style={{marginTop:'18%',marginLeft:'9%'}} checked={this.state.checkBox}/>
                         </span>
                         </Grid.Column>
                         <Grid.Column width={4} style={{marginTop:'2%',marginLeft:'-5%'}}>
                            {item.name}
                         </Grid.Column>
                         <Grid.Column width={4} style={{marginTop:'2%',marginLeft:'-3%'}}>
                           {item.order}
                         </Grid.Column>
                         <Grid.Column width={4} style={{marginTop:'2%'}}>
                           <span style={{color:color,fontWeight:'bold',padding:20}}>{item.status}</span>
                         </Grid.Column>
                          <Grid.Column width={1} style={{marginTop:'3%',marginLeft:'5%'}}>
                            <Icon name='dropdown' style={{float:'right'}}/>
                          </Grid.Column>
                       </Grid.Row>
                     </Grid>
                 </Accordion.Title>
                   <Accordion.Content active={this.state.activeIndexAccordion === key}>
                     <Grid style={{marginTop:'2%'}}>
                       <Grid.Row>
                         <Grid.Column width={2} />
                         <Grid.Column width={4}>
                           <Header as='h5'>Classification</Header>
                             {item.classification}
                         </Grid.Column>
                         <Grid.Column width={3}>
                            <Header as='h5'>Location</Header>
                            {item.location}
                         </Grid.Column>
                         <Grid.Column width={4}>
                           <Header as='h5'>Date</Header>
                           {item.date}
                         </Grid.Column>
                         <Grid.Column width={3} style={{marginTop:'3%'}}>
                           <label >Edit</label>
                         </Grid.Column>
                       </Grid.Row>
                     </Grid>
                   </Accordion.Content>
                 </Accordion>
              </Grid.Column>
             </Grid.Row>
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

        if(key >= 5)
        {
          return(
            <Grid.Row key={key}>
              <Grid.Column width={16}>
                <Accordion>
                   <Accordion.Title active={this.state.activeIndexAccordion === key} index={key} onClick={this.handleClick.bind(this,key)}>
                     <Grid>
                       <Grid.Row style={{padding:0}}>
                         <Grid.Column width={3}>
                           <span>
                           <div style={{padding:2,backgroundColor:color,float:'left',height:40}}></div>
                           <Checkbox style={{marginTop:'18%',marginLeft:'9%'}} checked={this.state.checkBox}/>
                         </span>
                         </Grid.Column>
                         <Grid.Column width={4} style={{marginTop:'2%',marginLeft:'-5%'}}>
                            {item.name}
                         </Grid.Column>
                         <Grid.Column width={4} style={{marginTop:'2%',marginLeft:'-3%'}}>
                           {item.number}
                         </Grid.Column>
                         <Grid.Column width={4} style={{marginTop:'2%'}}>
                           <span style={{color:color,fontWeight:'bold',padding:20}}>{item.status}</span>
                         </Grid.Column>
                          <Grid.Column width={1} style={{marginTop:'3%',marginLeft:'5%'}}>
                            <Icon name='dropdown' style={{float:'right'}}/>
                          </Grid.Column>
                       </Grid.Row>
                     </Grid>
                 </Accordion.Title>
                   <Accordion.Content active={this.state.activeIndexAccordion === key}>
                     <Grid style={{marginTop:'2%'}}>
                       <Grid.Row>
                         <Grid.Column width={2} />
                         <Grid.Column width={4}>
                           <Header as='h5'>Classification</Header>
                             {item.classification}
                         </Grid.Column>
                         <Grid.Column width={3}>
                            <Header as='h5'>Location</Header>
                            {item.location}
                         </Grid.Column>
                         <Grid.Column width={4}>
                           <Header as='h5'>Date</Header>
                           {item.date}
                         </Grid.Column>
                         <Grid.Column width={3} style={{marginTop:'3%'}}>
                           <label >Edit</label>
                         </Grid.Column>
                       </Grid.Row>
                     </Grid>
                   </Accordion.Content>
                 </Accordion>
              </Grid.Column>
             </Grid.Row>
     );
        }

      })
    )
  }


}
handleClick1(e){
  const newIndex = this.state.activeIndexAccordion1 === e ? -1 : e
  this.setState({ activeIndexAccordion1: newIndex })
}
handleAllInvoiceRender()
{
  if(this.state.allInvoiceActivePage == 1)
  {
    return(
      allInvoiceData.map((item,key)=>{
        var color =  item.action == 'Make Payment' ? 'red' : 'green';
        var textColor =  item.action == 'Make Payment' ? 'red' : '';
        if(key <=5)
        {    return(
              <Grid.Row key={key}>
                <Grid.Column width={16}>
                  <Accordion>
                     <Accordion.Title active={this.state.activeIndexAccordion1 === key} index={key} onClick={this.handleClick1.bind(this,key)}>
                       <Grid>
                         <Grid.Row style={{padding:0}}>
                           <Grid.Column width={1}>
                             <div style={{padding:3,backgroundColor:color,float:'left',height:40}}></div>
                           </Grid.Column>
                           <Grid.Column width={6} style={{marginTop:'2%'}}>
                             {item.number}
                           </Grid.Column>
                           <Grid.Column width={7} style={{marginTop:'2%'}}>
                             <span style={{color:textColor,fontWeight:'bold'}}>{item.action}</span>
                           </Grid.Column>
                            <Grid.Column width={1} style={{marginTop:'2%'}}>
                              <Icon name='dropdown' style={{float:'right'}}/>
                            </Grid.Column>
                         </Grid.Row>
                       </Grid>
                   </Accordion.Title>
                     <Accordion.Content active={this.state.activeIndexAccordion1 === key}>
                       <Grid>
                         <Grid.Row>
                           <Grid.Column width={3} />
                           <Grid.Column width={5}>
                             <Header as='h5'>Invoice Date</Header>
                               {item.date}
                           </Grid.Column>
                           <Grid.Column width={5}>
                              <Header as='h5'>Balance</Header>
                              {item.bal}
                           </Grid.Column>
                            <Grid.Column width={3} />
                         </Grid.Row>
                       </Grid>
                     </Accordion.Content>
                   </Accordion>
                </Grid.Column>
               </Grid.Row>
       );
        }


      })
    )
  }
  else
  {
    return(
      allInvoiceData.map((item,key)=>{
        var color =  item.action == 'Make Payment' ? 'red' : 'green';
        var textColor =  item.action == 'Make Payment' ? 'red' : '';
        if(key >=5)
        {    return(
              <Grid.Row key={key}>
                <Grid.Column width={16}>
                  <Accordion>
                     <Accordion.Title active={this.state.activeIndexAccordion1 === key} index={key} onClick={this.handleClick1.bind(this,key)}>
                       <Grid>
                         <Grid.Row style={{padding:0}}>
                           <Grid.Column width={1}>
                             <div style={{padding:3,backgroundColor:color,float:'left',height:40}}></div>
                           </Grid.Column>
                           <Grid.Column width={6} style={{marginTop:'2%'}}>
                             {item.number}
                           </Grid.Column>
                           <Grid.Column width={7} style={{marginTop:'2%'}}>
                             <span style={{color:textColor,fontWeight:'bold'}}>{item.action}</span>
                           </Grid.Column>
                            <Grid.Column width={1} style={{marginTop:'2%'}}>
                              <Icon name='dropdown' style={{float:'right'}}/>
                            </Grid.Column>
                         </Grid.Row>
                       </Grid>
                   </Accordion.Title>
                     <Accordion.Content active={this.state.activeIndexAccordion1 === key}>
                       <Grid>
                         <Grid.Row>
                           <Grid.Column width={3} />
                           <Grid.Column width={5}>
                             <Header as='h5'>Invoice Date</Header>
                               {item.date}
                           </Grid.Column>
                           <Grid.Column width={5}>
                              <Header as='h5'>Balance</Header>
                              {item.bal}
                           </Grid.Column>
                            <Grid.Column width={3} />
                         </Grid.Row>
                       </Grid>
                     </Accordion.Content>
                   </Accordion>
                </Grid.Column>
               </Grid.Row>
       );
        }


      })
    )
  }

}

handlePendingPaymentRender()
{
  return(
    pendingPayment.map((item,key)=>{
      var color =  item.action == 'Make Payment' ? 'red' : 'green';
      var textColor =  item.action == 'Make Payment' ? 'red' : '';
      return(
        <Grid.Row key={key}>
          <Grid.Column width={16}>
            <Accordion>
               <Accordion.Title active={this.state.activeIndexAccordion1 === key} index={key} onClick={this.handleClick1.bind(this,key)}>
                 <Grid>
                   <Grid.Row style={{padding:0}}>
                     <Grid.Column width={1}>
                       <div style={{padding:3,backgroundColor:color,float:'left',height:40}}></div>
                     </Grid.Column>
                     <Grid.Column width={6} style={{marginTop:'2%'}}>
                       {item.number}
                     </Grid.Column>
                     <Grid.Column width={7} style={{marginTop:'2%'}}>
                       <span style={{color:textColor,fontWeight:'bold'}}>{item.action}</span>
                     </Grid.Column>
                      <Grid.Column width={1} style={{marginTop:'2%'}}>
                        <Icon name='dropdown' style={{float:'right'}}/>
                      </Grid.Column>
                   </Grid.Row>
                 </Grid>
             </Accordion.Title>
               <Accordion.Content active={this.state.activeIndexAccordion1 === key}>
                 <Grid>
                   <Grid.Row>
                     <Grid.Column width={3} />
                     <Grid.Column width={5}>
                       <Header as='h5'>Invoice Date</Header>
                         {item.date}
                     </Grid.Column>
                     <Grid.Column width={5}>
                        <Header as='h5'>Balance</Header>
                        {item.bal}
                     </Grid.Column>
                      <Grid.Column width={3} />
                   </Grid.Row>
                 </Grid>
               </Accordion.Content>
             </Accordion>
          </Grid.Column>
         </Grid.Row>
 );

    })
  )
}
  render()
  {
    const { activeItem , activeIndexAccordion, activeItem1 } = this.state;

    if(this.state.selectedSideBar == 'DashBoard')
    {
      return(
        <div>
        <Sidebar.Pushable as={Segment}>
            <Sidebar as={Menu} animation='push' width='thin' visible={this.state.visible} icon='labeled' vertical inverted>
              <Menu.Item name='home'  onClick={()=>this.setState({selectedSideBar:'DashBoard',visible:!this.state.visible})}>
                <Icon name='dashboard' />
                DashBoard
              </Menu.Item>
              <Menu.Item name='gamepad' onClick={()=>this.setState({selectedSideBar:'Your Analytics',visible:!this.state.visible})}>
                <Icon name='line chart' />
                Your Analytics
              </Menu.Item>
              <Menu.Item name='camera' onClick={()=>this.setState({selectedSideBar:'Accounts and Billings',visible:!this.state.visible,accountsIndex:1})}>
                <Icon name='newspaper' />
                Accounts and Billings
              </Menu.Item>
              <Menu.Item name='camera' onClick={()=>this.setState({selectedSideBar:'Business Profile',visible:!this.state.visible})}>
                <Icon name='user outline' />
                Business Profile
              </Menu.Item>
            </Sidebar>
            <Sidebar.Pusher>
              <div>
              <Menu inverted style={styles.container}>
                <Menu.Item onClick={this.handleSideBar.bind(this)}>
                  <Icon name="bars" />
                </Menu.Item>

                <Menu.Menu position='left'>
                  <Menu.Item >
                    <span style={styles.titleText}>Search</span>
                  </Menu.Item>

                  <Menu.Item >
                    <span >Advertise</span>
                    <Icon name="phone" />
                    <span >0800 777 449</span>
                  </Menu.Item>
                </Menu.Menu>
              </Menu>
            </div>

            <div>
              <MenuBarDirectMobile />
            </div>

            <div>
              <Grid padded>
                <Grid.Row columns={3}>
                  <Grid.Column>
                      <InfoBox number={'05'} text={'eContracts Awaiting Sign Off'} color={'#1cbfb1'} tagLine={''}/>
                  </Grid.Column>

                  <Grid.Column onClick={()=>this.setState({selectedSideBar:'Accounts and Billings',accountsIndex:1})}>
                      <InfoBox number={'02'} text={'Pending Payments'} color={'#f49e42'} tagLine={''}/>
                  </Grid.Column>

                  <Grid.Column>
                    <InfoBox number={'50'} text={'New Calls'} color={'#81c485'} tagLine={'(in past one month)'}/>
                  </Grid.Column>
                </Grid.Row>

                <Grid.Row style={{marginTop:-10}}>
                  <Grid.Column width={16}>
                    <Segment inverted color={'yellow'}>
                      <center><span style={styles.text}>Your Adverts and Performance</span></center>
                    </Segment>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={16}>
                    <Menu pointing secondary fluid widths={4} color={'orange'}>
                      <Menu.Item name='Yell.com' active={activeItem ==='Yell.com' } onClick={this.handleItemClick.bind(this)} >
                        Yell.com (10)
                      </Menu.Item>
                      <Menu.Item name='Connect' active={activeItem === 'Connect'} onClick={this.handleItemClick.bind(this)}>
                        Connect (3)
                      </Menu.Item>
                      <Menu.Item name='Reputation' active={activeItem === 'Reputation'} onClick={this.handleItemClick.bind(this)}>
                        Reputation (3)
                      </Menu.Item>
                      <Menu.Item name='Freelistings' active={activeItem === 'Freelistings'} onClick={this.handleItemClick.bind(this)}>
                        Freelistings
                      </Menu.Item>
                    </Menu>
                  </Grid.Column>
                  <Grid.Column width={16}>
                    <SwipeableViews index={this.state.index} disabled={true}>
                      <div style={{overflow:'hidden'}}>
                        <center><Header as={'h4'} style={{marginTop:20}}>Performance on Yell.Com</Header></center>
                        <br/>
                        <SwipeableViews onChangeIndex={(index)=>{this.setState({graphIndex:index})}}>
                          <div style={{overflow:'hidden'}}>
                            <Charts graphData={Graph1Data} heading={'Calls'} count={542} icon={'mobile'} color={['#0083CA']} width={300} height={180}/>
                          </div>
                          <div style={{overflow:'hidden'}}>
                            <Charts graphData={Graph2Data} heading={'Clicks'} count={265} icon={'pointing up'} color={['#ed9147']} width={300} height={180}/>
                          </div>
                          <div style={{overflow:'hidden'}}>
                            <Charts graphData={Graph3Data} heading={'Activities'} count={561} icon={'cubes'} color={['#269e1e']} width={300} height={180}/>
                          </div>
                          <div style={{overflow:'hidden'}}>
                            <Charts graphData={Graph4Data} heading={'Impression'} count={26010} icon={'eye'} color={['#e0c10f']} width={300} height={180}/>
                          </div>
                        </SwipeableViews>
                         <div style={{textAlign:'center',padding:10,marginLeft:140}}>
                           <center>
                          <div style={{height: '10px',width: '10px',backgroundColor:this.state.graphIndex == 0 ? 'orange' :'black',borderRadius: '50%',display:'inlineBlock',float:'left',margin:5}}></div>
                          <div style={{height: '10px',width: '10px',backgroundColor:this.state.graphIndex == 1 ? 'orange' :'black',borderRadius: '50%',display:'inlineBlock',float:'left',margin:5}}></div>
                          <div style={{height: '10px',width: '10px',backgroundColor:this.state.graphIndex == 2 ? 'orange' :'black',borderRadius: '50%',display:'inlineBlock',float:'left',margin:5}}></div>
                          <div style={{height: '10px',width: '10px',backgroundColor:this.state.graphIndex == 3 ? 'orange' :'black',borderRadius: '50%',display:'inlineBlock',float:'left',margin:5}}></div>
                        </center>

                        </div>

                        <Grid style={{marginTop:10}}>
                          <Grid.Row style={{backgroundColor:'#D7DADC',marginTop:'5%'}}>
                            <Grid.Column width={2} >
                              <Checkbox style={{padding:12,marginTop:'-15%'}} onChange={()=>this.setState({checkBox:!this.state.checkBox})} />
                           </Grid.Column>
                            <Grid.Column width={4}>
                              <Header as={'h5'} style={{padding:8}}>Advert Name</Header>
                            </Grid.Column>
                            <Grid.Column width={4} style={{marginTop:'2%'}}>
                              <Header as={'h5'}>Order Number/Line</Header>
                            </Grid.Column>
                            <Grid.Column width={3} >
                              <Header as={'h5'} style={{padding:8}}>Status</Header>
                            </Grid.Column>
                            <Grid.Column width={3} style={{marginTop:'1%'}} >
                              <Icon name='edit' size='large' disabled = {!this.state.checkBox} />
                            </Grid.Column>
                          </Grid.Row>
                             {this.renderTableData()}
                             <Grid.Row>
                               <Grid.Column width={16}>
                                 <center>
                                 <Pagination defaultActivePage={1} totalPages={2} onPageChange={this.handlePaginationChange.bind(this)}/>
                               </center>
                               </Grid.Column>
                             </Grid.Row>
                        </Grid>
                      </div>
                      <div style={{overflow:'hidden'}}>
                        <center><Header as={'h4'} style={{marginTop:20}}>Performance on Connect</Header></center>
                        <br/>
                        <SwipeableViews onChangeIndex={(index)=>{this.setState({graphIndex:index})}}>
                          <div style={{overflow:'hidden'}}>
                            <Charts graphData={Graph2Data} heading={'Calls'} count={542} icon={'mobile'} color={['#0083CA']} width={300} height={180}/>
                          </div>
                          <div style={{overflow:'hidden'}}>
                            <Charts graphData={Graph4Data} heading={'Clicks'} count={265} icon={'pointing up'} color={['#ed9147']} width={300} height={180}/>
                          </div>
                          <div style={{overflow:'hidden'}}>
                            <Charts graphData={Graph1Data} heading={'Activities'} count={561} icon={'cubes'} color={['#269e1e']} width={300} height={180}/>
                          </div>
                          <div style={{overflow:'hidden'}}>
                            <Charts graphData={Graph3Data} heading={'Impression'} count={26010} icon={'eye'} color={['#e0c10f']} width={300} height={180}/>
                          </div>
                        </SwipeableViews>

                        <div style={{textAlign:'center',padding:10,marginLeft:140}}>
                          <center>
                         <div style={{height: '10px',width: '10px',backgroundColor:this.state.graphIndex == 0 ? 'orange' :'black',borderRadius: '50%',display:'inlineBlock',float:'left',margin:5}}></div>
                         <div style={{height: '10px',width: '10px',backgroundColor:this.state.graphIndex == 1 ? 'orange' :'black',borderRadius: '50%',display:'inlineBlock',float:'left',margin:5}}></div>
                         <div style={{height: '10px',width: '10px',backgroundColor:this.state.graphIndex == 2 ? 'orange' :'black',borderRadius: '50%',display:'inlineBlock',float:'left',margin:5}}></div>
                         <div style={{height: '10px',width: '10px',backgroundColor:this.state.graphIndex == 3 ? 'orange' :'black',borderRadius: '50%',display:'inlineBlock',float:'left',margin:5}}></div>
                       </center>

                       </div>

                        <Grid style={{marginTop:10}}>
                          <Grid.Row style={{backgroundColor:'#D7DADC',marginTop:'5%'}}>
                            {/* <Grid.Column width={1} /> */}
                            <Grid.Column width={2} >
                              <Checkbox style={{padding:12,marginTop:'-15%'}} onChange={()=>this.setState({checkBox:!this.state.checkBox})} />
                           </Grid.Column>
                            <Grid.Column width={4}>
                              <Header as={'h5'} style={{padding:8}}>Product Name</Header>
                            </Grid.Column>
                            <Grid.Column width={4} style={{marginTop:'2%'}}>
                              <Header as={'h5'}>Order Number/Line</Header>
                            </Grid.Column>
                            <Grid.Column width={3} >
                              <Header as={'h5'} style={{padding:8}}>Status</Header>
                            </Grid.Column>
                            <Grid.Column width={3} style={{marginTop:'1%'}} >
                              <Icon name='edit' size='large' disabled = {!this.state.checkBox} />
                            </Grid.Column>
                          </Grid.Row>

                          <Grid.Row>
                            <Grid.Column>
                              {this.renderConnectData()}
                            </Grid.Column>
                          </Grid.Row>
                        </Grid>
                      </div>
                      <div style={{overflow:'hidden'}}>
                        <center><Header as={'h4'} style={{marginTop:20}}>Performance on Reputation</Header></center>
                        <br/>
                        <SwipeableViews onChangeIndex={(index)=>{this.setState({graphIndex:index})}}>
                          <div style={{overflow:'hidden'}}>
                            <Charts graphData={Graph4Data} heading={'Calls'} count={542} icon={'mobile'} color={['#0083CA']} width={300} height={180}/>
                          </div>
                          <div style={{overflow:'hidden'}}>
                            <Charts graphData={Graph3Data} heading={'Clicks'} count={265} icon={'pointing up'} color={['#ed9147']} width={300} height={180}/>
                          </div>
                          <div style={{overflow:'hidden'}}>
                            <Charts graphData={Graph2Data} heading={'Activities'} count={561} icon={'cubes'} color={['#269e1e']} width={300} height={180}/>
                          </div>
                          <div style={{overflow:'hidden'}}>
                            <Charts graphData={Graph1Data} heading={'Impression'} count={26010} icon={'eye'} color={['#e0c10f']} width={300} height={180}/>
                          </div>
                        </SwipeableViews>

                        <div style={{textAlign:'center',padding:10,marginLeft:140}}>
                          <center>
                         <div style={{height: '10px',width: '10px',backgroundColor:this.state.graphIndex == 0 ? 'orange' :'black',borderRadius: '50%',display:'inlineBlock',float:'left',margin:5}}></div>
                         <div style={{height: '10px',width: '10px',backgroundColor:this.state.graphIndex == 1 ? 'orange' :'black',borderRadius: '50%',display:'inlineBlock',float:'left',margin:5}}></div>
                         <div style={{height: '10px',width: '10px',backgroundColor:this.state.graphIndex == 2 ? 'orange' :'black',borderRadius: '50%',display:'inlineBlock',float:'left',margin:5}}></div>
                         <div style={{height: '10px',width: '10px',backgroundColor:this.state.graphIndex == 3 ? 'orange' :'black',borderRadius: '50%',display:'inlineBlock',float:'left',margin:5}}></div>
                       </center>

                       </div>

                        <Grid style={{marginTop:10}}>
                          <Grid.Row style={{backgroundColor:'#D7DADC',marginTop:'5%'}}>
                            {/* <Grid.Column width={1} /> */}
                            <Grid.Column width={2} >
                              <Checkbox style={{padding:12,marginTop:'-15%'}} onChange={()=>this.setState({checkBox:!this.state.checkBox})} />
                           </Grid.Column>
                            <Grid.Column width={4}>
                              <Header as={'h5'} style={{padding:8}}>Product Name</Header>
                            </Grid.Column>
                            <Grid.Column width={4} style={{marginTop:'2%'}}>
                              <Header as={'h5'}>Order Number/Line</Header>
                            </Grid.Column>
                            <Grid.Column width={3} >
                              <Header as={'h5'} style={{padding:8}}>Status</Header>
                            </Grid.Column>
                            <Grid.Column width={3} style={{marginTop:'1%'}} >
                              <Icon name='edit' size='large' disabled = {!this.state.checkBox} />
                            </Grid.Column>
                          </Grid.Row>

                          <Grid.Row>
                            <Grid.Column>
                              {this.renderReputationData()}
                            </Grid.Column>
                          </Grid.Row>
                        </Grid>
                      </div>
                      <div style={{overflow:'hidden'}}>
                        <Segment style={{marginTop:10}} inverted color="grey"><center>No Performance Data</center></Segment>
                     </div>
                    </SwipeableViews>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </div>
            </Sidebar.Pusher>
          </Sidebar.Pushable>
           <DashboardFooter />
         </div>
      );
    }
    else if (this.state.selectedSideBar == 'Accounts and Billings') {
        return(
          <div>
          <Sidebar.Pushable as={Segment}>
              <Sidebar as={Menu} animation='push' width='thin' visible={this.state.visible} icon='labeled' vertical inverted>
                <Menu.Item name='home'  onClick={()=>this.setState({selectedSideBar:'DashBoard',visible:!this.state.visible})}>
                  <Icon name='dashboard' />
                  DashBoard
                </Menu.Item>
                <Menu.Item name='gamepad' onClick={()=>this.setState({selectedSideBar:'Your Analytics',visible:!this.state.visible})}>
                  <Icon name='line chart' />
                  Your Analytics
                </Menu.Item>
                <Menu.Item name='camera' onClick={()=>this.setState({selectedSideBar:'Accounts and Billings',visible:!this.state.visible})}>
                  <Icon name='newspaper' />
                  Accounts and Billings
                </Menu.Item>
                <Menu.Item name='camera' onClick={()=>this.setState({selectedSideBar:'Business Profile',visible:!this.state.visible})}>
                  <Icon name='user outline' />
                  Business Profile
                </Menu.Item>
              </Sidebar>
              <Sidebar.Pusher>
                <div>
                <Menu inverted style={styles.container}>
                  <Menu.Item onClick={this.handleSideBar.bind(this)}>
                    <Icon name="bars" />
                  </Menu.Item>

                  <Menu.Menu position='left'>
                    <Menu.Item >
                      <span style={styles.titleText}>Search</span>
                    </Menu.Item>

                    <Menu.Item >
                      <span >Advertise</span>
                      <Icon name="phone" />
                      <span >0800 777 449</span>
                    </Menu.Item>
                  </Menu.Menu>
                </Menu>
              </div>

              <div>
                <MenuBarDirectMobile />
              </div>

              <div>
                <Grid padded>
                  <Grid.Row columns={2}>
                      <Grid.Column>
                        <Form>
                            <Form.Field>
                              <label>Start Date</label>
                              <Input placeholder='Start Date' type="date" icon="calendar"/>
                            </Form.Field>
                          </Form>
                      </Grid.Column>

                      <Grid.Column>
                        <Form>
                            <Form.Field>
                              <label>End Date</label>
                              <Input placeholder='Start Date' type="date" icon="calendar"/>
                            </Form.Field>
                          </Form>
                      </Grid.Column>
                  </Grid.Row>

                  <Grid.Row>
                    <Grid.Column width={16}>
                    <center><Button color={'yellow'} style={{color:'black'}}>Search</Button></center>
                    </Grid.Column>
                  </Grid.Row>

                  <Grid.Row>
                    <Menu  pointing secondary color={'orange'}>
                      <Menu.Item name='All Invoices' active={activeItem1 ==='All Invoices' } onClick={this.handleIndex.bind(this)}>
                          All Invoices
                          <Label color='orange'>10</Label>
                      </Menu.Item>
                      <Menu.Item name='Pending Payments' active={activeItem1 === 'Pending Payments'}  onClick={this.handleIndex.bind(this)}>
                        Pending Payments
                        <Label color='orange'>2</Label>
                      </Menu.Item>
                    </Menu>
                  </Grid.Row>

                  <Grid.Row>
                    <Grid.Column width={16}>
                      <SwipeableViews index={this.state.accountsIndex}>
                        <div style={{overflow:'hidden'}}>
                          <Grid>
                            <Grid.Row style={{backgroundColor:'#D7DADC',marginTop:'5%'}}>
                              <Grid.Column width={1} />
                              <Grid.Column width={6}>
                                <Header as={'h5'}>Invoice Number</Header>
                              </Grid.Column>
                              <Grid.Column width={7}>
                                <Header as={'h5'}>Action</Header>
                              </Grid.Column>
                              <Grid.Column width={2} />
                            </Grid.Row>
                            {this.handleAllInvoiceRender()}
                            <Grid.Row>
                              <Grid.Column width={16}>
                                <center>
                                <Pagination defaultActivePage={1} totalPages={2} onPageChange={this.handleAllInvoicePaginationChange.bind(this)}/>
                              </center>
                              </Grid.Column>
                            </Grid.Row>
                          </Grid>
                        </div>

                        <div style={{overflow:'hidden'}}>
                          <Grid>
                            <Grid.Row style={{backgroundColor:'#D7DADC',marginTop:'5%'}}>
                              <Grid.Column width={1} />
                              <Grid.Column width={6}>
                                <Header as={'h5'}>Invoice Number</Header>
                              </Grid.Column>
                              <Grid.Column width={7}>
                                <Header as={'h5'}>Action</Header>
                              </Grid.Column>
                              <Grid.Column width={2} />
                            </Grid.Row>
                          {this.handlePendingPaymentRender()}
                          <Grid.Row>
                            <Grid.Column width={16}>
                              <center>
                              <Pagination defaultActivePage={5} totalPages={2} />
                            </center>
                            </Grid.Column>
                          </Grid.Row>
                          </Grid>
                        </div>
                      </SwipeableViews>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </div>
              </Sidebar.Pusher>
            </Sidebar.Pushable>
            <DashboardFooter />
           </div>
        )
    }
    else {
        return(
          <div>
          <Sidebar.Pushable as={Segment}>
              <Sidebar as={Menu} animation='push' width='thin' visible={this.state.visible} icon='labeled' vertical inverted>
                <Menu.Item name='home'  onClick={()=>this.setState({selectedSideBar:'DashBoard',visible:!this.state.visible})}>
                  <Icon name='dashboard' />
                  DashBoard
                </Menu.Item>
                <Menu.Item name='gamepad' onClick={()=>this.setState({selectedSideBar:'Your Analytics',visible:!this.state.visible})}>
                  <Icon name='line chart' />
                  Your Analytics
                </Menu.Item>
                <Menu.Item name='camera' onClick={()=>this.setState({selectedSideBar:'Accounts and Billings',visible:!this.state.visible})}>
                  <Icon name='newspaper' />
                  Accounts and Billings
                </Menu.Item>
                <Menu.Item name='camera' onClick={()=>this.setState({selectedSideBar:'Business Profile',visible:!this.state.visible})}>
                  <Icon name='user outline' />
                  Business Profile
                </Menu.Item>
              </Sidebar>
              <Sidebar.Pusher>
                <div>
                <Menu inverted style={styles.container}>
                  <Menu.Item onClick={this.handleSideBar.bind(this)}>
                    <Icon name="bars" />
                  </Menu.Item>

                  <Menu.Menu position='left'>
                    <Menu.Item >
                      <span style={styles.titleText}>Search</span>
                    </Menu.Item>

                    <Menu.Item >
                      <span >Advertise</span>
                      <Icon name="phone" />
                      <span >0800 777 449</span>
                    </Menu.Item>
                  </Menu.Menu>
                </Menu>
              </div>

              <div>
                <MenuBarDirectMobile />
              </div>

              <div>
                <Grid padded>

                <Grid.Row>
                  <Grid.Column width={16}>
                  <Segment inverted color="grey">
                    <center>No Posts Yet</center>
                  </Segment>
                </Grid.Column>
                </Grid.Row>
                </Grid>
              </div>
              </Sidebar.Pusher>
            </Sidebar.Pushable>
            <DashboardFooter />
           </div>



        )
    }


  }
}

const styles={
  compName:{
    color:'yellow',
    fontWeight:'bold'
  },
  titleText:{
    color:'yellow'
  },
  container:{
    margin:0,
    borderRadius:0
  },
  text:{
    color:'black'
  }
}
