import React from 'react'
import { PostInterface } from '../../../utils/interfaces/post'
import CardPresentational from '../../presentational/Card/CardPresentational'

type Props = {
    post: PostInterface
}

export default function Card(props: Props) {

    const { post } = props

    return (
        <CardPresentational post={post} />
    )
}
