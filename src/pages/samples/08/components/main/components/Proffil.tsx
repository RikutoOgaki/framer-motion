import { Box, Flex, Text, Icon } from '@chakra-ui/react'
import Link from 'next/link'
import { SiGithub, SiInstagram, SiTwitter } from 'react-icons/si'


export default function Proffil() {

    const array = [
        { icon: SiGithub, link: 'https://github.com/RikutoOgaki' },
        { icon: SiInstagram, link: 'https://www.instagram.com/rikut0_0531/' },
        { icon: SiTwitter, link: 'https://twitter.com/Rikuto_Ogaki' }
    ]

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
                    <Flex w={'20%'} justifyContent={'space-around'}>
                        {array.map((item, idx) =>
                            <Link key={idx} href={item.link}>
                                <Text color={'#fff'} fontSize={{ base: '3xl', md: '6xl' }} marginTop={'2rem'}>
                                    <Icon as={item.icon} />
                                </Text>
                            </Link>
                        )}
                    </Flex>
                </Flex>
            </Flex>
        </>
    )
}