import React from 'react'

import { NextPage } from 'next'

import { ImageLoader } from '@/libs/ImageLoader'

interface Props {
    imageSrc: string
    imageAlt: string
    imageTitle: string
    Desc: string
}

const CardDescription: NextPage<Props> = (props) => {
    const { Desc, imageAlt, imageSrc, imageTitle } = props
    return (
        <div className="w-full">
            <div className="flex flex-col items-center justify-center">
                <h4 className="mb-3 text-center font-bold text-secondary">
                    {imageTitle}
                </h4>
                <div className="mb-5">
                    <ImageLoader
                        alt={imageAlt}
                        src={imageSrc}
                        width={215}
                        height={215}
                    />
                </div>
                <p className="text-wrap text-left text-secondary">{Desc}</p>
            </div>
        </div>
    )
}

export default CardDescription
