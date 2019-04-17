const {Router} = require('express')
var router = new Router()
const {post,get}=require('../controller/user.controller')
const user =require('../schema/user.schema')

router.post('/',(req,res)=>{
    debugger;
    console.log("body is" , req.body)
    post(req.body,(err,result)=>{
        if(err){
            res.json(err)
            res.statusCode = 404;
            console.log(err)
        }else{
            res.json(result)
            res.statusCode = 200;
            debugger;
            console.log("result is" ,result)
        }
    })
});

router.get('/',(req,res)=>{
    get((err,result)=>{
        if(err){
            res.json(err)
            res.statusCode = 404;
            console.log(err)
        }else{
            res.json(result);
            console.log("result is",result)
        }
    })
});

router.delete('/:uid',(req,res)=>{
   user.destroy({where:{uid:2}})
    console.log("Successfully deleted")
});
module.exports=router;
