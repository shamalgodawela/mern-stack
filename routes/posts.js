const express=require('express');
const posts=require('../models/posts');
const assets=require('../models/assets');
const hr =require('../models/hr');


const jwt=require("jsonwebtoken");

const JWT_SECRET="JFHEJHHVEHOV7654367()JHQEWFHhberjktbohrtb65978945jfhjehrwjk";


const accpost=require('../models/accpost');



const router=express.Router();


//hr save
router.post('/hr/save',(req,res)=>{
    let newhr=new hr(req.body);

    newhr.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"assets record saved"
        });

    });

});
//hr login
router.post('login/user',async(res,req)=>{
    const {email ,password}=req.body;

    const user=await hr.findOne({email});
    if(!user){
        return res.json({error:alert("user not found")})
     
    }
    if(await bcrypt.compare(password,user.password)){
        const token =jwt.sign({},JWT_SECRET);

        if(res.status(201)){
            return res.json({status:"ok",data:token});
        }else{
            return res.json({error:"error"});
        }
    }
    res.json({status:"error",error:"Invalid password"});
});

//save assets details

router.post('/assets/save',(req,res)=>{
    let newassets=new assets(req.body);

    newassets.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"assets record saved"
        });

    });

});

//save employee

router.post('/employee/save',(req,res)=>{
    let newEmp=new posts(req.body);

    

    newEmp.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"employee saved"
        });

    });

});
//get hr

router.get('/hr/get',(req,res)=>{
    hr.find().exec((err,hrs)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            extistinghr:hrs
        });

    });
});
// get employee

router.get('/employee/get',(req,res)=>{
    posts.find().exec((err,posts)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            extistingEmp:posts
        });

    });
});
//get assets details
router.get('/assets/get',(req,res)=>{
    assets.find().exec((err,assets)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            extgassets:assets
        });

    });
});
//update employee
/*
router.put('/edit/:id',(req,res)=>{
    posts.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,post)=>{
            if(err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success:"updates succesfully"
            });

        }
    );
});

*/
// update user data

router.patch("/edit/:id",async(req,res)=>{
    try {
        const {id} = req.params;

        const updateduser = await  posts.findByIdAndUpdate(id,req.body,{
            new:true
        });

        console.log(updateduser);
        res.status(201).json(updateduser);

    } catch (error) {
        res.status(422).json(error);
    }
})



//delete

router.delete('/employee/delete/:id',(req,res)=>{
    posts.findByIdAndRemove(req.params.id).exec((err,deletedEmp)=>{
        if(err){
            return res.status(400).json({
                message:"delete unsufull"
            })
        }
        return res.json({
            message:"delete success",deletedEmp
        });
    });
});


//delete assets
router.delete('/assets/delete/:id',(req,res)=>{
    assets.findByIdAndRemove(req.params.id).exec((err,deleteassets)=>{
        if(err){
            return res.status(400).json({
                message:"delete unsufull"
            })
        }
        return res.json({
            message:"delete success",deleteassets
        });
    });
});



//get a sprecific details
/*
router.get('/employee/:id',(req,res)=>{
    let postId=req.params.id;
    
    posts.findById(postId,(err,post)=>{
        if(err){
            return res.status(400).json({
                success:false,err
            });
        }
        return res.status(200).json({
            success:true,
            post
        });

    });

    
});*/
// get individual user

router.get("/employee/:id",async(req,res)=>{
    try {
        console.log(req.params);
        const {id} = req.params;

        const userindividual = await  posts.findById({_id:id});
        console.log(userindividual);
        res.status(201).json(userindividual)

    } catch (error) {
        res.status(422).json(error);
    }
})


module.exports = router;

