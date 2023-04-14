import { useState } from 'react'
import { motion, Variants } from 'framer-motion'
import style from './index.module.scss'

const itemVariants: Variants = {
    open: {
        opacity: 1,
        y: 0,
        transition: { type: 'spring', stiffness: 300, damping: 24 }
    },
    closed: { opacity: 0, y: 20, transition: { duration: .2 } }
}


export default function Sample04() {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <motion.nav
                initial={false}
                animate={isOpen ? 'open' : 'closed'}
                className={style.menu}
            >
                <motion.button
                    whileTap={{ scale: .97 }}
                    onClick={() => setIsOpen(!isOpen)}
                >Menu
                    <motion.div
                        variants={{
                            open: { rotate: 180 },
                            closed: { rotate: 0 }
                        }}
                        transition={{ duration: .2 }}
                        style={{ originY: .55 }}
                    >
                        <svg width={'15'} height={'15'} viewBox='0 0 20 20'>
                            <path d='M0 7 L 20 7 L 10 16' />
                        </svg>
                    </motion.div>
                </motion.button>
                <motion.ul
                    variants={{
                        open: {
                            clipPath: 'inset(0 0 0 0 round 10px)',
                            transition: {
                                type: 'spring',
                                bounce: 0,
                                duration: .7,
                                delayChildren: .3,
                                setggerChildren: .05
                            }
                        },
                        closed: {
                            clipPath: 'inset(10% 50% 90% 50% round 10px)',
                            transition: {
                                type: 'spring',
                                bounce: 0,
                                duration: .3
                            }
                        }
                    }}
                    style={{ pointerEvents: isOpen ? 'auto' : 'none' }}
                >
                    <motion.li variants={itemVariants}>Item1</motion.li>
                    <motion.li variants={itemVariants}>Item2</motion.li>
                    <motion.li variants={itemVariants}>Item3</motion.li>
                    <motion.li variants={itemVariants}>Item4</motion.li>
                    <motion.li variants={itemVariants}>Item5</motion.li>
                    <motion.li variants={itemVariants}>Item6</motion.li>
                </motion.ul>
            </motion.nav>
        </>
    )
}