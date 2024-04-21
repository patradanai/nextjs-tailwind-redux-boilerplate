import React from 'react'

import { NextPage } from 'next'

// import { StructureData } from '@/utils/structureData'
import HomeModule from '@/modules/Home/Home'

const HomePage: NextPage = async () => {
    // const data = await resourceService.getResource({
    //     id: env.NEXT_PUBLIC_RESOURCE_ID,
    // })

    // const jsonLd: WithContext<WebPage> = {
    //     '@context': 'https://schema.org',
    //     '@type': 'WebPage',
    //     name: data.metaDescription.metaTitle,
    //     image: data.metaDescription.ogImage.imageUrl,
    //     description: data.metaDescription.metaDescription,
    // }

    return (
        <>
            {/* <StructureData data={jsonLd} /> */}
            <HomeModule />
        </>
    )
}

export default HomePage
