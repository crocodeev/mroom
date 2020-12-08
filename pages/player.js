import ToggleButton from '../components/ToggleButton'
import TrackPosition from '../components/TrackPosition'
import Caption from '../components/Caption'
import Channel from '../components/Channel'
import Sound from '../soundEngine/sound'
import Equlizer from '../components/Equlizer'
import { useState, useRef, useEffect } from 'react'
import { Howler } from 'howler'

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

},[])    


//count of EQ bars
const [frequencyBandArray, setFrequencyBandArray] = useState([...Array(25).keys()])
const [analyser, setAnalyser] = useState(null)

const title = useRef("Title")
const artist = useRef("Artist")



  const sound = new Sound()
  console.log(sound)
  sound.on('play', (metaData) => {
      title.current = metaData[0]
      console.log(title.current)
      artist.current = metaData[1]
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


  function setChannel (event){
      let value = event.target.value
      changePicture(value)
      sound.setChannel(value)
  }


 return(
    <div className="container container-player">
        <Caption texts={title.current}/>
        <Caption texts={artist.current}/>
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
            <Channel
            onChange={setChannel}>
            </Channel>   
        </div>
    </div>
 )

}