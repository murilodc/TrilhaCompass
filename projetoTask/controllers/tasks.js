const Task = require('../models/task')
const pegarTodasAsTasks = async (req, res) => {
    try{
        const tasks = await Task.find({})
        res.status(200).json({tasks})
    }catch(error){
        res.status(500).json({msg: error})
    }
}

const criarTask = async (req, res) => {
    try{
    const task = await Task.create(req.body)
    res.status(201).json({ task })
    }catch(error){
        res.status(500).json({msg:error})
    }
}

const pegarUmaTask = async (req, res) => {
    try{
        const {id:taskID} = req.params
        const task = await Task.findOne({_id:taskID})
        if(!task){
            return res.status(404).json({msg: `No task with id : ${taskID}`})
        }
        res.status(200).json(task)
    }catch(error){
        res.status(500).json({msg:error})
    }
}

const atualizarTask = async (req, res) => {
    try{
        const {id: taskID} = req.params
        const task = await Task.findOneAndUpdate({_id:taskID}, req.body)
        if(!task){
            return res.status(404).json({msg: `No task with id : ${taskID}`})
        }
    }catch(error){
        res.status(500).json({msg:error})
    }
}

const deletarTask = async (req, res) => {
    try{
        const {id:taskID} = req.params
        const task = await Task.findOneAndDelete({_id:taskID})
        if(!task){
            return res.status(404).json({msg: `No task with id : ${taskID}`})
        }
        res.status(200).json({task})
    }catch(error){

    }
}

module.exports = {
    pegarTodasAsTasks,
    criarTask,
    pegarUmaTask,
    atualizarTask,
    deletarTask
}