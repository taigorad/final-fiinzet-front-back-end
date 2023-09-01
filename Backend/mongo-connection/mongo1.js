const mongoo=require("./mongo")


// mongoo.connect("mongodb://localhost:27017/project1").then(()=>{
//   console.log("database connected")
// }).catch((err)=>{
//     throw err
// })
const dotenv = require("dotenv");
dotenv.config();

// const URL="mongodb+srv://taigorad:goradwadi10@cluster0.ba6s9tj.mongodb.net/finjet"

// const congfig={
//     useNewUrlParser:true,
//     useUnifiedTopology:true
// }

// mongoo.connect(URL,congfig).then(()=>{
//     console.log("connected")
// })
// .catch((err)=>{
//     console.log(err)
// })

const schema=new mongoo.Schema({
    name:{
        type:String,
        
    },
    phone:{
        type:Number,
        
    },
    email:{
        type:String,
        
    }
    ,
    message:{
        type:String,
        
    },
    
})
const modulee=new mongoo.model("contact",schema)

module.exports=modulee