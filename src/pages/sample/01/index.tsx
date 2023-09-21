import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import style from '@/styles/sample/01/index.module.scss'

export default function Sample01() {

    // 一つのBoxを自由に場所配置できるような例の実装をする

    return (
        <>
            <div className={style.wrap}>
                <motion.div
                    className={style.box}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                />
            </div>
        </>
    )
}