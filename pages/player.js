import Slider from 'react-input-slider'
import { useState } from 'react'
import { render } from 'react-dom'
import Pause from '../components/Pause'
import Play from '../components/Play'
import Select from '../components/Channel'
import Channel from '../components/Channel'

export default function Player(){

  const sliderStyle={
        track: {
          backgroundColor: '#f5f5f5',
          width: "90%",
          height: 5,
          position: "relative",
          left: "5%"
        },
        active: {
          backgroundColor: 'white'
        },
        thumb: {
          width: 20,
          height: 20
        },
        disabled: {
          opacity: 0.5
        }
  }  

 return(
    <div className="container cyan lighten-4">
    <h3 class="center-align white-text">Track Name</h3>
    <Slider
        axis="x"
        styles={sliderStyle}
      />  
    
    <Channel></Channel>  
    </div>
 )

}