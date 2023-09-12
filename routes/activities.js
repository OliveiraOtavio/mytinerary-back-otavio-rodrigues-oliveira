import express from 'express';
//ACTIVITIES IMPORTS
import create from '../controllers/activities/create.js';
import read from '../controllers/activities/read.js';
import readOne from '../controllers/activities/readOne.js'; // Esto es correcto si deseas mantener el nombre
import update from '../controllers/activities/update.js';
import destroy from '../controllers/activities/destroy.js';

let router = express.Router();

//CREATE
router.post('/', create)

//READ
router.get('/', read)
router.get('/byItinerary', readOne); // Asociamos el controlador readOne con la ruta /byItinerary

//UPDATE
router.put('/:ac_id', update)

//DELETE
router.delete('/:id', destroy)

export default router;
