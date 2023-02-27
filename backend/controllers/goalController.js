const asyncHandler=require('express-async-handler')

const Goal= require('../models/goalModel')
const User= require('../models/userModel')

//get goals
const getGoals= asyncHandler(async (req, res)=>{
    const goals=await Goal.find({user: req.user.id})
    res.status(200).json(goals)
})

//set goals
const setGoals= asyncHandler(async (req, res)=>{
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a text field')
    }
    const goals=await Goal.create({
        text: req.body.text,
        user: req.user.id,
    })
    res.status(200).json(goals)
})

//update goals
const updateGoals= asyncHandler(async(req, res)=>{

    const goal=await Goal.findById(req.params.id)

    if(!goal){
        res.status(400)
        throw new Error('Goal not found')
    }


    if(!req.user){
        res.status(401)
        throw new Error('User not found')
    }

    if(goal.user.toString()!==req.user.id){
        res.status(401)
        throw new Error('User not authorized')
    }
    const updatedGoals =await Goal.findByIdAndUpdate(req.params.id, req.body,{
        new: true,
    })
    res.status(200).json(updatedGoals)
})



const deleteGoals = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id)
  
    if (!goal) {
      res.status(400)
      throw new Error('Goal not found')
    }

    if(!req.user){
        res.status(401)
        throw new Error('User not found')
    }

    if(goal.user.toString()!==req.user.id){
        res.status(401)
        throw new Error('User not authorized')
    }
    await goal.remove()
  
    res.status(200).json({ id: req.params.id })
  })

module.exports={
    getGoals,
    setGoals,
    updateGoals,
    deleteGoals
}