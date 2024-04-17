'use client'
import React from 'react'

import { NextPage } from 'next'

import { CarouselSlider } from '@/components/ui/CarouselSlider'
import { ImageLoader } from '@/libs/ImageLoader'

interface Props {
    datas: ISlideLogo[]
}

interface ISlideLogo {
    id: string
    imageUrl: string
    imageAlt: string
}
const SlideLogo: NextPage<Props> = ({ datas }) => {
    return (
        <div className="relative h-full">
            <CarouselSlider
                slidesToScroll={1}
                slidesToShow={4}
                speed={1000}
                autoplaySpeed={1000}
                cssEase={'linear'}
                nextArrow={<></>}
                prevArrow={<></>}
            >
                {datas.map((data) => (
                    <div key={data.id} className="pl-3">
                        <ImageLoader
                            src={data.imageUrl}
                            alt={data.imageAlt}
                            width={150}
                            height={150}
                        />
                    </div>
                ))}
            </CarouselSlider>
        </div>
    )
}

export default SlideLogo
