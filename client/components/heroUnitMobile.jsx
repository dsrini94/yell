import React from 'react';
import { Segment,Grid,Image,Icon,Input,Button } from 'semantic-ui-react'

function HeroUnitTablet(){
  return(
    <div style={styles.container}>

      <Image src={'./client/assets/images/hero1.png'} style={styles.image}/>

      <div style={styles.textContainer}>
        <span style={styles.text}>Yell.com</span>
        <span style={styles.subText}> The UK's leading online business directory</span>
      </div>

      <div style={styles.fieldContainer}>
      <center>
        <Input icon='search' iconPosition='left' placeholder='Search...'  style={styles.componentPadding}/>
        <Input icon='globe' iconPosition='left' placeholder='UK town or postcode'  style={styles.componentPadding}/>
        <br/>
        <Button color='yellow' style={styles.componentPadding}>Search</Button>
     </center>
      </div>

    </div>
  )
}

const styles={
  container:{
    position: 'relative',
    width: '100%',
  },
  image:{
    width:'100%',
    height:'350px'
  },
  fieldContainer:{
    position: 'absolute',
      top: '70%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width:'100%'
  },
  textContainer:{
    position: 'absolute',
    top: '30%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  text:{
    fontSize:'25px',
    color:'#dbce1a',
    fontWeight:'bold',
    lineHeight: '20px'
  },
  subText:{
    fontSize:'25px',
    color:'white',
    fontWeight:'bold',
    lineHeight: '20px'

  },
  componentPadding:{
    margin:'10px',
    alignItems:'center'
  }
}


export default HeroUnitTablet;
