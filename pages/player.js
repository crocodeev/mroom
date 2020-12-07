import ToggleButton from '../components/ToggleButton'
import TrackPosition from '../components/TrackPosition'
import Channel from '../components/Channel'
import Sound from '../soundEngine/sound'
import Equlizer from '../components/Equlizer'
import { useState, useRef } from 'react'
import { Howler } from 'howler'

export default function Player(){


const [title, setTitle] = useState("Title")  
const [artist, setArtist] = useState("Artist")
//count of EQ bars
const [frequencyBandArray, setFrequencyBandArray] = useState([...Array(25).keys()])


const [analyser, setAnalyser] = useState(null)



  const sound = new Sound()
  sound.on('play', (metaData) => {
      setTitle(metaData[0])
      setArtist(metaData[1])
    })


  async function play() {
      await sound.play()
     
      const analyser = Howler.ctx.createAnalyser()
      Howler.masterGain.connect(analyser)
      analyser.connect(Howler.ctx.destination)
      analyser.fftSize = 64
      
      setAnalyser(analyser)
    
  }


  function getFrequencyData (spectrumSetter){
    const bufferLength = analyser.frequencyBinCount
    const dataArray = new Uint8Array(bufferLength)
    analyser.getByteFrequencyData(dataArray)
    spectrumSetter(dataArray)
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
            { analyser ?
            <Equlizer
                analyser = {analyser}
                frequencyBandArray = {frequencyBandArray}
                getFrequencyData = {getFrequencyData}
            />
            :null
            }
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