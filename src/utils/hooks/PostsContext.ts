import { createContext, useContext } from "react"
import { PostInterface } from "../interfaces/post"

export type PostType = {
    posts: Array<PostInterface>|[]
    setPosts:(posts: Array<PostInterface>|[]) => void
  }

export const PostsContext = createContext<PostType>({
    posts: [],
    setPosts: () =>{}
})

export const usePostsContext = () => useContext(PostsContext)