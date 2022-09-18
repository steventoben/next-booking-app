import {NextPage} from "next";
import {GlobalLayout} from "../../src/modules/layout/GlobalLayout";
import {
    Box, Button,
    HStack,
    Input,
    InputAddon,
    InputGroup,
    Spacer,
    Tag as ChakraTag,
    useColorModeValue
} from "@chakra-ui/react";
import {MdLocationPin, MdOutlineSearch} from "react-icons/md";
import {PropertyListingsGrid} from "../../src/modules/product/ProductGrid";
import {Tags} from "../../src/modules/tags/Tags";
import {Tag} from "../../src/modules/tags/Tag";
import {FilterRow} from "../../src/modules/filters/FilterRow";
import {FacetsList} from "../../src/modules/facets/FacetsList";
import {FiltersProvider} from "../../src/modules/filters/FiltersProvider";
import {HiLocationMarker} from "react-icons/hi";
import {BiCurrentLocation} from "react-icons/bi";
import {GrLocationPin} from "react-icons/gr";


const ListingsPage: NextPage = () => {
    return(
        <GlobalLayout>
            <Box bg={useColorModeValue('gray.100', 'gray.900')} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} height={'20rem'}>
                <InputGroup marginBottom={'1rem'} size={'lg'} paddingX={{base: '1rem'}} maxWidth={'40rem'}>
                    <InputAddon bg={'white'}>
                        <MdOutlineSearch transform={'scale(1.5)'}/>
                    </InputAddon>
                    <Input bg={'white'}/>
                </InputGroup>
                {/*<Spacer h={'1rem'}/>*/}
                <HStack>
                    {/*<Tags tags={['New York', 'Lima', 'Toronto', 'Paris', 'Bora Bora', 'London']}/>*/}
                    <Tag leftIcon={<MdLocationPin/>} label={'My Location'}/>
                    {['New York', 'Lima', 'Toronto', 'Paris'].map((location: string) => {
                        return(
                            <Button  children={location} key={location}/>
                        );
                    })}
                    {/*<ChakraTag bg={'hsla(50,40%,30%,1)'} variant={'outline'}>{'Toronto'}</ChakraTag>*/}
                </HStack>
                {/*<Box>
                    <FilterRow/>
                </Box>*/}
            </Box>
            <Box display={'flex'} bg={useColorModeValue('gray.100', 'gray.900')}>
                <FacetsList/>
                <Box display={{base: 'none', lg: 'block'}} width={'20rem'}/>
                <PropertyListingsGrid/>
            </Box>
        </GlobalLayout>
    );
};
export default () => <FiltersProvider><ListingsPage/></FiltersProvider>;
