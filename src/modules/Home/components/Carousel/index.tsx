'use client'
import React from 'react'

import { CarouselSlider } from '@/components/ui/CarouselSlider'
import { ImageLoader } from '@/libs/ImageLoader'

interface Props {
    datas: ICarouselItem[]
}

interface ICarouselItem {
    id: string
    imageUrl: string
    imageAlt: string
}
const Carousel: React.FC<Props> = ({ datas }) => {
    return (
        <div>
            <CarouselSlider dots nextArrow={<></>} prevArrow={<></>}>
                {datas.map((data) => (
                    <div key={data.id} className="relative h-[350px] w-full">
                        <ImageLoader
                            style={{ objectFit: 'cover' }}
                            src={data.imageUrl}
                            alt={data.imageAlt}
                            fill
                        />
                    </div>
                ))}
            </CarouselSlider>
        </div>
    )
}

export default Carousel
