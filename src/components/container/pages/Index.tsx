import React, { ChangeEvent, useState } from 'react'
import { usePostsContext } from '../../../utils/hooks/PostsContext'
import { PostInterface } from '../../../utils/interfaces/post';
import IndexPresentational from '../../presentational/pages/IndexPresentational'

export default function Index() {

    const { posts } = usePostsContext();

    // This state controls the posts to retrieve when filtering
    const [postsFiltered, setPostsFiltered] = useState<PostInterface[]>([])

    /**
     * Search posts by title and body cheking if the query is included
     */
    const handleSearch = (e: ChangeEvent<HTMLInputElement>):void => {
        if (e.target.value !== "") {
            let result: Array<PostInterface> = [];

            // eslint-disable-next-line array-callback-return
            posts.map((post: PostInterface): void => {
                if (post.title.toLowerCase().includes(e.target.value.toLowerCase()) || post.body.toLowerCase().includes(e.target.value.toLowerCase())) {
                    result.push(post)
                }
            })
            setPostsFiltered(result)
        } else {
            setPostsFiltered([])
        }

    }

    return (
        <IndexPresentational
            posts={postsFiltered.length > 0 ? postsFiltered : posts}
            handleSearch={handleSearch}
        />
    )
}
