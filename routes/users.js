import express from 'express';
import create from '../controllers/users/create.js';
import read from '../controllers/users/read.js';
import readOne from '../controllers/users/readOne.js';
import update from '../controllers/users/update.js';
import destroy from '../controllers/users/destroy.js';

let router = express.Router();

//funcion antes de la clase
/* GET users listing. */ 
// router.get('/', function(req, res, next) {
//   res.send('respond with all users');
// });


//funcion de la clase 14/08/2023 CRUD
//router.metodo('/', funcion)

//CREATE
router.post('/', create)

//READ
router.get('/', read)
router.get('/:id', readOne) // READ ONE

//UPDATE
router.put('/:u_id', update)

//DELETE
router.delete('/:id', destroy)

export default router
