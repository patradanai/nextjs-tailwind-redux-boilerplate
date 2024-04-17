'use client'
import React, { useEffect, useRef, useState } from 'react'

import { AnimatePresence, motion } from 'framer-motion'
import { NextPage } from 'next'

import { isReactElement } from '@/utils/isReactElement'

import Spacer from '../../Container/Spacer'
import AccordionDetail from '../AccordianDetail'
import AccordionHeader from '../AccordianHeader'

interface Props {
    children: React.ReactNode
}
const Accordion: NextPage<Props> = ({ children }) => {
    const containerRef = useRef<HTMLDivElement | null>(null)
    const [height, setHeight] = useState<number | 'auto'>('auto')
    const [isOpen, setOpen] = useState<boolean>(false)

    const childs = React.Children.toArray(children)

    const accordianHeader =
        childs.find((v) => {
            if (React.isValidElement(v)) {
                return isReactElement(v, AccordionHeader.displayName)
            }
        }) ?? null

    const accordianDetail =
        childs.find((v) => {
            if (React.isValidElement(v)) {
                return isReactElement(v, AccordionDetail.displayName)
            }
        }) ?? null

    useEffect(() => {
        if (containerRef.current) {
            const resizeObserver = new ResizeObserver((entries) => {
                // We only have one entry, so we can use entries[0].
                const observedHeight = entries[0].contentRect.height
                setHeight(observedHeight)
            })

            resizeObserver.observe(containerRef.current)

            return () => {
                // Cleanup the observer when the component is unmounted
                resizeObserver.disconnect()
            }
        }
    }, [])

    return (
        <div>
            <div
                className="text-xl text-white"
                onClick={() => setOpen((v) => !v)}
            >
                {accordianHeader}
            </div>
            <Spacer size={10} />
            <AnimatePresence initial={false} mode="wait">
                {isOpen && (
                    <motion.div
                        key="modal"
                        initial={{ height: 0 }}
                        animate={{ height: height }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.5 }}
                        className="overflow-hidden"
                    >
                        <div ref={containerRef}>{accordianDetail}</div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default Accordion
