const express = require("express");
const router = express.Router();
const users = [];
router.post("/register", (req,res)=>{
  const {name,email,password}=req.body;
  if(!name||!email||!password) return res.status(400).json({message:"All fields are required"});
  if(users.find(u=>u.email.toLowerCase()===email.toLowerCase())) return res.status(400).json({message:"User already exists"});
  const user={id:users.length+1,name,email,password}; users.push(user);
  res.status(201).json({message:"Registration successful",user:{id:user.id,name:user.name,email:user.email}});
});
router.post("/login", (req,res)=>{
  const {email,password}=req.body;
  if(!email||!password) return res.status(400).json({message:"Email and password are required"});
  const user=users.find(u=>u.email.toLowerCase()===email.toLowerCase()&&u.password===password);
  if(!user) return res.status(401).json({message:"Invalid email or password"});
  res.json({message:"Login successful",user:{id:user.id,name:user.name,email:user.email}});
});
module.exports=router;
