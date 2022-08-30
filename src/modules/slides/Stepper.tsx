import {Box, Button, Spacer, Text, useUpdateEffect} from "@chakra-ui/react";
import React from "react";

interface StepperProps {}
export function Stepper(props: StepperProps) {
    const {} = props;
    const [activeIndex, setActiveIndex] = React.useState(0);
    const offset = React.useMemo(() => activeIndex, [activeIndex]);
    const [_offset, _setOffset] = React.useState(0);
    useUpdateEffect(() => {
        _setOffset(offset*100);
    }, [offset]);
    return(
        <>
        <Box overflow={'hidden'} position={'relative'} height={'12rem'} width={'16rem'} border={'2px solid'}>
            <Box bg={'blue.200'} w={'100%'} h={'100%'}>
                Slide 1
            </Box>
            {/*<Box position={'absolute'} top={0} left={0} translateX={activeIndex === 1 ? '0' : '100%'} transition={'all 250ms'} transform={'auto'} bg={'purple.200'} w={'100%'} h={'100%'}>
                Slide 2
            </Box>*/}
            <Box position={'absolute'} top={0} left={0} translateX={`${_offset - 100}%`} transition={'all 250ms ease-out'} transform={'auto'} bg={'purple.200'} w={'100%'} h={'100%'}>
                Slide 2
            </Box>
            <Box position={'absolute'} top={0} left={0} translateX={`${_offset - 200}%`} transition={'all 250ms'} transform={'auto'} bg={'pink.200'} w={'100%'} h={'100%'}>
                Slide 3
            </Box>
            <Box position={'absolute'} top={0} left={0} translateX={`${_offset - 300}%`} transition={'all 250ms'} transform={'auto'} bg={'teal.200'} w={'100%'} h={'100%'}>
                Slide 4
            </Box>
            {/*<Box position={'absolute'} top={0} left={'200%'} bg={'pink.200'} w={'100%'} h={'100%'}>
                Slide 3
            </Box>
            <Box position={'absolute'} top={0} left={'300%'} bg={'teal.200'} w={'100%'} h={'100%'}>
                Slide 4
            </Box>*/}
        </Box>
            <Spacer height={'1rem'}/>
            <Text>{_offset}</Text>
            <Text>{offset}</Text>
            <Text>{activeIndex}</Text>
            <Button onClick={() => setActiveIndex(v => v-1)}>Prev</Button>
            <Button onClick={() => setActiveIndex(v => v+1)}>Next</Button>
            <Button onClick={() => setActiveIndex(0)}>Reset</Button>
            </>
    );
}
