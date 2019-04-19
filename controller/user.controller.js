const user =require('../schema/user.schema')

exports.post=(body,done)=>{

    user.create(body).then((userData)=>{
        if(userData){
            done(null,userData)
        }
    }).catch((err)=>{
        console.log(err)
    })
};

exports.get=(done)=>{
    user.findAll({}).then((productData)=>{
        if(productData){
            done(null,productData)
        }
    })
};

exports.deleteById=(id,done)=>{
    user.findOne({where:{uid:id}}).then((getdata)=>{
        if(getdata){
            user.destroy({where:{uid:id}}).then((data)=>{
                done(null,data)
            }).catch((err)=>{
                console.log(err)
            })
        }
    })
};

exports.updateById=(id,body,done)=>{
    user.update(body,{where:{uid:id}}).then((updatedata)=>{
        done(null,updatedata)
    }).catch((err)=>{
        console.log(err)
    })
};