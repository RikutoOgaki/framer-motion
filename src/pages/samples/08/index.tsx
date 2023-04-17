import { motion } from 'framer-motion'
import { Box, Flex, Text } from '@chakra-ui/react'
import Header from './components/Header'
import Main from './components/main'

export default function Sample08() {
    return (
        <>
            <Box w={'100%'} h={'100%'} bgGradient={'linear(to-b,purple.700,purple.400)'}>
                <Header />
                <Main />
            </Box>
        </>
    )
}