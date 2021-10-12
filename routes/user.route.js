const express = require('express');
const router = express.Router();

const UsersService = require("../services/users.service");
const service = new UsersService();

router.get('/',(req,res )=>{
  const {limit, offset} = req.query;
  if(limit &  offset){
    res.staus(200).json({
      limit,
      offset,
      data: service.find()
    });
  }else{
    res.status(200).json(service.find());
  }
});
router.get('/:id',(req,res )=>{
    const {id} = req.params;
    res.status(200).json(service.findOne(id));
});


module.exports = router;