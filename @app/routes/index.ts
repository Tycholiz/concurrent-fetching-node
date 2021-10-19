import { Application, Request, Response } from "express";

export const register = (app: Application) => {
    app.get('/api/ping', (req: Request, res: Response) => {
        console.log('hey!');
        
        res.sendStatus(200)
    })    
}