
//VARAYA ~/projects/node $ npm install express --save

const express = require('express');
//const bodyParser = require('body-parser');
const app = express();
const Rutas = require('./routes/rutas.js');
const jade = require('jade');
const mongoose = require('mongoose');
const formidable = require('express-formidable');
const cloudinary = require('cloudinary')

let port = process.env.PORT || 3000;

app.use(formidable({
  encoding: 'utf-8',
  uploadDir: './static/img',
  keepExtensions: true,
  multiples: true
}));

//app.listen(3000);

// req: requerimiento de afuera
// res: respuesta


//app.get('/', (req, res) => {

//  res.send('hola mundo').end();

//})

// set: pasar configuraciones de express

app.set('view engine', 'jade');
app.set('views', './views');

mongoose.connect('mongodb://admin:admin@ds113841.mlab.com:13841/tallernode', err => {

    if(err) {
      console.log(err);
    }else{
      console.log('conectando con exito a la db mongodb');
    }
});
// use: cofigura los modulos que estan afuera

app.use(express.static('./static')); // con esta carpeta va a quedar publica

//app.use(bodyParser.json());

//app.use(bodyParser.urlencoded({extended: true}));

app.use('/', Rutas); // siempre tiene que ir abajo

cloudinary.config({
  cloud_name: 'djdskynjf',
  api_key: '198711396666277',
  api_secret: 'azKuc4uH89Nwxo4jcMA6spQ3TZI' 
});

app.listen(port, err => {

  if (err){
    console.log(err)
  } else {
    console.log(`server running port ${port}`)
  }
});
