const faker = require( 'faker');
const sequelize = require('../libs/sequelize');
class CategoriesService{
    constructor(){
        this.categories=[];
        this.generar();
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
        const [data] = await sequelize.query(query);
        return data;
    }
    findOne(id){
        return this.categories.find(item=>item.id==id);
    }
}
module.exports= CategoriesService;