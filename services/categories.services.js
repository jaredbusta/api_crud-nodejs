const faker = require( 'faker');
const pool = require('../libs/postgres.pool');
class CategoriesService{
    constructor(){
        this.categories=[];
        this.generar();
        this.pool = pool;
        this.pool.on('error',err=>console.error(err));
    }

    generar(){
        for(let i=0; i<15;i++){
            this.categories.push({
                id:faker.datatype.uuid(),
                category: faker.commerce.department()
            });
        }
    }

    async find(){
        const query ="Select * from task";
        const resp = await pool.query(query);
        return resp.rows;
    }
    findOne(id){
        return this.categories.find(item=>item.id==id);
    }
}
module.exports= CategoriesService;