import fs from 'fs'

export default function getPicture(req,res){
  
    if(req.method === "POST"){

        console.log(req.body)

        const params =  req.body
    
        const trackPath = 'G:\\Atom\\mediaroom\\public\\images\\' + params.channel + '.jpg'

        const file = fs.createReadStream(trackPath)

        res.writeHead(200, {
            'Content-Type': 'image/jpeg',
        })

        file.pipe(res)


      
    }else{
        res.statusCode = 404
        res.send("endpoint didn't exist")
    }
}