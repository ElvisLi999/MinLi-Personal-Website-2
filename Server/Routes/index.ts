import express from 'express';
const router = express.Router();
export default router;

// instantiate an object of type index controller
import { DisplayAboutPage, DisplayContactPage, DisplayGamesListPage, DisplayHomePage, DisplayProjectsPage, DisplayServicesPage, DisplayResumePage, DisplayEditPage, DisplayLoginPage, DisplayRegisterPage, ProcessLoginPage, ProcessLogoutPage, ProcessRegisterPage, DisplayContactsListPage, DisplayUpdatePage, ProcessUpdatePage, ProcessDeletePage } from '../Controllers/index';

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

/* GET contacts-list page */
router.get('/contacts-list', DisplayContactsListPage);

/* GET - display /contacts-list/update/:id page. */
router.get('/contacts-list/update/:id', DisplayUpdatePage);

/* POST - process /contacts-list/update/:id page. */
router.post('/contacts-list/update/:id', ProcessUpdatePage);

/* GET - process /contacts-list/delete/:id. */
router.get('/contacts-list/delete/:id', ProcessDeletePage);

/* GET - display login page */
router.get('/login', DisplayLoginPage);

/* POST process login page */
router.post('/login', ProcessLoginPage);

/* GET display register page */
router.get('/register', DisplayRegisterPage);

/* POST process register page */
router.post('/register', ProcessRegisterPage);

/* GET logout page */
router.get('/logout', ProcessLogoutPage);

//module.exports = router;
