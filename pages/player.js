import ToggleButton from '../components/ToggleButton'
import TrackPosition from '../components/TrackPosition'
import Channel from '../components/Channel'
import Sound from '../soundEngine/sound'

export default function Player(){

  const sound = new Sound
  
  function play() {
      sound.play()
  }


 return(
    <div className="container container-player">
        <div className="row">
            <h3 className="center-align white-text">Track Name</h3>
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
            <Channel></Channel>   
        </div>
    </div>
 )

}