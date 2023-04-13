import { useState } from 'react'
import { initialTabs as tabs } from './ingredient'
import { motion, AnimatePresence } from 'framer-motion'
import style from './index.module.scss'

export default function Sample01() {

    const [state, setState] = useState(tabs[0])

    return (
        <>
            <div className={style.wrap}>
                <div className={style.viw}>
                    <nav className={style.nav}>
                        <ul>
                            {tabs.map((item) => (
                                <li
                                    key={item.label}
                                    className={item === state ? style.select : undefined}
                                    onClick={() => setState(item)}
                                >
                                    {`${item.icon} ${item.label}`}
                                    {item === state ? (
                                        <motion.div className={style.underline} layoutId={'underline'} />
                                    ) : null}
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <main className={style.main}>
                        <AnimatePresence mode='wait'>
                            <motion.div
                                key={state ? state.label : 'empty'}
                                initial={{ y: 10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -10, opacity: 0 }}
                                transition={{ duration: .2 }}
                            >
                                {state ? state.icon : '😋'}
                            </motion.div>
                        </AnimatePresence>
                    </main>
                </div>
            </div>
        </>
    )
}