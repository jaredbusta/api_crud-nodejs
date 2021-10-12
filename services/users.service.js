const faker = require('faker');
class UsersService{
  constructor(){
    this.users= [];
    this.generate();

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

  find(){
    return this.users;
  }
  findOne(id){
    return this.users.find( item=>item.id===id);
  }

  create(){}
  update(){}
  delete(id){}




}
module.exports = UsersService;