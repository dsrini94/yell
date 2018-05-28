import React from 'react';
import { Segment,Grid,Image,Icon } from 'semantic-ui-react'

function BottomSegmentTablet(){
  return(
    <div style={styles.container}>
      <Grid >
        <Grid.Row columns={3}>

          <Grid.Column>
             <Image src='./client/assets/images/promo1.jpg'  />
          </Grid.Column>

          <Grid.Column>
             <Segment style={styles.segment}>
               <center>
                 <Icon name="newspaper" size="big" style={styles.icon}/>
                 <br/>
                 <span style={styles.text}>Get listed with the UK's leading business directory</span>
                 <br/>
                 <span style={styles.findText}>Find out more</span>
               </center>
             </Segment>
          </Grid.Column>

          <Grid.Column>
            <Segment style={styles.segment}>
              <center>
                <Icon name="line graph" size="big" style={styles.icon}/>
                <br/>
                <span style={styles.text}>Advertise your business with us online</span>
                <br/>
                <span style={styles.findText}>Find out more</span>
              </center>
            </Segment>
          </Grid.Column>


        </Grid.Row>
      </Grid>
    </div>
  )
}

const styles={

  container:{
    margin:0,
    backgroundColor:'#167f87',
    padding:20
  },
  text:{
    fontSize:13
  },
  findText:{
    color:'blue',
    fontSize:13
  },
  icon:{
    marginBottom:6
  },
  segment:{
    bottomRadius:0
  }
}


export default BottomSegmentTablet;
