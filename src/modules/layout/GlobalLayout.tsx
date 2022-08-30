import {
    Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel,
    Avatar,
    Box,
    Button as ChakraButton,
    Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay,
    Flex,
    HStack,
    IconButton, Input, InputAddon, InputGroup,
    Menu,
    MenuButton, MenuDivider, MenuItem,
    MenuList, RangeSlider, Spacer,
    Stack, Text, useColorModeValue,
    useDisclosure
} from "@chakra-ui/react";
import {MdClose, MdOutlineSearch} from "react-icons/md";
import {ProductGrid, PropertyListingsGrid} from "../product/ProductGrid";
import {
    RiShoppingBag3Fill
} from "react-icons/ri";
import {GiHamburgerMenu} from 'react-icons/gi';
import {Stepper} from "../slides/Stepper";
import React, {ReactNode} from "react";
import {IoFilter} from "react-icons/io5";
import {RangeSlide, RangeSliderWithText} from "../range/RangeSlide";
import {Button} from "../../components/common/Button";

const Links = ['Link One', 'Link Two', 'Link Three', 'Link Four'];

interface GlobalLayoutProps {
    children: ReactNode;
}
export function GlobalLayout(props: GlobalLayoutProps) {
    const {
        children
    } = props;
    const { isOpen, onOpen, onClose } = useDisclosure();
    const buttonRef = React.useRef(null);
    return(
        <>
            <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} as={'header'} width={'100%'} bg={useColorModeValue('gray.50', 'gray.900')} position={'fixed'} zIndex={1000} height={'4rem'} px={'1rem'}>
                <Box>
                    <Text>Logo</Text>
                </Box>
                <IconButton display={{base: 'initial', lg: 'none'}} ref={buttonRef} onClick={onOpen} bg={'transparent'} aria-label={'filter'}>
                    <IoFilter size={'1.5rem'}/>
                </IconButton>
            </Box>

            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={buttonRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Filters</DrawerHeader>

                    <DrawerBody padding={0}>
                        <Accordion defaultIndex={[0]} allowMultiple>
                            <AccordionItem>
                                <h2>
                                    <AccordionButton p={'1rem'} justifyContent={'space-between'}>
                                        <Box>
                                            <Text fontSize={'1.25rem'} fontWeight={400}>Price</Text>
                                        </Box>
                                        <AccordionIcon/>
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel marginRight={'0.25rem'} marginLeft={'-0.25rem'} paddingX={'1.5rem'} paddingTop={0} paddingBottom={'2rem'}>
                                    <RangeSliderWithText/>
                                </AccordionPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <h2>
                                    <AccordionButton p={'1rem'} justifyContent={'space-between'}>
                                        <Box>
                                            <Text fontSize={'1.25rem'} fontWeight={400}>Location</Text>
                                        </Box>
                                        <AccordionIcon/>
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel marginRight={'0.25rem'} marginLeft={'-0.25rem'} paddingX={'1.5rem'} paddingTop={0} paddingBottom={'2rem'}>
                                    <RangeSliderWithText/>
                                </AccordionPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <h2>
                                    <AccordionButton p={'1rem'} justifyContent={'space-between'}>
                                        <Box>
                                            <Text fontSize={'1.25rem'} fontWeight={400}>Guests</Text>
                                        </Box>
                                        <AccordionIcon/>
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel marginRight={'0.25rem'} marginLeft={'-0.25rem'} paddingX={'1.5rem'} paddingTop={0} paddingBottom={'2rem'}>
                                    <RangeSliderWithText/>
                                </AccordionPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <h2>
                                    <AccordionButton p={'1rem'} justifyContent={'space-between'}>
                                        <Box>
                                            <Text fontSize={'1.25rem'} fontWeight={400}>Type</Text>
                                        </Box>
                                        <AccordionIcon/>
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel marginRight={'0.25rem'} marginLeft={'-0.25rem'} paddingX={'1.5rem'} paddingTop={0} paddingBottom={'2rem'}>

                                </AccordionPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <h2>
                                    <AccordionButton p={'1rem'} justifyContent={'space-between'}>
                                        <Box>
                                            <Text fontSize={'1.25rem'} fontWeight={400}>Rating</Text>
                                        </Box>
                                        <AccordionIcon/>
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel marginRight={'0.25rem'} marginLeft={'-0.25rem'} paddingX={'1.5rem'} paddingTop={0} paddingBottom={'2rem'}>

                                </AccordionPanel>
                            </AccordionItem>
                        </Accordion>
                    </DrawerBody>

                    <DrawerFooter>
                        <ChakraButton variant='outline' mr={3} onClick={onClose}>
                            Clear All
                        </ChakraButton>
                        <Button >Apply Filters</Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>


            <Box>
                {children}
            </Box>

            {/*<Box bg={useColorModeValue('gray.100', 'gray.900')} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} height={'20rem'}>
                <InputGroup marginBottom={'8rem'} size={'lg'} paddingX={{base: '1rem'}} maxWidth={'40rem'}>
                    <InputAddon bg={'white'}>
                        <MdOutlineSearch transform={'scale(1.5)'}/>
                    </InputAddon>
                    <Input bg={'white'}/>
                </InputGroup>
            </Box>
            <Box bg={useColorModeValue('gray.100', 'gray.900')}>
                <PropertyListingsGrid/>
            </Box>*/}
        </>
    );
}
