import React from 'react'

import { NextPage } from 'next'
import dynamic from 'next/dynamic'

import Button from '@/components/ui/Button/Button'
import Container from '@/components/ui/Container/Container'
import Section from '@/components/ui/Container/Section'
import Spacer from '@/components/ui/Container/Spacer'
import { ImageLoader } from '@/libs/ImageLoader'
import { IResourceData } from '@/types/resource'

import InfomationWithdraw from './components/InformationWithdraw'

const CarouselModule = dynamic(
    () => import('@/modules/Home/components/Carousel'),
    {
        ssr: false,
    }
)

const SlideGameModule = dynamic(
    () => import('@/modules/Home/components/SlideGame'),
    {
        ssr: false,
    }
)

const SlideLogoModule = dynamic(
    () => import('@/modules/Home/components/SlideLogo'),
    {
        ssr: false,
    }
)

const RenderMdxModule = dynamic(() => import('@/libs/renderMdx'), {
    ssr: false,
})
interface Props {
    resource: IResourceData
}

const HomeModule: NextPage<Props> = ({ resource }) => {
    return (
        <Container className="pb-20">
            {/* Banner */}
            <div className="relative hidden md:block">
                <CarouselModule datas={resource.bannerImage} />
            </div>
            <div className="mb-5 block md:hidden">
                <ImageLoader
                    src={resource.bannerImageMobile.imageUrl}
                    alt={resource.bannerImageMobile.imageAlt}
                    width={1924}
                    height={1024}
                    style={{ objectFit: 'contain' }}
                />
            </div>

            {/* Button Login, Register Mobile */}
            <div className="flex flex-col gap-5 px-5 md:hidden">
                <a
                    href={'//' + resource.loginUrl}
                    target="_blank"
                    rel="noreferrer"
                >
                    <Button className="h-14 w-full bg-gradient-to-t from-pink-500 to-violet-500  text-black">
                        <span className="text-xl font-semibold">Login</span>
                    </Button>
                </a>
                <a
                    href={'//' + resource.registerUrl}
                    target="_blank"
                    rel="noreferrer"
                >
                    <Button className="h-14 w-full bg-gradient-to-t from-primary to-violet-500  text-white">
                        <span className="text-xl font-semibold">Signup</span>
                    </Button>
                </a>
            </div>

            <Section className="">
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                    <div className="relative">
                        <ImageLoader
                            src="https://files.sitestatic.net/progressive_img/63cfbdf65f9c1_6295f68fded9d_JCKPT.webp"
                            alt="jack-pot"
                            width={375}
                            height={102}
                            style={{ objectFit: 'contain' }}
                        />
                        <div className="absolute left-0 top-0">
                            <div className="h-full pt-3 text-center text-lg font-bold text-white before:inline-block before:h-full before:align-middle before:content-['']">
                                <p className="px-10">IDR 122,222,222</p>
                            </div>
                        </div>
                    </div>
                    <div className="size-full">
                        <div className="text-center text-xl font-extrabold  md:text-left  md:text-3xl">
                            <span className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text uppercase text-transparent">
                                {resource.sectionProvider.title}
                            </span>
                        </div>
                        <Spacer size={5} />
                        <div className="size-full">
                            <SlideLogoModule
                                datas={resource.sectionProvider.image}
                            />
                        </div>
                    </div>
                </div>
            </Section>

            <Section bgImage="url(/images/theme-title-bg-img-t3.webp)">
                <div className="mt-5 text-center text-xl font-extrabold md:mt-16 md:text-3xl">
                    <span className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
                        {resource.sectionGame.title}
                    </span>
                </div>
                <Spacer size={20} />
                <SlideGameModule datas={resource.sectionGame.image} />
            </Section>

            <Section>
                <InfomationWithdraw />
            </Section>

            <Section>
                <RenderMdxModule
                    mdxSource={resource.contentMain}
                    className="text-white"
                />
            </Section>
        </Container>
    )
}

export default HomeModule
