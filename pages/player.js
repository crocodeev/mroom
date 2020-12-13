import ToggleButton from '../components/ToggleButton'
import TrackPosition from '../components/VolumeControl'
import Caption from '../components/Caption'
import Channel from '../components/Channel'
import Sound from '../soundEngine/sound'
import Equlizer from '../components/Equlizer'
import VolumeControl from '../components/VolumeControl'
import { useState, useRef, useEffect } from 'react'
import { Howler } from 'howler'

const sound = new Sound()
window.sound = sound


export default function Player(){

function changePicture(channel){
    
    const header = new Headers()
        header.append("Content-Type", "application/json")

        const raw = JSON.stringify({
            channel: channel
        })

        const requestOptions = {
            method: 'POST',
            headers: header,
            body: raw,
            redirect: 'follow'
          }

    fetch("http://localhost:3000/api/getPicture", requestOptions)
    .then(data => data.blob())
    .then(blob => {
        const url = URL.createObjectURL(blob)
        document.getElementsByTagName("body")[0].style.backgroundImage = `url(${url})`
        document.getElementsByTagName("body")[0].style.backgroundSize = "cover"
        return url
    })
    .then(url => URL.revokeObjectURL(url))
    .catch(err => console.log(err))
}    

useEffect(() => {
    changePicture("hard")
    sound.channel = "hard"
    sound.on('play', (metaData) => {
        setTitle(metaData[0])
        setArtist(metaData[1])
      })
},[])    


//count of EQ bars
const [frequencyBandArray, setFrequencyBandArray] = useState([...Array(25).keys()])
const [analyser, setAnalyser] = useState(null)
//metadata
const [title, setTitle] = useState("Title")
const [artist, setArtist] = useState("Artist")
//first play or not
const isStarted = useRef(false)


  async function play() {
      if(isStarted.current){

        sound.togglePausePlay()

      }else{
        await sound.play()
     
        const analyser = Howler.ctx.createAnalyser()
        Howler.masterGain.connect(analyser)
        analyser.connect(Howler.ctx.destination)
        analyser.fftSize = 64
        setAnalyser(analyser)

        isStarted.current = true

      }
  }

//eq works
  function getFrequencyData (spectrumSetter){
    const bufferLength = analyser.frequencyBinCount
    const dataArray = new Uint8Array(bufferLength)
    analyser.getByteFrequencyData(dataArray)
    spectrumSetter(dataArray)
  }

//change channel
  function setChannel (event){
      console.log("Setting channel");
      let value = event.target.value
      changePicture(value)
      sound.setChannel(value)
  }


 return(
    <div className="container container-player">
        <Caption texts={artist}/>
        <Caption texts={title}/>
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
            <VolumeControl />
        </div>
        <div className="row">
             <ToggleButton
                onClick = {play}
             ></ToggleButton>
        </div>
        <div className="row ">
            <Channel
            onChange={setChannel}>
            </Channel>   
        </div>
    </div>
 )

}