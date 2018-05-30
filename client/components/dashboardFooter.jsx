import React from 'react';
import {Grid,List,Image} from 'semantic-ui-react';
import DividerBottom from './dividerBottom.jsx';
const dashboardFooter = (props) => (
    <Grid>
      <Grid.Row>
        <Grid.Column width={2} />
        <Grid.Column width={12}>
          <List celled horizontal>
            <List.Item style={styles.listHeader}>Our business products and services: </List.Item>
            <List.Item style={styles.listContent}>Websites </List.Item>
            <List.Item style={styles.listContent}>Yell.com</List.Item>
            <List.Item style={styles.listContent}>Connect </List.Item>
            <List.Item style={styles.listContent}>Pay-Per-Click (PPC)</List.Item>
            <List.Item style={styles.listContent}>Display Advertising</List.Item>
            <List.Item style={styles.listContent}>Yellow Pages</List.Item>
            <List.Item style={styles.listContent}>Video</List.Item>
            <List.Item style={styles.listContent}>Stores</List.Item>
            <List.Item style={styles.listContent}>Yell Business </List.Item>
            <List.Item style={styles.listContent}>hibu Corporate </List.Item>
            <List.Item style={styles.listContent}>Carrers </List.Item>
            <List.Item style={styles.listContent}>Yell Blog </List.Item>
            <List.Item style={styles.listContent}>Contact Us </List.Item>
            <List.Item style={styles.listContent}>Help </List.Item>
            <List.Item style={styles.listContent}>Yell Mobile </List.Item>
            <List.Item style={styles.listContent}>Reviews</List.Item>
            <List.Item style={styles.listContent}>Reviews Policy</List.Item>
            </List>
        </Grid.Column>
        <Grid.Column width={2} />
      </Grid.Row>
      <Grid.Row style={{marginTop:'-23px'}}>
        <Grid.Column width={2} />
        <Grid.Column width={12}>
          <DividerBottom />
        </Grid.Column>
        <Grid.Column width={2} />
      </Grid.Row>
      <Grid.Row  style={{marginTop:'-13px'}}>
        <Grid.Column width={2} />
        <Grid.Column width={12}>
          <p style={styles.list}>Disclaimer: The opinions expressed within Reviews are those of the author and not the views or opinions of Yell Limited.</p>
        </Grid.Column>
        <Grid.Column width={2} />
        </Grid.Row>
        <Grid.Row style={{marginTop:'-10px'}}>
          <Grid.Column width={2} />
          <Grid.Column width={12}>
            <p style={styles.list}>Yell Limited.Registered Office: 3 Forbury Place, Forbury Road, Reading, Berkshire, RG1 3YL. Registered in England and Wales No. 4205228 VAT Number: GB 765 346 017. © Yell Limited 2018. All rights reserved. Yell, Yellow Pages, hibu and other ™ are trademarks of Yell Limited. &nbsp; <span style={styles.footer}>Privacy policy </span>  &nbsp; &  &nbsp; <span style={styles.footer}> Conditions of use</span></p>
          </Grid.Column>
          <Grid.Column width={2} />
          </Grid.Row>
    </Grid>
);

const styles={
  listHeader:{
    fontSize:'14px',
    textDecoration:'underline',
    fontWeight:'bold'
  },listContent:{
    fontSize:'12px',
    textDecoration:'underline'
  },
  list:{
    fontSize:'12px',
    color:'gray'
  },
  footer:{
    textDecoration:'underline'
  }
}

export default dashboardFooter;
