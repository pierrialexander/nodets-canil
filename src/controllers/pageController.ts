import { Request, Response } from 'express';

export const home = (req : Request, res : Response) => {
    res.send('Home do controller')
    // res.render('pages/page');
}

export const dogs = (req : Request, res : Response) => {
    res.send('Dogs do controller')
    // res.render('pages/page');
}

export const cats = (req : Request, res : Response) => {
    res.send('Cats do controller')
    // res.render('pages/page');
}

export const fishes = (req : Request, res : Response) => {
    res.send('fishes controller')
    // res.render('pages/page');
}
