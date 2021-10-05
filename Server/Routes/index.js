"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
exports.default = router;
// get a reference to the Game Model Class
const game_1 = __importDefault(require("../Models/game"));
/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Home', page: 'home' });
});
/* GET home page. */
router.get('/home', function (req, res, next) {
    res.render('index', { title: 'Home', page: 'home' });
});
/* GET About Us page. */
router.get('/about', function (req, res, next) {
    res.render('index', { title: 'About', page: 'about' });
});
/* GET Projects page. */
router.get('/projects', function (req, res, next) {
    res.render('index', { title: 'Projects', page: 'projects' });
});
/* GET Services page. */
router.get('/services', function (req, res, next) {
    res.render('index', { title: 'Services', page: 'services' });
});
/* GET Contact Us page. */
router.get('/contact', function (req, res, next) {
    res.render('index', { title: 'Contact Me', page: 'contact' });
});
/* GET Resume page. */
router.get('/resume', function (req, res, next) {
    res.render('index', { title: 'Resume', page: 'resume' });
});
/* GET games-list */
router.get('/games-list', function (req, res, next) {
    // db.games.find()
    game_1.default.find(function (err, gamesCollection) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.render('index', { title: 'Games List', page: 'games-list', games: gamesCollection });
    });
});
//module.exports = router;
//# sourceMappingURL=index.js.map