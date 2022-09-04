const express = require("express");
const bcrypt = require("bcrypt");
const UserSchema = require("../models/user.model");
const { application } = require("express");

const router = express.Router();

// router.get('/', (req, res) => {
//   res.send("Route Working");
// });

// add user

router.post('/mk', (req, res) => {
  const { email, password } = req.body;
  
//   console.log(req.body);
//   return req.body;

  if (!email || !password)
    return res.status(400).json({ status: 400, msg: "please fill field" });

  bcrypt.hash(password, 12, (err, hashPass) => {
    if (err) return res.status(500).json({ status: 500, msg: "somthing wrong, please try again" });

    if (!hashPass) return res.status(501).json({ status: 501, msg: "somthing wrong" });

    // insert into db

    let insUser = new UserSchema({ email, password: hashPass });

    insUser.save().then((result) => {
      if (!result) return res.status(400).json({ status:400, msg:"please try again"})
       res.status(200).json({ status:200, msg:"added successfully"})
    }).catch(error =>{
        res.status(401).json({ status:401, msg:""})
    })
  });
});


// login

router.post('/login', (req, res) => {
    const { email, password } = req.body;
    //   return console.log(req.body)
    if (!email || !password) return res.status(400).json({ status: 400, msg: "please fill field" });

    UserSchema.findOne({email},(err,data)=>{
        if(err) return res.status(401).json({ status: 401, msg:err.massage })
        if(!data) return res.status(500).json({ status: 500, msg: "somthing wrong" })

        // user found

        // if(data.status=="Active"){
            bcrypt.compare(password,data.password,(err,isValid)=>{
                if (err) return res.status(501).json({ status: 501, msg: err.message})
                if (!isValid) return res.status(402).json({ status: 402, msg:"wrong credientials"});
                res.status(200).json({ status: 200, msg:{email}});                   
            })
        // }else{
        //     res.status(403).json({ status: 403, msg:"user blocked"});
        // }
    })
});
  
// get all users

router.get('/',(req,res)=>{
        UserSchema.find({},(err,data)=>{
            if(err) return res.status(500).json({ status: 500, msg: "somthing wrong" })
            if(!data) return res.status(400).json({ status: 400, msg: "somthing wrong" })
            res.status(200).json({ status: 200, msg:data})
        })
})



module.exports = router;
