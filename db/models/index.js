const {  User, UserSchema } = require("./user.model");
// const {  Product, UserSchema } = require("./user.model");
// const {  Category, UserSchema } = require("./user.model");

function setupModels(sequelize){
    User.init(UserSchema,User.config(sequelize));
    // Product.init(UserSchema,User.config(sequelize));
    // Category.init(UserSchema,User.config(sequelize));

}

module.exports = setupModels;