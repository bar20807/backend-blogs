/* eslint-disable linebreak-style */
//Muestra mensajes de registro normales
const info = (...params) => {
    console.log(...params)
}
  
//Muestra mensajes de error.
const error = (...params) => {
    console.error(...params)
}
  
module.exports = {
    info, error
}