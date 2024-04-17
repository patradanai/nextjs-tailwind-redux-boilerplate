import React from 'react'

import { NextPage } from 'next'

import { ImageLoader } from '@/libs/ImageLoader'

interface Props {}

const MenuFloating: NextPage<Props> = () => {
    return (
        <div className="fixed bottom-0 left-0 w-full">
            <div className="min-h-[60px] w-full bg-primary py-1">
                <div className="item-list flex h-full items-center justify-between">
                    <div className="item-list__child text-secondary">
                        <ImageLoader
                            src="https://angelaforindiana.com/img/home.webp"
                            alt="home"
                            width={30}
                            height={30}
                        />
                        <p>HOME</p>
                    </div>
                    <div className="item-list__child text-secondary">
                        <ImageLoader
                            src="https://angelaforindiana.com/img/daftar.webp"
                            alt="home"
                            width={30}
                            height={30}
                        />
                        <p>REGISTER</p>
                    </div>
                    <div className="item-list__child text-secondary">
                        <ImageLoader
                            src="https://angelaforindiana.com/img/whatsapp.webp"
                            alt="home"
                            width={30}
                            height={30}
                        />
                        <p>WHATSAPP</p>
                    </div>
                    <div className="item-list__child text-secondary">
                        <ImageLoader
                            src="https://angelaforindiana.com/img/livechat.webp"
                            alt="home"
                            width={30}
                            height={30}
                        />
                        <p>LIVECHAT</p>
                    </div>
                </div>
            </div>
            <style jsx>
                {`
                    .item-list__child {
                        width: 100%;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                    }

                    .item-list__child p {
                        font-size: 0.8rem;
                        font-weight: 700;
                        margin-top: 0.5rem;
                    }
                `}
            </style>
        </div>
    )
}

export default MenuFloating
