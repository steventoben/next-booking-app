import {NextPage} from "next";
import {GlobalLayout} from "../../src/modules/layout/GlobalLayout";
import {Box, Input, InputAddon, InputGroup, Spacer, Tag as ChakraTag, useColorModeValue} from "@chakra-ui/react";
import {MdOutlineSearch} from "react-icons/md";
import {PropertyListingsGrid} from "../../src/modules/product/ProductGrid";
import {Tags} from "../../src/modules/tags/Tags";
import {Tag} from "../../src/modules/tags/Tag";
import {FilterRow} from "../../src/modules/filters/FilterRow";

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
                <Box>
                    {/*<Tags tags={['New York', 'Lima', 'Toronto', 'Paris', 'Bora Bora', 'London']}/>*/}
                    {/*<Tag label={'New York'}/>*/}
                    {/*<ChakraTag bg={'hsla(50,40%,30%,1)'} variant={'outline'}>{'Toronto'}</ChakraTag>*/}
                </Box>
                <Box>
                    <FilterRow/>
                </Box>
            </Box>
            <Box bg={useColorModeValue('gray.100', 'gray.900')}>
                <PropertyListingsGrid/>
            </Box>
        </GlobalLayout>
    );
};
export default ListingsPage;
