const asyncHandler=require('express-async-handler')

//get goals
//GET  /api/goals

const getGoals= asyncHandler(async (req, res)=>{
    res.status(200).json({message: 'get goals'})
})

const setGoals= asyncHandler(async (req, res)=>{
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a text field')
    }

    res.status(200).json({message: 'set goal'})
})


const updateGoals= asyncHandler(async(req, res)=>{
    res.status(200).json({message: `update goals ${req.params.id}`})
})



const deleteGoals= asyncHandler(async (req, res)=>{
    res.status(200).json({message: `update goals ${req.params.id}`})
})

module.exports={
    getGoals,
    setGoals,
    updateGoals,
    deleteGoals
}