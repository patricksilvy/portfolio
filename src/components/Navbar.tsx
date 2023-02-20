import { Box, Flex, Button, HStack, Link, Heading, useColorModeValue } from '@chakra-ui/react'
import MenuMobile from './MenuMobile'
import Raven from './Raven'
import ThemeToggleButton from './ThemeToggleButton'

const data = [
    { label: 'Início' },
    { label: 'Sobre' },
    { label: 'Skills' },
    { label: 'Projetos' },
    { label: 'Contanto' },
]

const Navbar = () => {
    const inactiveColor = useColorModeValue('gray.800', 'whiteAlpha.900')
    
    return (
        <Box
            as='nav'
            w="100%"
            display='flex'
            justifyContent='center'
            alignItems='center'
            position='absolute'

            bg={useColorModeValue('#ffffff40', '#20202380')}
            css={{ backdropFilter: 'blur(10px)' }}
            zIndex={2}
            >
            <Flex
                w="80%"
                h="20"
                align="center"
                justify="space-between"
            >
                <Flex alignItems='center' gap={8}>
                    <Flex alignItems='center' gap={2}>
                        <Raven />
                        <Heading as="h1" size='md' fontWeight={700}>
                            Patrick E. Silvy
                        </Heading>
                    </Flex>

                    <HStack as="nav" spacing={3} display={{ base: "none", md: "flex" }}>
                        {data.map((item, i) => (
                            <Link
                                as="a"
                                key={i}
                                p={2}
                                color={inactiveColor}
                            >{item.label}</Link>
                        ))}
                    </HStack>
                </Flex>

                <HStack>
                    <MenuMobile />
                    <ThemeToggleButton />
                </HStack>

            </Flex>
        </Box>
    )
}

export default Navbar