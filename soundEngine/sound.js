import {Howl, Howler} from 'howler';
import next from 'next';

class Sound {

    constructor() {

        this.index = 0
        this.firstSlot = null
        this.secondSlot = null

    }


   play() {
    
    //check which slot in next
        console.log("current index")
        console.log(this.index)

        if(this.index % 2){
            //check is slot empty
            if(this.secondSlot){

                const track = this.secondSlot
                track.play()

            }else{
               
                const params = {
                    time: "evening",
                    channel: "soft",
                    number: this.index
                }
                    
                this.fetchTrack(params)
            }
        }else{
           
            if(this.firstSlot){
                const track = this.firstSlot
                track.play()
            }else{

                const params = {
                    time: "evening",
                    channel: "soft",
                    number: this.index
                }
                    
                this.fetchTrack(this.firstSlot, params)
       
            }
        }


    }

    async fetchTrack(currentSlot, nextSlot, params){

        const header = new Headers()
        header.append("Content-Type", "application/json")

        const raw = JSON.stringify(params)

        console.log(raw);

        const requestOptions = {
            method: 'POST',
            headers: header,
            body: raw,
            redirect: 'follow'
          }

          let response = await fetch("http://localhost:3000/api/getTrack", requestOptions)
          let result = await response.blob()

          const url = URL.createObjectURL(result)

          const track = currentSlot = new Howl({
              src: url,
              format:["mp3"],
              onplay: () => {
                nextSlot = null
                
              },
              onend: () => {

              }

          })

          URL.revokeObjectURL(url)

          track.play()


    }


}




export default Sound