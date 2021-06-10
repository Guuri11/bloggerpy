import React from 'react'
import { usePostsContext } from '../../../utils/hooks/PostsContext'
import IndexPresentational from '../../presentational/pages/IndexPresentational'

export default function Index() {

    const { posts } = usePostsContext();

    return (
        <IndexPresentational posts={posts} />
    )
}
