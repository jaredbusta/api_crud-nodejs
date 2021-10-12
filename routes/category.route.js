const express = require('express');
const router = express.Router();
const CategoriesService = require('../services/categories.services');
const service = new CategoriesService();

/** rutas complejas con mas de un parametro */
router.get('/:categoryId/products/:productoId',(req,res)=>{
  const {categoryId,productoId } = req.params;
  res.json({
    categoryId,
    productoId
  });
});

router.post('/',(req,res)=>{

});

router.get('/',(req, res)=>{
  res.json( service.find() )
});
router.get('/:id',(req, res)=>{
    const {id} = req.params;
  res.json( service.findOne(id) )
});
module.exports = router;
