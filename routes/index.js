import express from 'express';
import userRouter from './users.js';
import cityRouter from './cities.js';
import itineraryRouter from './itineraries.js';
import activityRouter from './activities.js'

let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/users',userRouter);
router.use('/cities',cityRouter );
router.use('/itineraries',itineraryRouter); 
router.use('/activities',activityRouter);

export default router
