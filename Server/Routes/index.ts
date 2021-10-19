import express from 'express';
const router = express.Router();
export default router;

// instantiate an object of type index controller
import { DisplayAboutPage, DisplayContactPage, DisplayGamesListPage, DisplayHomePage, DisplayProjectsPage, DisplayServicesPage, DisplayResumePage, DisplayEditPage, DisplayLoginPage } from '../Controllers/index';

/* GET home page. */
router.get('/', DisplayHomePage);

/* GET home page. */
router.get('/home', DisplayHomePage);

/* GET About Us page. */
router.get('/about', DisplayAboutPage);

/* GET Projects page. */
router.get('/projects', DisplayProjectsPage);

/* GET Services page. */
router.get('/services', DisplayServicesPage);

/* GET Contact Us page. */
router.get('/contact', DisplayContactPage);

/* GET Resume page. */
router.get('/resume', DisplayResumePage);

/* GET games-list page */
router.get('/games-list', DisplayGamesListPage);


/* GET - display /games-list/edit/:id page. */
router.get('/games-list/edit/:id', DisplayEditPage);


/* GET -  login page */
router.get('/login', DisplayLoginPage);

//module.exports = router;
