import express from 'express';
const router = express.Router();
export default router;

// instantiate an object of type index controller
import { DisplayAboutPage, DisplayContactPage, DisplayHomePage, DisplayProjectsPage, DisplayServicesPage, DisplayResumePage, DisplayLoginPage, DisplayRegisterPage, ProcessLoginPage, ProcessLogoutPage, ProcessRegisterPage, DisplayContactsListPage, DisplayUpdatePage, ProcessUpdatePage, ProcessDeletePage } from '../Controllers/index';

// import Util Functions
import { AuthGuard } from '../Util/index';

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
router.get('/resume', AuthGuard, DisplayResumePage);

/* GET contacts-list page */
router.get('/contacts-list', AuthGuard, DisplayContactsListPage);

/* GET - display /contacts-list/update/:id page. */
router.get('/contacts-list/update/:id', AuthGuard, DisplayUpdatePage);

/* POST - process /contacts-list/update/:id page. */
router.post('/contacts-list/update/:id', AuthGuard, ProcessUpdatePage);

/* GET - process /contacts-list/delete/:id. */
router.get('/contacts-list/delete/:id', AuthGuard, ProcessDeletePage);

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
