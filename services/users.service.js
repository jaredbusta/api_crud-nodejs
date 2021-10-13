const faker = require('faker');
const pool = require('../libs/postgres.pool');
class UsersService{
  constructor(){
    this.users= [];
    this.generate();
    this.pool = pool;
    this.pool.on('error',err=>console.error(err));

  }
  generate(){
    for( var i=0; i < 10; i++ ){
      this.users.push({
        id:faker.datatype.uuid(),
        name:faker.name.firstName(),
        username:faker.internet.userName(),
        password: faker.internet.password(),
        dateCreated:faker.datatype.datetime(),
        email:faker.internet.email(),
      });
    }
  }

  async find(){
    const query = "Select * from task";
    const res = await pool.query(query);
    return res.rows;

  }
  findOne(id){
    return this.users.find( item=>item.id===id);
  }

  create(){}
  update(){}
  delete(id){}




}
module.exports = UsersService;