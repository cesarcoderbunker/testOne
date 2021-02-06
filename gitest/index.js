const express =  require('express');
const {readFile} = require('fs')




const app = express()

app.get('/', (request,response)=>{
    readFile('./text.txt', 'utf8' , (err, data) => {
        if (err) {
          console.error("err", err)
          return
        }
        response.send(data);
      })
})

app.get('/viva', (req,res)=>{
    console.log('bam bam bam')
    res.json({ username: 'Flavio',
    hey: 'Flavio',
    soom: 'Flavio', })
    })

    app.get('/test', (request,response)=>{

        readFile('./index.html', 'utf8' , (err, data) => {
            if (err) {
              console.error("err", err)
              return
            }
            response.send(data);
          })
    
    
    })



app.listen(process.env.PORT || 3000, () => console.log('App available at localhost 3000s'))