const express = require("express");
const routerApi = require("./routes");
// const { use } = require("./routes/products.route");
const {logErrors, errorHandler, boomErrorHandler} = require('./middleware/error.handler')


const app = express();
const port = 3000;
app.use(express.json()); // este middlewere se encarga de procesar los datos en formato json que se envian desde el post
const menu=`
  por acá va el menu
  `;
app.get('/',(req, res)=>{

  res.send(menu)
});

routerApi(app);
app.use(logErrors); // implementa middleware
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
