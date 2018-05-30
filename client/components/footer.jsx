import React from 'react';
import {Grid,List,Image} from 'semantic-ui-react';

const footer = (props) => (
    <Grid>
      <Grid.Row>
        <Grid.Column width={2} />
        <Grid.Column width={12}>
          <h5>About us</h5>
          <List celled horizontal >
            <List.Item style={styles.list}>About Yell.com</List.Item>
            <List.Item style={styles.list}>Reviews</List.Item>
            <List.Item style={styles.list}>Yell Home & Garden </List.Item>
            <List.Item style={styles.list}>Help & Support </List.Item>
            <List.Item style={styles.list}>Yell App </List.Item>
            <List.Item style={styles.list}>Yell Blog </List.Item>
            <List.Item style={styles.list}>Carrers </List.Item>
            </List>
        </Grid.Column>
        <Grid.Column width={2} />
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={2} />
        <Grid.Column width={12}>
          <h5>Our business products and services</h5>
          <List celled horizontal>
            <List.Item style={styles.list}>Yell.com</List.Item>
            <List.Item style={styles.list}>Advertising</List.Item>
            <List.Item style={styles.list}>Websites </List.Item>
            <List.Item style={styles.list}>Connect </List.Item>
            <List.Item style={styles.list}>Online Reputation Manager</List.Item>
            <List.Item style={styles.list}>SEO</List.Item>
            <List.Item style={styles.list}>Pay-Per-Click (PPC)</List.Item>
            <List.Item style={styles.list}>Display</List.Item>
            <List.Item style={styles.list}>Yellow Pages</List.Item>
            <List.Item style={styles.list}>Video</List.Item>
            <List.Item style={styles.list}>Stores</List.Item>
            <List.Item style={styles.list}>Social Media Advertising</List.Item>
            <List.Item style={styles.list}>Free Digital Marketing Essentials</List.Item>
            </List>
        </Grid.Column>
        <Grid.Column width={2} />
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={2} />
        <Grid.Column width={12}>
          <p style={styles.list}>Disclaimer: The opinions expressed within Reviews are those of the author and not the views or opinions of Yell Limited. Registered Office: 3 Forbury Place, Forbury Road, Reading, Berkshire, RG1 3YL. Registered in England and Wales No. 4205228 VAT Number: GB 765 346 017. © Yell Limited 2018. All rights reserved. Yell, Yellow Pages, hibu and other ™ are trademarks of Yell Limited.</p>
        </Grid.Column>
        <Grid.Column width={2} />
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={2} />
          <Grid.Column width={3}>
            <Image src='./client/assets/images/logo.png' size='mini' />
            <span style={styles.list}>© Yell Limited 2018</span>
          </Grid.Column>
          <Grid.Column width={9}>
            <List celled horizontal>
              <List.Item style={styles.list}>Privacy policy</List.Item>
              <List.Item style={styles.list}>Cookie policy</List.Item>
              <List.Item style={styles.list}>Conditions of use</List.Item>
              <List.Item style={styles.list}>Legal </List.Item>
              <List.Item style={styles.list}>Reviews policy</List.Item>
              <List.Item style={styles.list}>Hibu Group</List.Item>
              <List.Item style={styles.list}>Modern Slavery Act Statement</List.Item>
              </List>
          </Grid.Column>
          <Grid.Column width={2} />
          </Grid.Row>
    </Grid>
);

const styles={
  list:{
    fontSize:'12px',
    color:'gray'
  }
}

export default footer;
