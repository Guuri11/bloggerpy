import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { getPost } from '../../../utils/api/post';
import { PostInterface } from '../../../utils/interfaces/post';
import PostPresentational from '../../presentational/pages/PostPresentational'

type Params = {
    id: string
}

export default function Post() {

    const [post, setPost] = useState<PostInterface | null>(null)
    let { id } = useParams<Params>();


    useEffect(() => {
        getPost(parseInt(id)).then(post => {
            console.log(post);
            
            setPost(post)
        })
    }, [id])

    return (
        post ?
            <PostPresentational post={post} />
            :
            null
    )
}
