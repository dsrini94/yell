import React,{ Component } from 'react';
import { Grid, Menu, Segment, Icon, Header, Form, Input, Button, Table, Label ,Accordion } from 'semantic-ui-react';
import SwipeableViews from 'react-swipeable-views';

import allInvoiceData from './../data/allInvoiceData.js';
import pendingPayment from './../data/pendingPaymentData.js';

export default class BillingTableMobile extends React.Component
{
  constructor()
  {
    super();
    this.state={
      activeItem1:'All Invoices',
      index:0,
      activeIndexAccordion:99
    }
  }
  handleIndex(e, { name }) {
    this.setState({ activeItem1: name,index:e })
  }
  handleClick(e){
    const newIndex = this.state.activeIndexAccordion === e ? -1 : e
    this.setState({ activeIndexAccordion: newIndex })
  }
  handleAllInvoiceRender()
  {
    return(
      allInvoiceData.map((item,key)=>{
        var color =  item.action == 'Make Payment' ? 'red' : 'green';
        var textColor =  item.action == 'Make Payment' ? 'red' : '';
        return(
          <Grid.Row key={key}>
            <Grid.Column width={16}>
              <Accordion>
                 <Accordion.Title active={this.state.activeIndexAccordion === key} index={key} onClick={this.handleClick.bind(this,key)}>
                   <Grid>
                     <Grid.Row style={{padding:0}}>
                       <Grid.Column width={1}/>
                       <Grid.Column width={1}>
                         <div style={{padding:3,backgroundColor:color,float:'left',height:40}}></div>
                       </Grid.Column>
                       <Grid.Column width={4} style={{marginTop:'2%'}}>
                         {item.number}
                       </Grid.Column>
                       <Grid.Column width={7} style={{marginTop:'2%'}}>
                         <span style={{color:textColor,fontWeight:'bold',padding:20}}>{item.action}</span>
                       </Grid.Column>
                        <Grid.Column width={2} style={{marginTop:'2%'}}>
                          <Icon name='dropdown' style={{float:'right'}}/>
                        </Grid.Column>
                        <Grid.Column width={1} />
                     </Grid.Row>
                   </Grid>
               </Accordion.Title>
                 <Accordion.Content active={this.state.activeIndexAccordion === key}>
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
                 <Accordion.Title active={this.state.activeIndexAccordion === key} index={key} onClick={this.handleClick.bind(this,key)}>
                   <Grid>
                     <Grid.Row style={{padding:0}}>
                       <Grid.Column width={1}/>
                       <Grid.Column width={1}>
                         <div style={{padding:3,backgroundColor:color,float:'left',height:40}}></div>
                       </Grid.Column>
                       <Grid.Column width={4} style={{marginTop:'2%'}}>
                         {item.number}
                       </Grid.Column>
                       <Grid.Column width={7} style={{marginTop:'2%'}}>
                         <span style={{color:textColor,fontWeight:'bold',padding:20}}>{item.action}</span>
                       </Grid.Column>
                        <Grid.Column width={2} style={{marginTop:'2%'}}>
                          <Icon name='dropdown' style={{float:'right'}}/>
                        </Grid.Column>
                        <Grid.Column width={1} />
                     </Grid.Row>
                   </Grid>
               </Accordion.Title>
                 <Accordion.Content active={this.state.activeIndexAccordion === key}>
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


  render(){
    return(
      <div>
        <SwipeableViews index={this.state.index}>
          <div style={{overflow:'hidden'}}>
            <Grid>
              <Grid.Row style={{backgroundColor:'#D7DADC',marginTop:'5%'}}>
                <Grid.Column width={2} />
                <Grid.Column width={6}>
                  <Header as={'h5'}>Invoice Number</Header>
                </Grid.Column>
                <Grid.Column width={6}>
                  <Header as={'h5'}>Action</Header>
                </Grid.Column>
                <Grid.Column width={2} />
              </Grid.Row>
              {this.handleAllInvoiceRender()}
            </Grid>
          </div>

          <div style={{overflow:'hidden'}}>
            <Grid>
              <Grid.Row style={{backgroundColor:'#D7DADC',marginTop:'5%'}}>
                <Grid.Column width={2} />
                <Grid.Column width={6}>
                  <Header as={'h5'}>Invoice Number</Header>
                </Grid.Column>
                <Grid.Column width={6}>
                  <Header as={'h5'}>Action</Header>
                </Grid.Column>
                <Grid.Column width={2} />
              </Grid.Row>
            {this.handlePendingPaymentRender()}
            </Grid>
          </div>
        </SwipeableViews>
      </div>
    )
  }
}
