import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
} from '@chakra-ui/react'
import React from 'react'

interface Props {
    isOpen: boolean;
    onClose: () => void;
    btnRef: React.RefObject<HTMLButtonElement>;
    children: React.ReactNode;
}

const DrawerMenu = ({
    isOpen,
    onClose,
    btnRef,
    children,
}: Props) => {
    return (
        <Drawer
            isOpen={isOpen}
            placement='right'
            onClose={onClose}
            finalFocusRef={btnRef}
        >
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader fontWeight={700}>
                    Menu
                </DrawerHeader>

                <DrawerBody>
                    {children}
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    )
}

export default DrawerMenu