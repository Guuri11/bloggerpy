import React, { useEffect, useState } from 'react'
import { getPosts } from '../../../utils/api/post'
import { PostInterface } from '../../../utils/interfaces/post'
import IndexPresentational from '../../presentational/pages/IndexPresentational'

export default function Index() {

    const [posts, setPosts] = useState<PostInterface[]>([])

    useEffect(() => {
        getPosts().then(posts=>setPosts(posts))        
    }, [])

    return (
        <IndexPresentational posts={posts} />
    )
}
