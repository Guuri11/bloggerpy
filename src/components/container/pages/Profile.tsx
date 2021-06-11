import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router';
import { usePostsContext } from '../../../utils/hooks/PostsContext'
import { useUserContext } from '../../../utils/hooks/UserContext';
import { PostInterface } from '../../../utils/interfaces/post';
import ProfilePresentational from '../../presentational/pages/ProfilePresentational'

export default function Profile() {

    const { posts } = usePostsContext()
    const [postsByMe, setPostsByMe] = useState<PostInterface[]>([])
    const { user } = useUserContext();

    useEffect(() => {
        if (user) {
            const postsByMeAux: Array<PostInterface> = posts.filter(post => post.userId === user.id)
            setPostsByMe(postsByMeAux)
        }
    }, [posts, user])

    if (user) {
        return (
            <ProfilePresentational posts={postsByMe} />
        )
    } else {
        return <Redirect to="/" />
    }

}
