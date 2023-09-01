const mongoo=require("mongoose")


const URL="mongodb+srv://taigorad:goradwadi10@cluster0.ba6s9tj.mongodb.net/finjet"

const congfig={
    useNewUrlParser:true,
    useUnifiedTopology:true
}

mongoo.connect(URL,congfig).then(()=>{
    console.log("connected")
})
.catch((err)=>{
    console.log(err)
})


module.exports=mongoo
