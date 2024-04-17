'use client'
import React from 'react'

import { NextPage } from 'next'

import { CarouselSlider } from '@/components/ui/CarouselSlider'
import { ImageLoader } from '@/libs/ImageLoader'

interface Props {
    datas: ISlideGame[]
}

interface ISlideGame {
    id: string
    imageUrl: string
    imageAlt: string
}
const SlideGame: NextPage<Props> = ({ datas }) => {
    return (
        <div className="relative h-full">
            <CarouselSlider
                slidesToScroll={1}
                slidesToShow={5}
                speed={2000}
                autoplaySpeed={2000}
                cssEase={'linear'}
                nextArrow={<></>}
                prevArrow={<></>}
                responsive={[
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2,
                            initialSlide: 2,
                        },
                    },
                ]}
            >
                {datas.map((data) => (
                    <div key={data.id} className="pl-5">
                        <ImageLoader
                            src={data.imageUrl}
                            alt={data.imageAlt}
                            width={180}
                            height={180}
                            className="rounded-lg"
                        />
                    </div>
                ))}
            </CarouselSlider>
        </div>
    )
}

export default SlideGame
