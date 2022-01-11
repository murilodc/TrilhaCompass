const database = require('../models')

class NotaController{

    static async criaNota(req, res){
        const novaNota = req.body
        try{
            if (!novaNota.tasks) {
                return res.status(400).json({
                    erro: 'Campo \'tasks\' deve receber um valor',
                    mensagem: "Verifique o preenchimento dos campos obrigatórios"
                })
            }
            const novaNotaCriada = await database.Notas.create(novaNota, { include: [{ association: 'tasks' }]})
            return res.status(200).json(novaNotaCriada)
        }catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async getAll(req,res) {
        try{
            const all = await database.Notas.findAll({include:{
                association: 'tasks',
                attributes: [
                    "id",
                    "title",
                    "taskRelevance",
                    "completed",
                    "createdAt",
                    "updatedAt"
                ]
            }
        })
            return res.status(200).json(all)
        }catch(error){
            return res.status(500).json(error.message)
        }        
    }

    static async pegaUmaNota(req, res){
        const { id } = req.params
        try {
            const { id } = req.params
            const nota = await database.Notas.findOne({
                where: { id: id },
                include: {
                    association: 'tasks',
                    attributes: [
                        "id",
                        "title",
                        "taskRelevance",
                        "completed",
                        "createdAt",
                        "updatedAt"
                    ]
                }
            })
            return res.status(200).json(nota)
        }catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async atualizaNota(req,res){
        const newInfo = req.body
        const { id } = req.params
        try{
            await database.Notas.update(newInfo, {where: { id: id}})
            const notaAtualizada = await database.Notas.findOne({ where : { id : id} })
            return res.status(200).json(notaAtualizada)
        }catch(error){
            return res.status(500).json(error.message)
        }
    }
    static async apagaNota(req,res){
        const { id } = req.params
        try {
            await database.Notas.destroy({where: { id: id}})
            return res.status(200).json({mensagem: `id ${id} deletado`})
        }catch(error){
            return res.status(500).json(error.message)
        }
    }
}

module.exports = NotaController