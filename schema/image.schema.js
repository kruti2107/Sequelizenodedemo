const Sequelize =  require('sequelize')
const {db} = require('../config/database')

const Product =  db.define('products',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    productname:{
        type:Sequelize.STRING,
        allowNull:false
    },
    image:{
        type:Sequelize.STRING,
        allowNull:false
    },
    price:{
        type:Sequelize.DOUBLE,
        allowNull:false
    }
});
Product.sync({force:false}).then(()=>{
    debugger;
    console.log("sucess");
}).catch((err)=>{
    console.log(err)
});

module.exports = Product;