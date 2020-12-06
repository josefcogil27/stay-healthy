// Importar modulos
import express from 'express'
import Knex from 'knex'
import { Model } from 'objection'
import morgan from 'morgan'
import cors from 'cors'
import * as serverConfig from './knexfile'

// Importar rutas
import usersRoutes from './routes/users'

// Inicializar objection
let knex;
const server = 'development'

if (server == serverConfig.Server){
    knex = Knex(serverConfig.production)
} else {
    knex = Knex(serverConfig.development)
}

Model.knex(knex);

// Configurar app
const app = express()
    .use(morgan('dev'))
    .use(cors())

// Rutas (./routes)
const rutas = [
    {
        ruta: 'users',
        nombre: usersRoutes
    }
]

// Definir rutas
const definirRutas = rutas => {
    rutas.forEach(ruta => {
        app.use(`/${ruta.ruta}`, ruta.nombre)
    })
}
 
definirRutas(rutas)

// Iniciar servidor
app.listen(serverConfig.PORT, () => console.log(`Listening on port ${serverConfig.PORT}`))