import * as express from "express";

export const register = (app: express.Application) => {
    app.get('/api/ping', (req: express.Request, res: express.Response) => {
        console.log('hey!');
        
        res.sendStatus(200)
    })    
}