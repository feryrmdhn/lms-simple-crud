import { FC, useRef } from "react";
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogCloseButton,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogOverlay,
    Button,
    MenuItem,
    useDisclosure
} from "@chakra-ui/react";
import { ModalDialogProps } from "../../types";
import { RiDeleteBin7Line } from "react-icons/ri";

const ModalDialog: FC<ModalDialogProps> = ({ title, desc, onSubmit, size, isCentered, ...otherProps }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = useRef<any>()

    const onSubmited = () => {
        onSubmit()
        onClose()
    }

    return (
        <>
            <MenuItem icon={<RiDeleteBin7Line />} color='#252A3C' onClick={onOpen}>
                Delete
            </MenuItem>

            <AlertDialog
                motionPreset='slideInBottom'
                leastDestructiveRef={cancelRef}
                size={size}
                onClose={onClose}
                isOpen={isOpen}
                isCentered={isCentered}
            >
                <AlertDialogOverlay />

                <AlertDialogContent>
                    <AlertDialogHeader>{title}</AlertDialogHeader>
                    <AlertDialogCloseButton />
                    <AlertDialogBody>
                        {desc}
                    </AlertDialogBody>
                    <AlertDialogFooter>
                        <Button ref={cancelRef} onClick={onClose}> No</Button>
                        <Button colorScheme='red' ml={3} onClick={onSubmited}>Yes</Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    )
}

export default ModalDialog;