const app = require("./app");
const db=require('./config/db')
const UserModel=require('./model/user.model')

const port=3000;
const mongoose=require('mongoose')

mongoose.connect('mongodb+srv://yash:12345@c0.lpyd8ze.mongodb.net/')
.then((result)=>{
    console.log("connected")
})
.catch((err)=>{
    console.log(err);
})


app.get('/',(req,res)=>{
    res.send("hello yash")
});


async function CreateUser(){
    const user = await UserModel.create({email:'test@gmail.com',password:'12345'})
}



app.listen(port,()=>{
    console.log(`Server Listening on Port http://localhost:${port}`);
})