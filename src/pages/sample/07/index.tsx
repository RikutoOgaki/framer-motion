import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import style from '@/styles/sample/07/index.module.scss'

export default function Sample07() {

    const [state, setState] = useState(false)

    function isTrue() {
        setState(true)
    }

    function isFales() {
        setState(false)
    }

    return (
        <>
            <div className={style.wrap}>
                <motion.div
                    className={style.item}
                    initial={{ scale: 1 }}
                    // animate={{ scale: '100% , 100vh' }}
                    // exit={{ scale: '0% , 0vh' }}
                    whileTap={{ scale: 10 }}
                >item1</motion.div>
                <motion.div
                    className={style.item}
                    initial={{ scale: 1 }}
                    // animate={{ scale: '100% , 100vh' }}
                    // exit={{ scale: '0% , 0vh' }}
                    whileTap={{ scale: 10 }}
                >item1</motion.div>
            </div>
        </>
    )
}