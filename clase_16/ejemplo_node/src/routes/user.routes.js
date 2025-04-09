
// Importar express
const express = require('express');

// Importar Router desde el paquete de express
const router = express.Router();

// Se importa el controlador
const userController = require('../controllers/user.controller');
// const { index } = require('../controllers/user.controller')

// Crear las rutas

//Ruta para el metodo index
router.get('/', userController.index);
// router.get('/', index)

//Ruta para el metodo creat
router.post('/', userController.create);

router.put('/:id', userController.update)

router.delete('/:id', userController.destroy)

router.get('/:id', userController.show)


// Exportar el router para poderser utilizado en otras partes de la api
module.exports = router;
