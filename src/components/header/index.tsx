import { FC } from "react";
import { Box, Flex, } from "@chakra-ui/react";
import { HeaderProps } from "../../types";

const Header: FC<HeaderProps> = ({ leftElement, rightElement, ...otherProps }) => {
    return (
        <>
            <Box as="header"
                position='fixed'
                py={26}
                px={25}
                w='100%'
                zIndex={1}
                boxShadow='0px 4px 34px rgb(39 26 73 / 5%)'
                {...otherProps}
            >
                <Flex flex={{ base: 1, md: 'auto' }}>
                    <Box w='50%'>
                        {leftElement}
                    </Box>
                    <Box w='50%'>
                        {rightElement}
                    </Box>
                </Flex>
            </Box>
        </>
    )
}

export default Header; 