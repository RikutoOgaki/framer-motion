import Link from 'next/link'
import { Box, Flex, Text } from '@chakra-ui/react'

export default function Header() {
    return (
        <>
            <header>
                <Flex
                    w={'100%'}
                    h={'5vh'}
                    justifyContent={'space-around'}
                    alignItems={'center'}>
                    <Link href={'/'}><Text color={'#000'}>TOP</Text></Link>
                    <Link href={'/'}><Text>Skills</Text></Link>
                    <Link href={'/'}><Text>Works</Text></Link>
                </Flex>
            </header>
        </>
    )
}