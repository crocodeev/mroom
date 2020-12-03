
import Slider from 'react-input-slider'

export default function TrackPosition(){

    const sliderStyle={
        track: {
          backgroundColor: '#f5f5f5',
          width: "90%",
          height: 4,
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
         <Slider
            axis="x"
            styles={sliderStyle}
            />
    )
}