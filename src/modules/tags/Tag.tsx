import {Box, Flex, HStack, Text, useColorModeValue} from "@chakra-ui/react";
import styled from "@emotion/styled";
import {ReactNode} from "react";

interface TagProps {
    label: string;
    leftIcon?: ReactNode;
    
}
export function Tag(props: TagProps) {
    const {
        label,
        leftIcon
    } = props;
    return(
        <Box borderRadius={'0.5rem'} p={'0.25rem 1rem'} bg={useColorModeValue('gray.50', 'gray.900')}>
            <HStack spacing={1} alignItems={'center'}>
            {leftIcon && leftIcon}
            <Text fontSize={'0.875rem'}>{label}</Text>
            </HStack>
        </Box>
    );
}

const StyledTag = styled('span')`
  
`;
