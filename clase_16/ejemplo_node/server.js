require("dotenv").config();
const express = require('express');
const cors = require('cors');

const app = express();

//Es obligatorio para leer JSON en req.body y debe ir antes de definir las rutas

app.use(express.json());

//Para permitir todas la solicitudes
app.use(cors());


const routes = require('./api.routes')
app.use('/api/v1', routes);

app.get('/', (req, res) => {
    res.send('¡Hola JB!')
})


//Cargar archivos de conexion de base de datos
const sequelize = require('./src/models/dbconnection')

//Sincronizar los modelos cn la base de datos
require('./src/models/sync_tables')

app.listen(process.env.PORT, async () => {
    console.log(process.env.BIENVENIDA, process.env.PORT);
    try {

        //Conectarse a la base de datos
        await sequelize.authenticate();
        console.log("Conexión establecida con éxito a la base de datos!!!")
        
        //Crea las tablas sino existen, y actualiza cambios
        await sequelize.sync({alter: true})
        console.log('Tablas sincronizadas')
    } catch (error) {
        console.error("Error conectado a la base de datos", error)
    }
})