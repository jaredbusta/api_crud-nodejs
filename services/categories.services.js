const faker = require( 'faker');
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

    find(){
        return this.categories;
    }
    findOne(id){
        return this.categories.find(item=>item.id==id);
    }
}
module.exports= CategoriesService;