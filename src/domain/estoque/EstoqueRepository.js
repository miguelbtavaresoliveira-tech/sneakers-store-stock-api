const pool = require('../../config/database')

class EstoqueRepository {

    async listarTodos() {
        const [rows] = await pool.query('SELECT * FROM estoque')
        return rows
    }
}

module.exports = new EstoqueRepository()