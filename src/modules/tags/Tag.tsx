import {Box, Text, useColorModeValue} from "@chakra-ui/react";
import styled from "@emotion/styled";

interface TagProps {
    label: string;
}
export function Tag(props: TagProps) {
    const {
        label
    } = props;
    return(
        <Box borderRadius={'0.5rem'} p={'0.25rem 1rem'} bg={useColorModeValue('gray.50', 'gray.900')}>
            <Text fontSize={'0.875rem'}>{label}</Text>
        </Box>
    );
}

const StyledTag = styled('span')`
  
`;
