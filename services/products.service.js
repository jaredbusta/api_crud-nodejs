const faker = require('faker');
const boom = require('@hapi/boom');
const pool = require('../libs/postgres.pool');

class ProductsService{

  constructor(){
    this.products =[];
    this.generate();
    this.pool = pool;
    this.pool.on('error',(err)=>{
        console.error(err);
    });
  }
  generate(){
    const limit =100;
    for(let i =0;i<limit;i++){
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseFloat(faker.commerce.price()),
        image:faker.image.imageUrl(),
        isBlock: faker.datatype.boolean()
      });
    }
  }

  async create(data){
      const newProduct={
          id: faker.datatype.uuid(),
          ...data
      };
      this.products.push(newProduct);
      return newProduct;

  }
  async find(){
        const query = "Select * from task";
        const resp = await this.pool.query(query);
        return resp.rows;
  }
  findOne(id){
    const product = this.products.find(item=>item.id==id);
    if(!product){
        throw boom.notFound("Product not found");
    }
    if(product.isBlock){
        throw boom.conflict('product is blocked');
    }
    return product;
  }
  async update(id, data){
      const index = this.products.findIndex(item=>item.id===id);
      if(index===-1){
          throw boom.notFound('Product not fouund');
      }
      const producto  =this.products[index];
      this.products[index] = { ...producto, ...data };
      return this.products[index];
  }
  async delete(id){
    const productoIndex = this.products.findIndex(item=> item.id==id );
    if(productoIndex === -1){
        throw boom.notFound('Product not found');

    }
    const producto = this.findOne(id);
    this.products.splice(productoIndex,1);
    return {
        data: producto,
        message: "Eliminado"
    }
  }
}

module.exports = ProductsService