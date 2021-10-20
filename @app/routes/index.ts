import { Application, Request, Response } from "express";
import { AscendingDescending, SortByOptions } from "../global";
import { getPosts } from './getPosts'

export const register = (app: Application) => {
    app.get('/api/ping', (req: Request, res: Response) => {

        res.status(200).json({
            "success": true
        })
    })
    app.get('/api/posts', (req: Request, res: Response) => {
        const { tags, sortBy, direction } = req.query

        if (!tags) {
            res.status(400).json({ error: "Tags parameter is required" })
            return
        }

        const tagList = (tags as string).split(',')

        getPosts(tagList, sortBy as SortByOptions, direction as AscendingDescending)
            .then(posts => {
                res.status(200).json({ ...posts, results: posts.length })
            })
            .catch(err => console.error(err))
    })
}