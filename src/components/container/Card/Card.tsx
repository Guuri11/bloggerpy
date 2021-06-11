import React, { MouseEvent } from 'react'
import { usePostsContext } from '../../../utils/hooks/PostsContext';
import { useUserContext } from '../../../utils/hooks/UserContext';
import { PostInterface } from '../../../utils/interfaces/post'
import CardPresentational from '../../presentational/Card/CardPresentational'

type Props = {
    post: PostInterface
}

export default function Card(props: Props) {

    const { user } = useUserContext();
    const { posts, setPosts } = usePostsContext();

    const { post } = props

    const handleDelete = (e: MouseEvent<HTMLElement>) : void => {
        e.preventDefault();
        if (user && post.userId === user.id) {
            // delete post
            const postsAux:Array<PostInterface> = posts.filter(postItem=> post.id !== postItem.id)
            setPosts(postsAux)
        }
    }

    return (
        <CardPresentational post={post} handleDelete={handleDelete} />
    )
}
