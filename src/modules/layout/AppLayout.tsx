import {
    Avatar,
    Box,
    Button,
    Flex,
    HStack,
    IconButton, Input, InputAddon, InputGroup,
    Menu,
    MenuButton, MenuDivider, MenuItem,
    MenuList, Spacer,
    Stack, useColorModeValue,
    useDisclosure
} from "@chakra-ui/react";
import {MdClose, MdOutlineSearch} from "react-icons/md";
import {ProductGrid, PropertyListingsGrid} from "../product/ProductGrid";
import {
    RiShoppingBag3Fill
} from "react-icons/ri";
import {GiHamburgerMenu} from 'react-icons/gi';
import {Stepper} from "../slides/Stepper";

const Links = ['Link One', 'Link Two', 'Link Three', 'Link Four'];

interface AppLayoutProps {}
export function AppLayout(props: AppLayoutProps) {
    const {} = props;
    const { isOpen, onOpen, onClose } = useDisclosure();
    return(
        <>
            <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <IconButton aria-label={'Open menu'}
                                icon={isOpen ? <MdClose/> : <GiHamburgerMenu height={'2rem'} width={'2rem'}/>}
                                display={{md: 'none'}}
                                onClick={isOpen ? onClose : onOpen}
                    />
                    <HStack spacing={8} alignItems={'center'}>
                        <Box>Logo</Box>
                        <HStack as={'nav'} spacing={4} display={{base: 'none', md: 'flex'}}>
                            {Links.map((link) => {
                                return(
                                    <a href={'#'} key={link}>{link}</a>
                                );
                            })}
                        </HStack>

                    </HStack>
                    <InputGroup flex={'0 1 20rem'}>
                        <InputAddon bg={'white'}>
                            <MdOutlineSearch transform={'scale(1.5)'}/>
                        </InputAddon>
                        <Input bg={'white'}/>
                    </InputGroup>
                    <Flex alignItems={'center'}>

                        <Menu>
                            <MenuButton
                                as={Button}
                                rounded={'full'}
                                variant={'link'}
                                cursor={'pointer'}
                                minW={0}
                            >
                                {/*<Avatar size={'sm'} src={'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'}/>*/}
                                <RiShoppingBag3Fill fill={'#2f2f2f'} transform={'scale(1.5)'}/>
                            </MenuButton>
                            <MenuList>
                                <MenuItem>Link 1</MenuItem>
                                <MenuItem>Link 2</MenuItem>
                                <MenuDivider/>
                                <MenuItem>Link 3</MenuItem>
                                <MenuItem>Link 4</MenuItem>
                            </MenuList>
                        </Menu>
                    </Flex>
                </Flex>

                {isOpen ? (
                    <Box pb={4} display={{md: 'none'}}>
                        <Stack as={'nav'} spacing={4}>
                            {Links.map((link) => {
                                return(
                                    <a href={'#'} key={link}>{link}</a>
                                );
                            })}
                        </Stack>
                    </Box>
                ) : null}
            </Box>
            {/*<Box>Main content</Box>*/}
            <Box bg={useColorModeValue('gray.100', 'gray.900')} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} height={'20rem'}>
                {/*<Stepper/>*/}
                {/*<Spacer height={'1rem'}/>*/}
                <InputGroup marginBottom={'8rem'} size={'lg'} paddingX={{base: '1rem'}} maxWidth={'40rem'}>
                    <InputAddon bg={'white'}>
                        <MdOutlineSearch transform={'scale(1.5)'}/>
                    </InputAddon>
                    <Input bg={'white'}/>
                </InputGroup>
            </Box>
            {/*<ProductGrid/>*/}
            <Box bg={useColorModeValue('gray.100', 'gray.900')}>
            <PropertyListingsGrid/>
            </Box>
        </>
    );
}
