import axios from 'axios'
import { Post } from '../global'


export const getPosts = async (tagList: string[]) => {
    console.log(tagList);
    
    const url = `https://api.hatchways.io/assessment/blog/posts?tag=${tagList[0]}`
    const { data } = await axios.get(url)
    console.log((data as any).posts);
}