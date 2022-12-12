import { FC, useState } from "react";
import { Box, Button, Center, Flex, IconButton, Menu, MenuButton, MenuList, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Tab, TabList, TabPanel, TabPanels, Tabs, Text, useBreakpointValue, useDisclosure, VStack } from "@chakra-ui/react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { DataSlug, Lesson, SessionData } from "../types";
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import { itemStyle, reorder } from "../helper";
import CustomEdit from "../components/editable";
import { RxDragHandleDots2 } from "react-icons/rx";
import { FiVideo } from "react-icons/fi"
import { IoIosMore } from "react-icons/io";
import { IoDownloadOutline } from "react-icons/io5";
import { BiTimeFive } from "react-icons/bi";
import { FiMoreVertical } from "react-icons/fi";
import { AddIcon as iconAdd } from "../assets";
import ModalDialog from "../components/dialog";
import { defaultDataSession, defaultDataLesson } from "../staticData";

const slug: DataSlug = {
    updated_at: '18 October 2021 | 13:23',
    timeSchedule: '24 Oktober 2021, 16:30'
}

const Home: FC = () => {
    const primaryColor: string = '#6F32D2'
    const isMobile = useBreakpointValue({ base: true, md: false }, { ssr: false })
    const [show, setShow] = useState<boolean>(true)
    const [data, setData] = useState<Array<SessionData>>(defaultDataSession)
    const [dataLesson, setDataLesson] = useState<Array<Lesson>>(defaultDataLesson)
    const [lesson, setLesson] = useState<Lesson>({
        id: 0,
        idSession: 0,
        name: '',
        duration: '',
        isPreview: false,
        isRequired: true,
        created_at: '',
        typeLesson: 'video'
    })
    const { isOpen, onOpen, onClose } = useDisclosure()

    const addSession = () => {
        const lastIdValue: Array<number> = data.map(data => data.id)
        const newSession: SessionData = {
            id: data.length !== 0 ? Math.max(...lastIdValue) + 1 : 1,
            name: data.length !== 0 ? `Session ${Math.max(...lastIdValue) + 1}` : 'Session 1'
        }
        setData([
            ...data,
            newSession
        ])
    }

    const deleteSession = (id: number) => {
        setData(data.filter(item => item.id !== id))
    }

    const addLesson = () => {

    }

    const deleteLesson = (id: number) => {
        // let newData = data.map(items => items.lesson?.map(item => item).filter(list => list.id !== id))
        // setData(newData)
        setDataLesson(dataLesson.filter(item => item.id !== id))
        console.log(id)
    }

    const handleDragEnd = (result: any) => {
        const { type } = result;

        if (!result.destination) return
        if (type === "droppable-session") {
            const items: any = reorder(
                data,
                result.source.index,
                result.destination.index
            )
            setData(items)
        } else {
            const items: any = reorder(
                dataLesson,
                result.source.index,
                result.destination.index
            )
            setDataLesson(items)
        }
    };


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
            <Tabs as='section' color='gray.500' isLazy>
                <TabList borderBottom='1px solid #DFDFDF'>
                    <Tab _selected={{ color: primaryColor, borderColor: primaryColor, fontWeight: '500' }} mr={4} p={1}>Curriculum</Tab>
                    <Tab _selected={{ color: primaryColor, borderColor: primaryColor, fontWeight: '500' }} mr={4} p={1}>Class</Tab>
                </TabList>
                {show &&
                    <TabPanels mb={5}>
                        <TabPanel p={0}>
                            <Box mt='46px' p='24px' border='1px solid #DFE5EE' borderRadius='8px'>
                                <Text fontSize='16px' fontWeight={500} color='#252A3C'>{`Event Schedule: ${slug.timeSchedule}`}</Text>
                            </Box>
                            <DragDropContext onDragEnd={handleDragEnd}>
                                <Droppable droppableId="session" type="droppable-session">
                                    {(provided, _snapshot) => (
                                        <VStack
                                            {...provided.droppableProps}
                                            ref={provided.innerRef}
                                            alignItems="flex-start"
                                            spacing={0}
                                            overflow="auto"
                                        >
                                            {data.map((item, index) => (
                                                <Draggable
                                                    key={item.id}
                                                    draggableId={`${item.id}`}
                                                    index={index}
                                                >
                                                    {(provided, snapshot) => (
                                                        <div
                                                            ref={provided.innerRef}
                                                            {...provided.draggableProps}
                                                            {...provided.dragHandleProps}
                                                            style={itemStyle(
                                                                snapshot.isDragging,
                                                                provided.draggableProps.style
                                                            )}
                                                        >
                                                            <Box key={item.id} bg='white' mt='27px' p='10px' border='1px solid #DFE5EE' borderRadius='8px' overflow='auto'>
                                                                <Flex justify={{ base: 'space-between' }}>
                                                                    <Flex>
                                                                        <Box my='5px' mr={1}><RxDragHandleDots2 size='25px' /></Box>
                                                                        <CustomEdit
                                                                            defaultValue={item.name as string}
                                                                            isPreviewFocus={false}
                                                                        />
                                                                    </Flex>
                                                                    <Menu>
                                                                        <MenuButton
                                                                            as={IconButton}
                                                                            aria-label='Options'
                                                                            icon={<IoIosMore size='20px' />}
                                                                            px={0}
                                                                        />
                                                                        <MenuList>
                                                                            <ModalDialog
                                                                                size={isMobile ? 'xs' : 'md'}
                                                                                isCentered={false}
                                                                                title="Delete Session"
                                                                                desc="Are you sure want to delete this session ?"
                                                                                onSubmit={() => deleteSession(item.id as number)}
                                                                                onCancel={() => { }}
                                                                            />
                                                                        </MenuList>
                                                                    </Menu>
                                                                </Flex>
                                                                <Box py='16px' px='24px' overflow='auto'>
                                                                    {dataLesson.length !== 0 ?
                                                                        <>
                                                                            <DragDropContext onDragEnd={handleDragEnd}>
                                                                                <Droppable droppableId='lesson' key={item.id} type="droppable-lesson">
                                                                                    {(provided, _snapshot) => (
                                                                                        <VStack
                                                                                            {...provided.droppableProps}
                                                                                            ref={provided.innerRef}
                                                                                            alignItems="flex-start"
                                                                                            spacing={0}
                                                                                            overflow="auto"
                                                                                        >
                                                                                            {data.map(list => list.lesson?.filter(u => u.idSession === item.id).map((items, index) => (
                                                                                                <Draggable
                                                                                                    key={items.id}
                                                                                                    draggableId={`${items.id}`}
                                                                                                    index={index}
                                                                                                >
                                                                                                    {(provided, snapshot) => (
                                                                                                        <div
                                                                                                            ref={provided.innerRef}
                                                                                                            {...provided.draggableProps}
                                                                                                            {...provided.dragHandleProps}
                                                                                                            style={itemStyle(
                                                                                                                snapshot.isDragging,
                                                                                                                provided.draggableProps.style
                                                                                                            )}
                                                                                                        >
                                                                                                            <Box key={items.id} mb='16px' py='10px' px={2} _hover={{ background: '#FBFAFF' }}>
                                                                                                                <Flex justify={{ base: 'space-between' }}>
                                                                                                                    <Flex m={0}>
                                                                                                                        <Box py={2}><RxDragHandleDots2 size='25px' /></Box>
                                                                                                                        <Box bg='#F6F8FC' mx={2} p={2} borderRadius='8px'><FiVideo size='24px' /></Box>
                                                                                                                        <Text my={2} pr={4} fontSize='16px' fontWeight={500} color='#252A3C' borderRight='1px solid #DFE5EE'>{items.name}</Text>
                                                                                                                        <Text my={2} px={4} fontSize='16px' fontWeight={500} color='#7800EF'>{items.isRequired && 'Required'}</Text>
                                                                                                                        <Text fontSize='26px'>&bull;</Text>
                                                                                                                        <Text my={2} px={4} fontSize='16px' fontWeight={500}>{items.isPreview && 'Previewable'}</Text>
                                                                                                                    </Flex>
                                                                                                                    <Flex m={0}>
                                                                                                                        <Box py={2}><BiTimeFive size='25px' color="#252A3C" /></Box>
                                                                                                                        <Text my={2} px={4} fontSize='16px' fontWeight={500} color='#252A3C'>{items.created_at as string}</Text>
                                                                                                                        <Text pr={4} fontSize='26px'>&bull;</Text>
                                                                                                                        <Box py={2}><BiTimeFive size='25px' color="#252A3C" /></Box>
                                                                                                                        <Text my={2} px={4} fontSize='16px' fontWeight={500} color='#252A3C'>{items.duration}</Text>
                                                                                                                        <Text pr={4} fontSize='26px'>&bull;</Text>
                                                                                                                        <Box py={2}><IoDownloadOutline size='25px' color="#252A3C" /></Box>
                                                                                                                        <Button variant='ghost'>
                                                                                                                            <Text my={2} fontSize='16px' fontWeight={500} color='#252A3C'>Downloadable</Text>
                                                                                                                        </Button>
                                                                                                                        <Menu>
                                                                                                                            <MenuButton
                                                                                                                                as={IconButton}
                                                                                                                                aria-label='Options'
                                                                                                                                icon={<FiMoreVertical />}
                                                                                                                                px={0}
                                                                                                                            />
                                                                                                                            <MenuList>
                                                                                                                                <ModalDialog
                                                                                                                                    size={isMobile ? 'xs' : 'md'}
                                                                                                                                    isCentered={false}
                                                                                                                                    title="Delete Lesson"
                                                                                                                                    desc="Are you sure want to delete this Lesson ?"
                                                                                                                                    onSubmit={() => deleteLesson(items.id)}
                                                                                                                                    onCancel={() => { }}
                                                                                                                                />
                                                                                                                            </MenuList>
                                                                                                                        </Menu>
                                                                                                                    </Flex>
                                                                                                                </Flex>
                                                                                                            </Box>
                                                                                                        </div>
                                                                                                    )}
                                                                                                </Draggable>
                                                                                            )
                                                                                            ))}
                                                                                            {provided.placeholder}
                                                                                        </VStack>
                                                                                    )}
                                                                                </Droppable>
                                                                            </DragDropContext>
                                                                        </>
                                                                        :
                                                                        <Center>There is no lesson material</Center>
                                                                    }
                                                                    <Flex>
                                                                        <Button p={2} bg={primaryColor} color='white' _hover={{ background: primaryColor, color: 'white' }} onClick={onOpen}>
                                                                            <img src={iconAdd} alt='add-icon' />
                                                                        </Button>
                                                                        <Text mx={4} color='#252A3C' fontSize={16} fontWeight={500} lineHeight='35px'>Add Lesson Material</Text>
                                                                    </Flex>
                                                                </Box>
                                                            </Box>
                                                        </div>
                                                    )}
                                                </Draggable>
                                            ))}
                                            {provided.placeholder}
                                        </VStack>
                                    )}
                                </Droppable>
                            </DragDropContext>
                            <Flex mt='27px' justify={{ base: "end" }}>
                                <Button
                                    leftIcon={<img src={iconAdd} alt='add-icon' />}
                                    bg={primaryColor}
                                    py={6}
                                    _hover={{ background: primaryColor, color: 'white' }}
                                    borderRadius='8px'
                                    color='white'
                                    onClick={addSession}
                                >
                                    Add Session
                                </Button>
                            </Flex>
                        </TabPanel>
                        <TabPanel p={0}>
                            <Center mt='46px'>
                                <Text fontSize='16px' fontWeight={500} color='#252A3C'>Class Still Not Available!</Text>
                            </Center>
                        </TabPanel>
                    </TabPanels>
                }
            </Tabs>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <h2>hihihihih</h2>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button variant='ghost'>Secondary Action</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default Home;