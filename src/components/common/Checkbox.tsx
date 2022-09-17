import {Box, Flex, Text, useCheckbox} from "@chakra-ui/react";

interface CheckboxProps {
    value: string;
}
export function Checkbox(props: CheckboxProps) {
    const {} = props;
    const {state, getCheckboxProps, getInputProps, getLabelProps, htmlProps} = useCheckbox(props);
    return(
        <Box as={'label'} display={'flex'} alignItems={'center'} {...htmlProps}>
            <input {...getInputProps()} hidden/>
            <Flex alignItems={'center'} justifyContent={'center'} border={'2px solid'} borderColor={'blue.500'} w={4} h={4} {...getCheckboxProps()}>
                {state.isChecked &&
                <Box w={2} h={2} bg={'blue.200'}/>}
            </Flex>
            <Text color={'hsl(210, 20%, 19%)'} {...getLabelProps()}>Click me for {props.value}</Text>
        </Box>
    );
}
