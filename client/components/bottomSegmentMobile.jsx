import React from 'react';
import { Segment,Grid,Image,Icon } from 'semantic-ui-react'

function BottomSegmentMobile(){
  return(
    <div style={styles.container}>
      <Grid padded>
        <Grid.Row columns={1}>

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
    padding:10
  },
  text:{
    fontSize:15,
    padding:0,
    margin:0
  },
  findText:{
    color:'blue',
    fontSize:15,
    padding:0,
    margin:0
  },
  icon:{
    marginBottom:6
  },
  segment:{
    bottomRadius:0,
    marginTop:10
  }
}


export default BottomSegmentMobile;
