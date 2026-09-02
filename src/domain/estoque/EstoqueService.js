const EstoqueRepository = require('./EstoqueRepository')

class AppError extends Error {
    constructor (message, statusCode = 400){
        super(message)
        this.statusCode = statusCode
    }
}


class EstoqueService {

    async listarEstoque() {

        const estoque = await EstoqueRepository.listarTodos()

        if(!estoque){
            throw new AppError("Nenhum produto encontrado", 404)
        }

        return {
            sucesso: true,
            dados: estoque, 
            total: estoque.length
        }
    }

}


module.exports = new EstoqueService()