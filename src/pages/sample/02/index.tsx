import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { InputComponent } from '@/components/InputComponent'
import style from '@/styles/sample/02/index.module.scss'

export default function Sample02() {

    const [x, setX] = useState(0)
    const [y, setY] = useState(0)
    const [rotate, setRotate] = useState(0)

    return (
        <>
            <div className={style.wrap}>
                <div className={style.subWrap}>
                    <motion.div
                        className={style.box}
                        animate={{ x, y, rotate }}
                        transition={{ type: 'spring' }}
                    />
                </div>
                <div className={style.inputBox}>
                    <InputComponent value={x} set={setX}>x</InputComponent>
                    <InputComponent value={y} set={setY}>y</InputComponent>
                    <InputComponent value={rotate} set={setRotate} min={-180} max={180}>rotate</InputComponent>
                </div>
            </div>
        </>
    )
}