import ToggleButton from '../components/ToggleButton'
import TrackPosition from '../components/TrackPosition'
import Channel from '../components/Channel'
import ChannelCustom from '../components/ChannelCustom'
import Sound from '../soundEngine/sound'
import { useState } from 'react'

export default function Player(){

const [title, setTitle] = useState("Title")  
const [artist, setArtist] = useState("Artist")


  const sound = new Sound()
  sound.on('play', (metaData) => {
      setTitle(metaData[0])
      setArtist(metaData[1])
    })
  
  function play() {
      sound.play()
  }

  function setChannel (){
      console.log(click)
  }


 return(
    <div className="container container-player">
        <div className="row">
            <h4 className="center-align white-text">{artist}</h4>
        </div><div className="row">
            <h4 className="center-align white-text">{title}</h4>
        </div>
        <div className="row">
            <TrackPosition/>
        </div>
        <div className="row">
             <ToggleButton
                onClick = {play}
             ></ToggleButton>
        </div>
        <div className="row ">
            <Channel>
                </Channel>   
        </div>
    </div>
 )

}