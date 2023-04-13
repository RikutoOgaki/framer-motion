import { useEffect, useState } from 'react'
import style from './index.module.scss'

export default function Sample02() {

    const [state, setState] = useState({
        x: 0,
        y: 0
    })

    useEffect(() => {
        const MousemoveEvent = (e) => {
            setState({
                ...state,
                x: e.clientX,
                y: e.clientY
            })
        }
        window.addEventListener('mousemove', MousemoveEvent)

        return () => {
            window.removeEventListener('mousemove', MousemoveEvent)
        }
    }, [])



    return (
        <>
            <div
                className={style.pointer}
                style={{ transform: `translate(${state.x}px , ${state.y}px)` }}
            ></div>
            <div
                className={style.pointerMidll}
                style={{ transform: `translate(${state.x}px , ${state.y}px)` }}
            ></div>
            <div
                className={style.pointerSmall}
                style={{ transform: `translate(${state.x}px , ${state.y}px)` }}
            ></div>
        </>
    )
}