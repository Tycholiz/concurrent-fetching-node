import { Application, Request, Response } from "express";
import { getPosts } from './getPosts'

export const register = (app: Application) => {
    app.get('/api/ping', (req: Request, res: Response) => {
        console.log('hey!');

        res.status(200).json({
            "success": true
        })
    })
    app.get('/api/posts', (req: Request, res: Response) => {
        const { tags, sortBy, direction } = req.query

        const tagList = (tags as string).split(',')
        getPosts(tagList)
    })
}