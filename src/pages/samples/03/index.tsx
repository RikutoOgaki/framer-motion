import { motion, useScroll } from 'framer-motion'
import { Component } from './components/Components'
import style from './index.module.scss'

export default function Sample03() {

    const { scrollY } = useScroll()

    return (
        <>
            <motion.div
                className={style.bar}
                style={{ scaleX: scrollY }}
            />
            <Component />
        </>
    )
}