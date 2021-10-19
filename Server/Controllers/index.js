"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisplayLoginPage = exports.DisplayEditPage = exports.DisplayGamesListPage = exports.DisplayResumePage = exports.DisplayContactPage = exports.DisplayServicesPage = exports.DisplayProjectsPage = exports.DisplayAboutPage = exports.DisplayHomePage = void 0;
// get a reference to the Game Model Class
const game_1 = __importDefault(require("../Models/game"));
function DisplayHomePage(req, res, next) {
    res.render('index', { title: 'Home', page: 'home' });
}
exports.DisplayHomePage = DisplayHomePage;
function DisplayAboutPage(req, res, next) {
    res.render('index', { title: 'About', page: 'about' });
}
exports.DisplayAboutPage = DisplayAboutPage;
function DisplayProjectsPage(req, res, next) {
    res.render('index', { title: 'Projects', page: 'projects' });
}
exports.DisplayProjectsPage = DisplayProjectsPage;
function DisplayServicesPage(req, res, next) {
    res.render('index', { title: 'Services', page: 'services' });
}
exports.DisplayServicesPage = DisplayServicesPage;
function DisplayContactPage(req, res, next) {
    res.render('index', { title: 'Contact Me', page: 'contact' });
}
exports.DisplayContactPage = DisplayContactPage;
function DisplayResumePage(req, res, next) {
    res.render('index', { title: 'Resume', page: 'resume' });
}
exports.DisplayResumePage = DisplayResumePage;
//(R)ead in CRUD
function DisplayGamesListPage(req, res, next) {
    // db.games.find()
    game_1.default.find(function (err, gamesCollection) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.render('index', { title: 'Games', page: 'games-list', games: gamesCollection });
    });
}
exports.DisplayGamesListPage = DisplayGamesListPage;
// Display (E)dit page
function DisplayEditPage(req, res, next) {
    let id = req.params.id;
    // pass the id to the db
    // db.games.find({"_id": id})
    game_1.default.findById(id, {}, {}, (err, gamesItemToEdit) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        // show the edit view
        res.render('index', { title: 'Edit', page: 'edit', games: gamesItemToEdit });
    });
}
exports.DisplayEditPage = DisplayEditPage;
function DisplayLoginPage(req, res, next) {
    res.render('index', { title: 'Login', page: 'login' });
}
exports.DisplayLoginPage = DisplayLoginPage;
/* GET Route for displaying the Add page - CREATE Operation */
//# sourceMappingURL=index.js.map