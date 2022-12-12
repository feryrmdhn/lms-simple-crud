import { ButtonGroup, Editable, EditableInput, EditablePreview, Flex, IconButton, Input, useEditableControls } from "@chakra-ui/react"
import { FC } from "react"
import { EditableProps } from "../../types"
import { BsCheck2 } from "react-icons/bs";
import { IoCloseOutline } from "react-icons/io5";
import { EditIcon as iconEdit } from "../../assets";

const CustomEdit: FC<EditableProps> = ({ defaultValue, isPreviewFocus, ...otherProps }) => {

    const EditableControls = () => {
        const {
            isEditing,
            getSubmitButtonProps,
            getCancelButtonProps,
            getEditButtonProps,
        } = useEditableControls()

        return isEditing ? (
            <ButtonGroup mx={4} justifyContent='center' size='md'>
                <IconButton icon={<BsCheck2 />} aria-label='check-button' {...getSubmitButtonProps()} />
                <IconButton icon={<IoCloseOutline />} aria-label='close-button' {...getCancelButtonProps()} />
            </ButtonGroup>
        ) : (
            <Flex justifyContent='center'>
                <IconButton mx={1} size='sm' variant='ghost' icon={<img src={iconEdit} alt='icon-edit' />} aria-label='editable-button' {...getEditButtonProps()} />
            </Flex>
        )
    }

    return (
        <Editable
            display='flex'
            textAlign='left'
            color='#252A3C'
            defaultValue={defaultValue}
            fontSize='24px'
            fontWeight={500}
            lineHeight='25px'
            isPreviewFocusable={isPreviewFocus}
        >
            <EditablePreview />
            {/* Custom input */}
            <Input as={EditableInput} />
            <EditableControls />
        </Editable>
    )
}

export default CustomEdit;