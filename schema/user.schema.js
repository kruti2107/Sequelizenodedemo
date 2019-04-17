const Sequelize = require('sequelize');
const {db} = require('../config/database')
debugger;
const userSchema = db.define(
    'tbl_user',{

    uid:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    userName:{
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    },
    phoneNo: {
        type: Sequelize.STRING
    }
});

userSchema.sync({force:false}).then(()=>{
    debugger;
    console.log("sucess");
}).catch((err)=>{
    console.log(err)
});

module.exports = userSchema;
