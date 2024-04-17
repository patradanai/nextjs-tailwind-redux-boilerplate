import React from 'react'

import { NextPage } from 'next'

import { ImageLoader } from '@/libs/ImageLoader'

interface Props {
    imageSrc: string
    imageAlt: string
    imageTitle: string
}

const Card: NextPage<Props> = (props) => {
    const { imageAlt, imageSrc, imageTitle } = props
    return (
        <div className="w-fit">
            <div>
                <ImageLoader
                    alt={imageAlt}
                    src={imageSrc}
                    width={215}
                    height={215}
                />
            </div>
            <p className="text-center text-secondary">{imageTitle}</p>
        </div>
    )
}

export default Card
