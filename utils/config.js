/* eslint-disable linebreak-style */
//PARA UTILIZAR LAS VARIABLES DE ENTORNO USAMOS LO SIGUIENTE
require('dotenv').config()
const MONGODB_URI = process.env.MONGODB_URI
const PORT = process.env.PORT

module.exports = {
    MONGODB_URI, 
    PORT
}