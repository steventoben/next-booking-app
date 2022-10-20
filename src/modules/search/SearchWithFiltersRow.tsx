import {Box, Input, InputAddon, InputGroup, useColorModeValue} from "@chakra-ui/react";
import {MdOutlineSearch} from "react-icons/md";
import {FilterDropdown} from "./FilterDropdown";
import {PropertyTypeMenu} from "../filters/menus/PropertyTypeMenu";

interface SearchWithFiltersRowProps {}
export function SearchWithFiltersRow(props: SearchWithFiltersRowProps) {
    const {} = props;
    return(
        <Box display={'flex'} alignItems={'center'} marginTop={'0rem'} padding={'1rem'} bg={useColorModeValue('white', 'grey.900')}>
            {/*Search with filters*/}
            <InputGroup size={'lg'} paddingX={{base: '1rem'}} maxWidth={'40rem'}>
                <InputAddon bg={'white'}>
                    <MdOutlineSearch transform={'scale(1.5)'}/>
                </InputAddon>
                <Input bg={'white'}/>
            </InputGroup>
            <FilterDropdown label={'Property Type'} menuContent={<PropertyTypeMenu/>}/>
            <FilterDropdown label={'Price Range'} menuContent={<div>Hello world</div>}/>
        </Box>
    );
}
