const express = require("express");
const cors = require( 'cors');
const routerApi = require("./routes");
const {logErrors, errorHandler, boomErrorHandler, ormErrorHandler} = require('./middleware/error.handler')


const app = express();
const port = 3000;
app.use(express.json()); // este middlewere se encarga de procesar los datos en formato json que se envian desde el post
const whitelist=['http://127.0.0.1:5500','http://localhost:3000','http://127.0.0.1:3000' ];
const options={
    origin: (origin, callback)=>{

        if(whitelist.indexOf(origin)!== -1 ){
            callback(null,true);
        }
        else{
            callback(new Error('No permitido'))
        }

    }
}
app.use(cors());
const menu=`
  por acá va el menu
  `;
app.get('/',(req, res)=>{

  res.send(menu)
});

routerApi(app);
app.use(logErrors); // implementa middleware
app.use(ormErrorHandler); // implementa middleware de captura de errores del ORM
app.use(boomErrorHandler); // implementa middleware
app.use(errorHandler); // implementa middleware

app.get('/home',(req, res)=>{
  res.json( {
    'name': 'Producto 1',
    'price': '100 usd',
  } )
});

app.listen(port,()=>{
  console.log(`http://localhost:${port}`);
});
