const {Router} = require('express');
const router= Router();
const multer=require('multer');
const path=require('path');
const {post}= require('../controller/image.controller');

//Store image in specific folder

var storage=multer.diskStorage({
    destination:function (req,file,callback) {
        callback(null,'./imgUploads')
    },
    filename:function (req,file,callback) {
        callback(null,file.fieldname + '_' + Date.now() + path.extname(file.originalname))
    },
    size:{
        height:100,
        width:100
    }
});

var upload = multer({storage:storage}).array('image',10);
router.post('/',upload, (req,res,next)=>{
    var pictures=[];
    for(let picture of req.files){
        pictures.push(picture.filename);
    }
    req.body.image=JSON.stringify(pictures);
    post(req.body,(err,result)=>{
        if(err){
            res.statusCode=400;
            res.json(err);
        }
        else{
            res.statusCode=200;
            res.json(result);
        }
    })
});

module.exports=router;