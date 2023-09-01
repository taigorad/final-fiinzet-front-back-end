

const path =require("path")
const nodemailer=require("nodemailer")
const express=require("express")
const app=express()
app.use(express.json())
const cors=require("cors")

const mongo2=require("./mongo-connection/mongo2")
app.use(cors())
 // this is for the build connection 
app.use(express.static(path.join(__dirname,"../client/build")))
app.get("*",(req,res)=>{
res.sendFile(path.join(__dirname,"../client/build/index.html"))
})

const mongo1=require("./mongo-connection/mongo1")
app.get("/",(req,res)=>{
    res.send("hyyy")
})

app.post("/contact",async(req,res)=>{
    let result=new mongo1({
        name:req.body.name,
        phone:req.body.phone,
        email:req.body.email,
        message:req.body.message,
        
    })
 let result1=await result.save()
    //console.log(req.body)
   //console.log(result)
 res.send(result1)

 if(result1){
    const transporter = nodemailer.createTransport({
        service:'gmail',
        auth: {
        
          user: 'ajit.amane1901@gmail.com',
          pass: 'qchkludmcdmlwuyc'
        }
      });
    
    
      const mailoption={
    
      from:"ajit.amane1901@gmail.com",
    //  to:"ajit.amane@finzet.com",
    to:"ajit.amane@fiinzet.com",
    //to:"ajit.amane1901@gmail.com",
      subject:"Fiinzet : User Contact Details ",
     // text:JSON.stringify(result1)
     text:`Name:${result1.name} , 
     Phone:${result1.phone} , 
     email:1${result1.email},
     Message:${result1.message}`
      }
      transporter.sendMail(mailoption,function (err,info){
        if(err){
            console.log(err)
        }
        else{
             console.log("email sent "+ info.response)
        }
      })
  }
})

app.post("/senduserinput",async(req,res)=>{
  let result=new mongo2({
      name:req.body.name,
      phone:req.body.phone,
      email:req.body.email,
      status:req.body.status,
      pincode:req.body.pincode,
      city:req.body.city
  })
let result1=await result.save()
  
 if(result1){
  const transporter = nodemailer.createTransport({
      service:'gmail',
      auth: {
        // TODO: replace `user` and `pass` values from <https://forwardemail.net>
        user: 'ajit.amane1901@gmail.com',
        pass: 'qchkludmcdmlwuyc'
      }
    });
  
  
    const mailoption={
      from:"ajit.amane1901@gmail.com",
      to:"ajit.amane@fiinzet.com",
   // to:"ajit.amane1901@gmail.com",
    subject:"Fiinzet : User Contact Details",
    text:`Full_Name:${result1.name},
    Phone_No: ${result1.phone},
    Email_Address:${result1.email},
    City:${result1.city},
    Pin_Code:${result1.pincode},
    Employee_Status:${result1.status}
     
    `
    }
    transporter.sendMail(mailoption,function (err,info){
      if(err){
          console.log(err)
      }
      else{
           console.log("email sent "+ info.response)
           console.log("mail send")
      }
    })
 }
res.send(result1)
})


app.listen(8000,()=>{
    console.log("server start")
})
