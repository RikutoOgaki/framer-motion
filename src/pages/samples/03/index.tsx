import { motion, useScroll } from 'framer-motion'
import { Component } from './components/Components'
import style from './index.module.scss'

export default function Sample03() {

    const { scrollYProgress } = useScroll()

    console.log(scrollYProgress);



    return (
        <>
            <motion.div
                className={style.bar}
                style={{ scaleX: scrollYProgress }}
            />
            <Component />
        </>
    )
}