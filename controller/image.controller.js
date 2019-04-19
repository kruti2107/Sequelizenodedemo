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

exports.deleteById=(id,done)=>{
    Product.findOne({where:{id:id}}).then((getdata)=>{
        if(getdata){
            Product.destroy({where:{id:id}}).then((data)=>{
                done(null,data)
            }).catch((err)=>{
                console.log(err)
            })
        }
    })
};

exports.updateById=(id,body,done)=>{
    Product.update(body,{where:{id:id}}).then((updatedata)=>{
        done(null,updatedata)
    }).catch((err)=>{
        console.log(err)
    })
};