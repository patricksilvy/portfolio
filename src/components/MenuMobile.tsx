import { useDisclosure, Flex, Link, Button, VStack, } from "@chakra-ui/react";
import DrawerMenu from './DrawerMenu';
import { FcMenu } from 'react-icons/fc';
import React from "react";

const data = [
    { label: 'Início' },
    { label: 'Sobre' },
    { label: 'Skills' },
    { label: 'Projetos' },
    { label: 'Contanto' },
]

export default function MobileDrawer() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef<HTMLButtonElement>(null);

    return (
        <Flex display={{ base: "flex", md: "none" }}>
            <Button ref={btnRef} onClick={onOpen}>
                <FcMenu />
            </Button>

            <DrawerMenu
                isOpen={isOpen}
                onClose={onClose}
                btnRef={btnRef}
            >
                <VStack alignItems="left">
                    {data.map((item, i) => (
                        <Link key={i}>
                            <Button
                                variant="link"
                                fontWeight={400}
                            > {item.label} </Button>
                        </Link>
                    ))}
                </VStack>
            </DrawerMenu>
        </Flex>
    );
};