import { Box, Flex, Text } from '@chakra-ui/react'


export default function Proffil() {
    return (
        <>
            <Flex
                w={'100%'}
                h={'100vh'}
                justifyContent={'center'}
                alignItems={'center'}
            >
                <Flex
                    w={'100%'}
                    h={'40'}
                    flexDir={'column'}
                    justifyContent={'center'}
                    alignItems={'center'}>
                    <Text
                        fontSize={{ base: '3xl', md: '6xl' }}
                        color={'#fff'}
                        fontWeight={'bold'}>Hello 👋</Text>
                    <Text
                        fontSize={{ base: '7xl', md: '9xl' }}
                        color={'#fff'}
                        fontWeight={'bold'}>Rikuto Ogaki</Text>
                    <Text
                        fontSize={{ base: '3xl', md: '6xl' }}
                        color={'#fff'}
                        fontWeight={'bold'}>Web Front Enjiner</Text>
                    <Text
                        fontSize={{ base: '3xl', md: '6xl' }}
                        color={'#fff'}
                        fontWeight={'bold'}>|</Text>
                </Flex>
            </Flex>
        </>
    )
}