import express, {Request, Response, NextFunction} from 'express';

// get a reference to the Game Model Class
import Game from '../Models/game';


export function DisplayHomePage(req: Request, res: Response, next: NextFunction): void
{
    res.render('index', { title: 'Home', page: 'home' });
}

export function DisplayAboutPage(req: Request, res: Response, next: NextFunction): void
{
    res.render('index', { title: 'About', page: 'about' });
}

export function DisplayProjectsPage(req: Request, res: Response, next: NextFunction): void
{
    res.render('index', { title: 'Projects', page: 'projects' });
}

export function DisplayServicesPage(req: Request, res: Response, next: NextFunction): void
{
    res.render('index', { title: 'Services', page: 'services' });
}

export function DisplayContactPage(req: Request, res: Response, next: NextFunction): void
{
    res.render('index', { title: 'Contact Me', page: 'contact' });
}

export function DisplayResumePage(req: Request, res: Response, next: NextFunction): void
{
    res.render('index', { title: 'Resume', page: 'resume' });
}

//(R)ead in CRUD
export function DisplayGamesListPage(req: Request, res: Response, next: NextFunction): void
{
    // db.games.find()
  Game.find(function(err, gamesCollection)
  {
    if(err)
    {
      console.error(err);
      res.end(err);
    }

    res.render('index', { title: 'Games', page: 'games-list', games: gamesCollection  });

  });
}


// Display (E)dit page
export function DisplayEditPage(req: Request, res: Response, next: NextFunction): void
{
    let id = req.params.id;

    // pass the id to the db

    // db.games.find({"_id": id})

    Game.findById(id, {}, {}, (err, gamesItemToEdit) => 
    {
        if(err)
        {
            console.error(err);
            res.end(err);
        }

        // show the edit view
        res.render('index', { title: 'Edit', page: 'edit', games: gamesItemToEdit  });
    });
}

/* functions for authentication */

export function DisplayLoginPage(req: Request, res: Response, next: NextFunction): void
{
    res.render('index', { title: 'Login', page: 'login' });
}

export function DisplayRegisterPage(req: Request, res: Response, next: NextFunction): void
{
    res.render('index', { title: 'Register', page: 'register'  });
}

/* GET Route for displaying the Add page - CREATE Operation */
