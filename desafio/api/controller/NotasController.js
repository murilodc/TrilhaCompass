const database = require('../models')

class NotaController{

    static async criaNota(req, res){
        const novaNota = req.body
        try{
            const novaNotaCriada = await database.Notas.create(novaNota)
            return res.status(200).json(novaNotaCriada)
        }catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async getAll(req,res) {
        try{
            const all = await database.Notas.findAll()
            return res.status(200).json(all)
        }catch(error){
            return res.status(500).json(error.message)
        }        
    }

    static async pegaUmaNota(req, res){
        const { id } = req.params
        try{
            const umaNota = await database.Notas.findOne({where: { id: id}})
            return res.status(200).json(umaNota)
        }catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async atualizaNota(req,res){
        const newInfo = req.body
        const { id } = req.params
        try{
            await database.Notas.update(newInfo, {where: { id: id}})
            const notaAtualizada = database.Notas.findOne({where: { id: id}})
            return res.status(200).json(notaAtualizada)
        }catch(error){
            return res.staus(500).json(error.message)
        }
    }
    static async apagaNota(req,res){
        const { id } = req.params
        try {
            await database.Notas.destroy({where: { id: id}})
            return res.status(200).json({mensagem: `id ${id} deletado`})
        }catch(error){
            return res.staus(500).json(error.message)
        }
    }
}

module.exports = NotaController