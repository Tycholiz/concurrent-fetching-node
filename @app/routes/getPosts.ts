import axios from 'axios'
import { AscendingDescending, Post, SortByOptions } from '../global'
import { arrayToObject } from '../utils'


export const getPosts = async (tagList: string[], sortBy: SortByOptions = 'id', direction: AscendingDescending = 'asc'): Promise<Post[]> => {
    const requests = tagList.map(tag => axios.get(`https://api.hatchways.io/assessment/blog/posts?tag=${tag}`))

    const responses = await Promise.all(requests)

    const dataFromAllQueries: Array<Array<Post>> = responses.map(response => (response as any).data.posts)

    /* Transform to array to remove duplicate pairs */
    const allDataAsObj = arrayToObject(dataFromAllQueries.flat(), sortBy)
    
    return direction === 'desc' ? Object.values(allDataAsObj).reverse() as Post[] : Object.values(allDataAsObj)
}