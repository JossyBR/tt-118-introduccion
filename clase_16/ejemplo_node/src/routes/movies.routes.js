
// Importar express
const express = require('express');

// Importar Router desde el paquete de express
const router = express.Router();

// Se importa el controlador
const movieController = require('../controllers/movie.controller');

// Crear las rutas

//Ruta para el metodo index
router.get('/', movieController.index);
// router.get('/', index)

//Ruta para el metodo creat
// router.post('/', movieController.create);

// router.put('/:id', movieController.update)

// router.delete('/:id', movieController.destroy)

// router.get('/:id', movieController.show)


// Exportar el router para poderser utilizado en otras partes de la api
module.exports = router;
