import Link from 'next/link'
import { Box, Flex, Text } from '@chakra-ui/react'

export default function Header() {
    return (
        <>
            <header>
                <Box position={'relative'}>
                    <Flex
                        w={'100%'}
                        h={'5vh'}
                        justifyContent={'space-around'}
                        alignItems={'center'}
                        position={'absolute'}
                        top={0}
                    >
                        <Link href={'/'}>
                            <Text
                                fontSize={{ base: '3xl', md: '5xl' }}
                                fontWeight={'bold'}
                                color={'#fff'}>TOP</Text></Link>
                        <Link href={'/'}>
                            <Text
                                fontSize={{ base: '3xl', md: '5xl' }}
                                fontWeight={'bold'}
                                color={'#fff'}
                            >Skills</Text></Link>
                        <Link href={'/'}>
                            <Text
                                fontSize={{ base: '3xl', md: '5xl' }}
                                fontWeight={'bold'}
                                color={'#fff'}
                            >Works</Text></Link>
                    </Flex>
                </Box>
            </header>
        </>
    )
}