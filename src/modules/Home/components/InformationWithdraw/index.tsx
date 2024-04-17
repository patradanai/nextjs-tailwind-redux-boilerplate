import React from 'react'

import { NextPage } from 'next'

import Button from '@/components/ui/Button/Button'
import { ImageLoader } from '@/libs/ImageLoader'

interface Props {}

const InfomationWithdraw: NextPage<Props> = () => {
    return (
        <div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div className="grid grid-cols-3 place-items-center">
                    <div className="flex w-fit flex-col items-center">
                        <Button
                            variant="contained"
                            className="size-20 rounded-full border-2 border-[#de33a7] bg-transparent"
                        >
                            <ImageLoader
                                src="/images/icons/user.webp"
                                alt="cash"
                                width={50}
                                height={50}
                            />
                        </Button>
                        <div className="text-center text-white">Pengguna</div>
                        <div className="text-center text-white">111974</div>
                    </div>
                    <div className="flex w-fit flex-col items-center">
                        <Button
                            variant="contained"
                            className="size-20 rounded-full border-2 border-[#de33a7] bg-transparent"
                        >
                            <ImageLoader
                                src="/images/icons/cash.webp"
                                alt="cash"
                                width={50}
                                height={50}
                            />
                        </Button>
                        <div className="text-center text-white">
                            Jumlah Taruhan
                        </div>
                        <div className="text-center text-white">44,691,253</div>
                    </div>
                    <div className="flex w-fit flex-col items-center">
                        <Button
                            variant="contained"
                            className="size-20 rounded-full border-2 border-[#de33a7] bg-transparent"
                        >
                            <ImageLoader
                                src="/images/icons/online.webp"
                                alt="cash"
                                width={50}
                                height={50}
                            />
                        </Button>
                        <div className="text-center text-white">Online</div>
                        <div className="text-center text-white">33721</div>
                    </div>
                </div>
                <div className="grid grid-cols-1 place-items-center gap-5">
                    <div className="flex w-full items-center justify-between gap-5 px-5 md:w-3/5 md:px-0">
                        <div className="w-full text-nowrap text-white md:w-[100px] md:text-wrap">
                            Cara Bermain SportsBook
                        </div>
                        <div>
                            <Button
                                variant="contained"
                                className="h-12 rounded-lg border-2 border-[#de33a7] bg-transparent"
                            >
                                Lenihnya
                            </Button>
                        </div>
                    </div>
                    <div className="flex w-full items-center justify-between gap-5 px-5 md:w-3/5 md:px-0">
                        <div className="w-full text-nowrap text-white md:w-[100px] md:text-wrap">
                            Cara Bermain Slot
                        </div>
                        <div>
                            <Button
                                variant="contained"
                                className="h-12 rounded-lg border-2 border-[#de33a7] bg-transparent"
                            >
                                Lenihnya
                            </Button>
                        </div>
                    </div>
                    <div className="flex w-full items-center justify-between gap-5 px-5 md:w-3/5 md:px-0">
                        <div className="w-full text-nowrap text-white md:w-[100px] md:text-wrap">
                            Cara Melakukan Deposit
                        </div>
                        <div>
                            <Button
                                variant="contained"
                                className="h-12 rounded-lg border-2 border-[#de33a7] bg-transparent"
                            >
                                Lenihnya
                            </Button>
                        </div>
                    </div>
                    <div className="flex w-full items-center justify-between gap-5 px-5 md:w-3/5 md:px-0">
                        <div className="w-full text-nowrap text-white md:w-[100px] md:text-wrap">
                            Cara Melakukan Withdraw
                        </div>
                        <div>
                            <Button
                                variant="contained"
                                className="h-12 rounded-lg border-2 border-[#de33a7] bg-transparent"
                            >
                                Lenihnya
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfomationWithdraw
