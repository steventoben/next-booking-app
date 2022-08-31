import {Box, Button} from "@chakra-ui/react";
import React from "react";
import {RangeSlide, RangeSliderWithText} from "../range/RangeSlide";

interface DropdownProps {}
export function Dropdown(props: DropdownProps) {
    const {} = props;
    const [isOpen, setIsOpen] = React.useState(false);
    return(
        <Box position={'relative'}>
            <Button bg={'white'} variant={'outline'} minWidth={'12rem'} onClick={() => setIsOpen((v) => !v)}>{'Price'}</Button>
            <Box bg={'white'} borderWidth={isOpen ? '1px' : '0'} overflow={'hidden'} position={'absolute'} minHeight={isOpen ? '12rem' : '0rem'} maxHeight={isOpen ? '12rem' : '0rem'} transform={'auto'} transition={'all 100ms ease'} width={'100%'} top={'100%'} borderRadius={'0.5rem'} borderStyle={'solid'} borderColor={'rgba(27,27,27,0.2)'}>
                <Box p={'1rem'} display={'flex'} alignItems={'center'} width={'100%'}>
                    <RangeSlide/>
                </Box>
            </Box>
        </Box>
    );
}
