import { Application, Request, Response } from "express";

export const register = (app: Application) => {
    app.get('/api/ping', (req: Request, res: Response) => {
        console.log('hey!');

        res.status(200).json({
            "success": true
        })
    })
    app.get('/api/posts', (req: Request, res: Response) => {
        const { tags, sortBy, direction } = req.query
        console.log(tags);
        

        
        const url = `https://api.hatchways.io/assessment/blog/posts?tag=${tags}`
    })
}