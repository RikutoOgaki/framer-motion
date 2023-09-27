import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import style from '@/styles/sample/04/index.module.scss'

export default function Sample04() {
    return (
        <>
            <div className={style.wrap}>
                <motion.div
                    className={style.box}
                    whileHover={{ scale: [null, 1.5, 1.3] }}
                    transition={{ duration: .3 }}
                />
            </div>
        </>
    )
}