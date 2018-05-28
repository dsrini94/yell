import React from 'react';
import { Segment,Grid,Image,Icon,Input,Button } from 'semantic-ui-react'

function HeroUnit(){
  return(
    <div style={styles.container}>

      <Image src={'./client/assets/images/hero1.png'} style={styles.image}/>

      <div style={styles.textContainer}>
        <span style={styles.text}>Yell.com</span>
        <span style={styles.subText}> The UK's leading online business directory</span>
      </div>

      <div style={styles.fieldContainer}>
        <Input icon='search' iconPosition='left' placeholder='Search...'  style={styles.componentPadding}/>
        <Input icon='globe' iconPosition='left' placeholder='UK town or postcode'  style={styles.componentPadding}/>
        <Button color='yellow' style={styles.componentPadding}>Search</Button>
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
    height:'700px'
  },
  fieldContainer:{
    position: 'absolute',
      top: '60%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
  },
  textContainer:{
    position: 'absolute',
    top: '50%',
    left: '46%',
    transform: 'translate(-50%, -50%)',
  },
  text:{
    fontSize:'30px',
    color:'#dbce1a',
    fontWeight:'bold'
  },
  subText:{
    fontSize:'30px',
    color:'white',
    fontWeight:'bold'
  },
  componentPadding:{
    margin:'10px'
  }
}


export default HeroUnit;
