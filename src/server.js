const app = require('./app')
const pool = require('./config/database')

const PORT = process.env.PORT || 3000

console.log('Inicializando servidor!')

async function startServer() {
    try {
        const connection = await pool.getConnection()
        console.log('Conexão estabelecida')
        connection.release()

        app.listen(PORT, () => {
            console.log('Servidor rodando na porta', {PORT})
        })
    } catch (error) {
        console.error('Erro ao realizar a conexão com o banco de dados', error)
        process.exit(1)
    }
}

startServer()