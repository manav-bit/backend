const express =require('express');
const app=express();
const cors=require('cors');
const mongoose=require('mongoose');
const authRoutes=require('./Routes/AuthRoutes');
const cookieParser=require('cookie-parser');
app.listen(4000,()=>{
console.log("server started ");
});
mongoose.connect("mongodb+srv://manavX:helloX1@cluster0.xcghynf.mongodb.net/?retryWrites=true&w=majority",{
    // useNewUrlParams: true,
    // useUnifiedTopology: true,
}).then(()=>{
    console.log("DB Connection Successfull")
}).catch((err)=>{
    console.log(err.message)
});
app.use(cors({
    origin:["http://localhost:3000"],//abhi local host daal rha hu agar kahi host ki to vaha ka address aegaa
    method:["GET","POST"],//other request like patch will be blocked if u want to use add it here
    credentials:true,
})
);

app.use(cookieParser())
app.use(express.json());
app.use("/",authRoutes)
