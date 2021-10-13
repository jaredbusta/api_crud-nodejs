const express = require('express');
const router = express.Router();

const UsersService = require("../services/users.service");
const service = new UsersService();

router.get('/', async (req,res,next )=>{
  try {
        const users = await service.find();
        res.json(users);
  } catch (error) {
        next(error);
  }
});
router.get('/:id',(req,res )=>{
    const {id} = req.params;
    res.status(200).json(service.findOne(id));
});


module.exports = router;