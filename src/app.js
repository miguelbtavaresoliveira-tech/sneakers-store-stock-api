const DevolucaoRoutes = require('./domain/devolucao/DevolucaoRoutes')
const EntradaRoutes = require('./domain/entrada/EntradaRoutes')
const SaidaRoutes = require('./domain/saida/SaidaRoutes')
const ProdutoRoutes = require('./domain/produto/ProdutoRoutes');
const CargoRoutes = require('./domain/cargo/CargoRoutes');
const FuncionarioRoutes = require('./domain/funcionario/FuncionarioRoutes');
const AuthRoutes = require('./domain/auth/AuthRoutes')
const EstoqueRoutes = require('./domain/estoque/EstoqueRoutes');

const express = require('express')
const router = express.Router()
const cors = require('cors')
const helmet = require('helmet')
const rateLimit = require('express-rate-limit')
const compression = require('compression')

const app = express()
const errorHandler = require('./shared/middlewares/errorHandler')
const requestIdMiddleware = require('./shared/middlewares/requestId')
const requestLogger = require('./shared/middlewares/requestLogger')

// Helmet - headers de segurança HTTP (configurado para permitir imagens)
app.use(helmet())

app.use(compression())

//Request ID único
app.use(requestIdMiddleware)

// Logging ID único
app.use(requestLogger)

//Rate limiting global
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, //15 minutos
    max: 100, //máximo de 100 requisições por janela
    message: 'Muitas requisições, tente novamente mais tarde',
    standardHeaders: true,
    legacyHeaders: false
})
app.use(limiter)

const corsOptions = {
    origin: process.env.ALLOWED_ORIGINS?.split(',') || ['http://localhost:3000', 'http://localhost:3001', 'http://localhost:5173'],
    credentials: true,
    optionsSuccessStatus: 200,
    methods: ['GET', 'POST', 'PATCH', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-request-Id']
}
app.use(cors(corsOptions))


// parsers
app.use(express.json({ limit: '10mb'}))
app.use(express.urlencoded({ limit: '10mb', extended: true}))

//Rotas
app.use('/auth', AuthRoutes);
app.use('/cargo', CargoRoutes);
app.use('/funcionario', FuncionarioRoutes);
app.use('/produto', ProdutoRoutes);
app.use('/entrada', EntradaRoutes);
app.use('/saida', SaidaRoutes);
app.use('/devolucao', DevolucaoRoutes);
app.use('/estoque', EstoqueRoutes)

// ROta informativa inicial
router.get('/', (req, res) => {
    res.json({
        mensagem: 'API Nômade funcionando',
        versao: '1.0.0',
        arquitetura: 'MVC + SOLID',
        recursos: [
            '/funcionarios',
            '/entrada',
            '/saida',
            '/produto',
            '/cargo',
            '/estoque',
            '/devolucao',
            '/estoque',
        ]
    })
})

app.use('/', router)


//ERROR handling
//middleware de rro por ultimo
app.use(errorHandler)

module.exports = app

