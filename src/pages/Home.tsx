import { FC, useState } from "react";
import { Box, Button, Center, Flex, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { dataSlug } from "../types";

const slug: dataSlug = {
    updated_at: '18 October 2021 | 13:23',
    timeSchedule: '24 Oktober 2021, 16:30'
}


const Home: FC = () => {
    const primaryColor: string = '#6F32D2'
    const [show, setShow] = useState<boolean>(true)

    return (
        <>
            <Box mb='38px'>
                <Flex justify={{ base: 'space-between' }} wrap='wrap'>
                    <Flex wrap='wrap'>
                        <Text mr='32px' mb={1} fontSize='32px' fontWeight={500} color='#252A3C' lineHeight='32px'>Belajar dan praktek cinematic videography</Text>
                        <Text fontSize='12px' fontWeight={500} color='#8189A2' lineHeight='38px'>{`Last edited ${slug.updated_at}`}</Text>
                    </Flex>
                    <Button
                        leftIcon={!show ? <FaEyeSlash /> : <FaEye />}
                        color={primaryColor}
                        borderColor={primaryColor}
                        variant='outline'
                        borderRadius='8px'
                        _hover={{ background: 'none' }}
                        onClick={() => setShow(!show)}>
                        Preview
                    </Button>
                </Flex>
            </Box>
            <Tabs color='gray.500' isLazy>
                <TabList borderBottom='1px solid #DFDFDF'>
                    <Tab _selected={{ color: primaryColor, borderColor: primaryColor, fontWeight: '500' }} mr={4} p={1}>Curriculum</Tab>
                    <Tab _selected={{ color: primaryColor, borderColor: primaryColor, fontWeight: '500' }} mr={4} p={1}>Class</Tab>
                </TabList>
                {show &&
                    <TabPanels>
                        <TabPanel p={0}>
                            <Box mt='46px' p='24px' border='1px solid #DFE5EE' borderRadius='8px'>
                                <Text fontSize='16px' fontWeight={500} color='#252A3C'>{`Event Schedule: ${slug.timeSchedule}`}</Text>
                            </Box>
                        </TabPanel>
                        <TabPanel p={0}>
                            <Center mt='46px'>
                                <Text fontSize='16px' fontWeight={500} color='#252A3C'>Class Still Not Available!</Text>
                            </Center>
                        </TabPanel>
                    </TabPanels>
                }
            </Tabs>
        </>
    )
}

export default Home;