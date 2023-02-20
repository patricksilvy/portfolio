import { Cursor, useTypewriter } from "react-simple-typewriter"
import { Box, Image, Heading } from "@chakra-ui/react"
import BackgroundCircles from "../BackgroundCircles"

const Hero = () => {
    const [text, cont] = useTypewriter({
        words: [
            'Olá esse é o meu Portfolio',
            'Conheça alguns dos meus projetos',
            'Senha bem vindo! ☺️'
        ],
        loop: true,
        delaySpeed: 2000
    })
    return (
        <Box
            w="100%"
            h="800px"
            py={20}
            gap={8}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
            overflow="hidden"
        >
            <BackgroundCircles />
            <Image
                position="relative"
                borderRadius="full"
                boxSize="32"
                src="https://github.com/patricksilvy.png"
                alt="Imagem Pessoal"
                objectFit="cover"
            />
            <div className="z-10">
                <Heading
                    as="h2"
                    pb={2}
                    size="sm"
                    color="GrayText"
                    letterSpacing="15px"
                    textTransform="uppercase"
                >
                    Software Engineer
                </Heading>
                <Heading
                    as="h1"
                    fontSize="5xl"
                    fontWeight="semibold"
                    paddingX="10"
                >
                    <span className="mr-3">{text}</span>
                    <Cursor cursorColor="#2CEE79" />
                </Heading>
            </div>
        </Box>
    )
}

export default Hero