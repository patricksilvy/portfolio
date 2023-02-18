import { Box, Flex, Button, HStack, Link, Heading, useColorModeValue } from '@chakra-ui/react'
import Image from 'next/image'
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
    return (
        <Box
            as='header'
            display='flex'
            justifyContent='center'
            alignItems='center'
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
                        <Heading as="h1" size='sm' fontFamily='m_plus_rounded_1c' fontWeight={700}>
                            Patrick E. Silvy
                        </Heading>
                    </Flex>

                    <HStack as="nav" spacing={4} display={{ base: "none", md: "flex" }}>
                        {data.map((item, i) => (
                            <Link key={i}>
                                <Button
                                    variant="link"
                                    fontFamily='m_plus_rounded_1c'
                                    fontWeight={400}
                                > {item.label}
                                </Button>
                            </Link>
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