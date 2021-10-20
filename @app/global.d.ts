export interface Post {
    author: string
    authorId: number
    id: number
    likes: number
    popularity: number
    reads: number
    tags: string[]
}

export type SortByOptions = 'id' | 'reads' | 'likes' | 'popularity'

export type AscendingDescending = 'asc' | 'desc'