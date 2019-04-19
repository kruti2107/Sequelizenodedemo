const Product=require('../schema/image.schema');

exports.post=(body,done)=>{

    Product.create(body).then((newProduct)=>{
        if(newProduct){
            done(null,newProduct)
        }
    }).catch((err)=>{
        console.log(err)
    })
};

exports.getProducts=(done)=>{
    Product.findAll({}).then((userData)=>{
        if(userData){
            done(null,userData)
        }
    })
};