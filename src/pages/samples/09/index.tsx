import { Box, Flex, Text } from '@chakra-ui/react'
import { useState, useEffect } from 'react'

type State = {
    x: number,
    y: number
}

export default function Sample09() {

    const [state, setState] = useState<State>({
        x: 0,
        y: 0
    })

    useEffect(() => {
        function MouseEvent(e) {
            console.log(e);
            setState({
                ...state,
                x: e.clientX,
                y: e.clientY
            })
        }
        window.addEventListener('mousemove', MouseEvent)

        return () => {
            window.removeEventListener('mousemove', MouseEvent)
        }
    }, [])

    return (
        <>
            <Flex
                w={'100%'}
                h={'100vh'}
                position={'relative'}
                justifyContent={'center'}
                alignItems={'center'}
                bgGradient={'linear(to-r,rgb(92,187,216),purple.500)'}>
                <Box
                    w={'30px'}
                    h={'30px'}
                    borderRadius={'50%'}
                    border={'1px solid blue'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    position={'absolute'}
                    top={'-15px'}
                    left={'-15px'}
                    transition={'.7s cubic-bezier(0.075, 0.82, 0.165, 1) 0.001s transform'}
                    style={{ transform: `translate(${state.x}px , ${state.y}px)` }}

                >
                </Box>
                <Box
                    w={'10px'}
                    h={'10px'}
                    bg={'blue'}
                    borderRadius={'50%'}
                    position={'absolute'}
                    top={'-5px'}
                    left={'-5px'}
                    transition={'.3s cubic-bezier(0.075, 0.82, 0.165, 1) 0.001s transform'}
                    style={{ transform: `translate(${state.x}px , ${state.y}px)` }}
                    zIndex={'999'}
                ></Box>
            </Flex >
        </>
    )
}