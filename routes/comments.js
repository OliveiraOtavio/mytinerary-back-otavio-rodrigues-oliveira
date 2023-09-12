import express from 'express';
import create from '../controllers/comments/create.js';
import read from '../controllers/comments/read.js';
import readOne from '../controllers/comments/readOne.js';  // Añadimos el import de readOne

const router = express.Router();



//READ AND READ ONE
//router.get('/', readOne);  
router.get('/', read);


//CREATE
router.post('/', create);

export default router;
