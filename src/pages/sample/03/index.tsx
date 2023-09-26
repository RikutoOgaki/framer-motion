import { easeInOut, motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import style from '@/styles/sample/03/index.module.scss'

export default function Sample03() {

    return (
        <>
            <div className={style.wrap}>
                <motion.div
                    className={style.box}
                    animate={{
                        scale: [1, 2, 2, 1, 1],
                        rotate: [0, 0, 180, 180, 0],
                        borderRadius: ['0%', '0%', '50%', '50%', '0%']
                    }}
                    transition={{
                        duration: 2,
                        ease: 'easeInOut',
                        times: [0, 0.2, 0.5, 0.8, 1],
                        repeat: Infinity,
                        repeatDelay: 1
                    }}
                />
            </div>
        </>
    )
}