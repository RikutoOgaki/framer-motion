import { motion } from 'framer-motion'
import style from './index.module.scss'

export default function Sample06() {
    return (
        <>
            <div className={style.wrap}>
                <motion.button
                    className={style.btn}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: .9 }}
                />
            </div>
        </>
    )
}