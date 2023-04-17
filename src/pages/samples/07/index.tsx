import { motion } from 'framer-motion'
import style from './index.module.scss'

export default function Sample07() {
    return (
        <>
            <div className={style.wrap}>
                <div className={style.dragboxArea}>
                    <motion.div
                        className={style.dragbox}
                        drag
                        dragConstraints={{
                            top: -50,
                            left: -50,
                            right: 50,
                            bottom: 50
                        }}
                    />
                </div>
            </div>
        </>
    )
}