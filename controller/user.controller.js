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
    user.findAll({}).then((userData)=>{
        if(userData){
            done(null,userData)
        }
    })
};

exports.delete=(id)=>{
   user.destroy({where:{
       uid:id
       }
       })
};