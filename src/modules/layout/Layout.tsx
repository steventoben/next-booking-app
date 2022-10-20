import {
    Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel,
    Avatar, Badge,
    Box,
    Button as ChakraButton,
    Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay,
    Flex,
    HStack,
    IconButton, Input, InputAddon, InputGroup,
    Menu,
    MenuButton, MenuDivider, MenuItem,
    MenuList, RangeSlider, Spacer,
    Stack, Tag, TagCloseButton, TagLabel, Text, useColorModeValue,
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
import {RangeSlide, RangeSliderWithText, Slide} from "../range/RangeSlide";
import {Button} from "../../components/common/Button";
import {Checkbox} from "../../components/common/Checkbox";
import {CheckboxGroup, OptionType, StarsCheckboxGroup} from "../../components/common/CheckboxGroup";
import {IFilters, useFilters} from "../filters/FiltersProvider";
import {useQuery} from "../../hooks/useQuery";

const Links = ['Link One', 'Link Two', 'Link Three', 'Link Four'];

const propertyTypeOptions: OptionType[] = [
    {value: 'HOUSE', label: 'House'},
    {value: 'HOTEL', label: 'Hotel'},
    {value: 'APARTMENT', label: 'Apartment'},
    {value: 'CONDO', label: 'Condo'},
    {value: 'RESORT', label: 'Resort'},
];
const guestsOptions: OptionType[] = [
    {value: 1, label: 'One'},
    {value: 2, label: 'Two'},
    {value: 3, label: 'Three'},
    {value: 4, label: 'Four'},
    {value: 5, label: 'Over Five'},
];

const locationRangeOptions: OptionType[] = [
    {value: '0,5', label: 'Less than 5 miles away'},
    {value: '0,5', label: 'Less than 5 miles away'},
    {value: '0,5', label: 'Less than 5 miles away'},
    {value: '0,5', label: 'Less than 5 miles away'},
    {value: '50', label: '50 miles away'},
];

interface GlobalLayoutProps {
    children: ReactNode;
}
export function Layout(props: GlobalLayoutProps) {
    const {
        children
    } = props;
    const { isOpen, onOpen, onClose } = useDisclosure();
    const ctx = useFilters();
    const buttonRef = React.useRef(null);
    const [filters, setFilters] = React.useState({'Type': [] as (string|number)[]});
    function handleGuestsChange(ev: React.ChangeEvent, value: (string|number)[]) {
        //alert(ev.target);
        setFilters(prevState => ({...prevState, 'Type': value}));
        ctx.setGuestsFilter(value);
        ctx.setFiltersState((prevState: IFilters) => ({...prevState, guests: {...prevState.guests, value: value}}))
        //console.log(ev.target);
        console.log(ev);
    }
    function handleTypeChange(ev: React.ChangeEvent, value: (string|number)[]) {
        //alert(ev.target);
        setFilters(prevState => ({...prevState, 'Type': value}));
        ctx.setTypesFilter(value);
        ctx.setFiltersState((prevState: IFilters) => ({...prevState, types: {...prevState.types, value: value}}))
        //console.log(ev.target);
        console.log(ev);
    }
    function handleStarChange(ev: React.ChangeEvent, value: string|number) {
        ctx.setRatingFilter(value);
        ctx.setFiltersState((prevState: IFilters) => ({...prevState, rating: {...prevState.rating, value: {...prevState.rating.value, _from: parseInt(value as string)}}}));
    }
    const {filterPriceRange} = useQuery();
    function handleApplyFilters() {
        filterPriceRange(ctx.priceFilter[0], ctx.priceFilter[1])
            .then(v => console.log(v));
    }
    return(
        <>
            <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} as={'header'} width={'100%'} bg={useColorModeValue('gray.50', 'gray.900')} position={'fixed'} zIndex={1000} height={'4rem'} px={'1rem'}>
                <Box>
                    <Text>Logo</Text>
                </Box>
                <IconButton display={{base: 'inline-flex', lg: 'none'}} ref={buttonRef} onClick={onOpen} bg={'transparent'} aria-label={'filter'}>
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
                        {/*<Accordion defaultIndex={[]} allowMultiple>

                            <AccordionItem>
                                <h2>
                                    <AccordionButton p={'1rem'} justifyContent={'space-between'}>
                                        <Box display={'flex'} flexDirection={'column'} alignItems={'start'}>
                                            <Text fontSize={'1.25rem'} fontWeight={400}>Price</Text>
                                            <Text fontSize={'0.875rem'} fontWeight={400}>${ctx.priceFilter[0] ?? 0} - ${ctx.priceFilter[1] ?? 1}</Text>
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
                                        <Box display={'flex'} flexDirection={'column'} alignItems={'start'}>
                                            <Text fontSize={'1.25rem'} fontWeight={400}>Location</Text>
                                            <Text fontSize={'0.875rem'} fontWeight={400}>{ctx.locationFilter} miles</Text>
                                        </Box>
                                        <AccordionIcon/>
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel marginRight={'0.25rem'} marginLeft={'-0.25rem'} paddingX={'1.5rem'} paddingTop={0} paddingBottom={'2rem'}>
                                    <Slide/>
                                </AccordionPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <h2>
                                    <AccordionButton p={'1rem'} justifyContent={'space-between'}>
                                        <Box display={'flex'} flexDirection={'column'} alignItems={'start'}>
                                            <Text fontSize={'1.25rem'} fontWeight={400}>Guests</Text>
                                            <Text fontSize={'0.875rem'} fontWeight={400}>{ctx.guestsFilter}</Text>
                                        </Box>
                                        <AccordionIcon/>
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel marginRight={'0.25rem'} marginLeft={'-0.25rem'} paddingX={'1.5rem'} paddingTop={0} paddingBottom={'2rem'}>
                                    <CheckboxGroup onChange={handleGuestsChange} options={guestsOptions} activeValues={ctx.guestsFilter}/>
                                </AccordionPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <h2>
                                    <AccordionButton p={'1rem'} justifyContent={'space-between'}>
                                        <Box display={'flex'} flexDirection={'column'} alignItems={'start'}>
                                            <Text fontSize={'1.25rem'} fontWeight={400}>Type</Text>
                                            <Text fontSize={'0.875rem'}>{ctx.typesFilter.map((v: string|number) => typeof v === "number" ? v=v.toString() : v.charAt(0).concat(v.substring(1).toLowerCase())).toString().replaceAll(',', ', ')}</Text>
                                            <Badge colorScheme={'blue'} variant={'subtle'}>{filters.Type}</Badge>
                                        </Box>
                                        <AccordionIcon/>
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel marginRight={'0.25rem'} marginLeft={'-0.25rem'} paddingX={'1.5rem'} paddingTop={0} paddingBottom={'2rem'}>
                                    <CheckboxGroup onChange={handleTypeChange} options={propertyTypeOptions} activeValues={ctx.typesFilter}/>
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
                                    <StarsCheckboxGroup onChange={handleStarChange} options={propertyTypeOptions}/>
                                </AccordionPanel>
                            </AccordionItem>
                        </Accordion>*/}
                    </DrawerBody>

                    <DrawerFooter>
                        <ChakraButton variant='outline' mr={3} onClick={onClose}>
                            Clear All
                        </ChakraButton>
                        <Button onClick={handleApplyFilters}>Apply Filters</Button>
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
