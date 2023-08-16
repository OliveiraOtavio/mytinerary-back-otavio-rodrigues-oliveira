import express from 'express';
//CITIES IMPORTS
import create from '../controllers/cities/create.js';
import read from '../controllers/cities/read.js';
import readOne from '../controllers/cities/readOne.js';
import update from '../controllers/cities/update.js';
import destroy from '../controllers/cities/destroy.js';

let router = express.Router();

//CREATE
router.post('/', create)

//READ
router.get('/', read)
router.get('/:id', readOne) // READ ONE

//UPDATE
router.put('/:c_id', update)

//DELETE
router.delete('/:id', destroy)

export default router