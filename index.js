var express = require('express');
const bodyparser=require('body-parser');
debugger;
const {db}=require('./config/database');
var app = express();
var cors=require('cors');
//var productRoute = require('./routes/product.routes');
const userRoute = require('./routes/user.routes');
const imageRoute=require('./routes/image.routes');
debugger;
 app.get('/',(req,res)=>{
     res.end("hello start property backend")
 });
debugger;
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({limit:'50mb',extended:true}));
app.use(cors())
if (db){
    console.log("sucess")
} else {
    console.log("not")
}
debugger;
//app.use('/product',productRoute);
app.use('/user',userRoute);
app.use('/product',imageRoute);

app.listen(3001, (err) => {
    if (err) {
        console.log(err)
        console.log('Error in connecting with port 3001');
    } else {
        console.log('Server has been set up on port 3001');
    }
});
