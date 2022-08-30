import {NextPage} from "next";
import {GlobalLayout} from "../../src/modules/layout/GlobalLayout";
import {Box, Input, InputAddon, InputGroup, Spacer, useColorModeValue} from "@chakra-ui/react";
import {MdOutlineSearch} from "react-icons/md";
import {PropertyListingsGrid} from "../../src/modules/product/ProductGrid";
import {Tags} from "../../src/modules/tags/Tags";

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
                    <Tags tags={['New York', 'Lima', 'Toronto', 'Paris', 'Bora Bora', 'London']}/>
                </Box>
            </Box>
            <Box bg={useColorModeValue('gray.100', 'gray.900')}>
                <PropertyListingsGrid/>
            </Box>
        </GlobalLayout>
    );
};
export default ListingsPage;
