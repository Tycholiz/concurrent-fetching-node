import axios from 'axios'
import { AscendingDescending, Post, SortByOptions } from '../global'
import { arrayToObject } from '../utils'


export const getPosts = async (tagList: string[], sortBy: SortByOptions = 'id', direction: AscendingDescending = 'asc'): Promise<Post[] | unknown[]> => {
    const requests = tagList.map(tag => axios.get(`https://api.hatchways.io/assessment/blog/posts?tag=${tag}`))

    const responses = await Promise.all(requests)

    const dataFromAllQueries: Array<Array<Post>> = responses.map(response => (response as any).data.posts)

    /* Transform to array to remove duplicate pairs */
    const allDataAsObj = arrayToObject(dataFromAllQueries.flat(), sortBy)

    const sorted = Object.values(allDataAsObj).sort((a: Post, b: Post) => (a[sortBy] - b[sortBy]))
    const ordered = direction === 'desc' ? sorted.reverse() : sorted
    return ordered
}