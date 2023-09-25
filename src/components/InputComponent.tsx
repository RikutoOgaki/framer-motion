import { useState, useEffect } from 'react'

interface State {
    children: string,
    value: number,
    set: (newValue: number) => void,
    min: number,
    max: number
}

export function InputComponent({
    value,
    children,
    set,
    min = -200,
    max = 200
}: State) {

    return (
        <>
            <label>
                <code>{children}</code>
                <input value={value} type="range" min={min} max={max} onChange={(e) => set(parseFloat(e.target.value))} />
                <input type="number" value={value} min={min} max={max} onChange={(e) => set(parseFloat(e.target.value))} />
            </label>
        </>
    )
}