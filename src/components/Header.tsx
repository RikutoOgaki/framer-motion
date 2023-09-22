import { useState, useEffect } from 'react'
import { SiReact } from 'react-icons/si'
import style from '@/styles/components/header.module.scss'

type Props = {
    title: string
}

export function Header(props: Props) {

    const [state, setState] = useState<Props>({
        title: props.title
    })

    useEffect(() => {
        setState({
            ...state,
            title: props.title
        })
    }, [props])

    return (
        <>
            <header className={style.head}>
                <SiReact className={style.icon} />
                <h1 className={style.title}>{state.title}</h1>
            </header>
        </>
    )
}