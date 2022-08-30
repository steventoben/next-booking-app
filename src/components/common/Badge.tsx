import {Box} from "@chakra-ui/react";
import {Text} from '@chakra-ui/react';
import {ReactNode} from "react";

interface BadgeProps {
    children: ReactNode;
}
export function Badge(props: BadgeProps) {
    const {
        children
    } = props;
    return(
        <Box display={'inline-flex'} padding={'0 0.5rem'} bg={'hsl(195, 100%, 95%)'} borderRadius={'4px'} border={'1px solid'} borderColor={'hsl(199, 84%, 55%)'}>
            <Text fontWeight={700} fontSize={'0.75rem'} color={'hsl(202, 83%, 41%)'}>{children}</Text>
        </Box>
    );
}
