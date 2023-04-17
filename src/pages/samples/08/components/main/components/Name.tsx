import { Box, Flex, Text } from '@chakra-ui/react'
import { transform } from 'typescript'

export default function Name() {
    return (
        <>
            <Flex w={'100%'} h={'40rem'} position={'relative'}>
                <Text w={'100%'} h={'40rem'} position={'absolute'} top={0} textAlign={'center'} fontSize={'30rem'}>ABOUT</Text>
                <Text as={'span'}>- ABOUT ME -</Text>
                <Text as={'span'}>おおがき りくと</Text>
                <Text>大垣 陸斗</Text>
                <Text>2003年5月31日生まれ</Text>
                <Text>ECCコンピューター専門学校Webデザインコース</Text>
                <Text></Text>
                <Text></Text>
            </Flex>
        </>
    )
}