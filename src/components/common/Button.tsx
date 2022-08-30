import {Button as ChakraButton} from "@chakra-ui/react";
import {ReactNode} from "react";

interface ButtonProps {
    children: ReactNode;
}
export function Button(props: ButtonProps) {
    const {
        children
    } = props;
    return(
        <ChakraButton border={'2px solid #2f2f2f'} maxHeight={'2.5rem'} bg={'#2f2f2f'} textColor={'white'} borderRadius={4} _hover={{color: '#2f2f2f', bg: 'blackAlpha.100', boxShadow: '2px 2px 8px 0px rgba(27,27,27,0.4)'}} transition={'background-color 150ms, color 50ms'}>
            {children}
        </ChakraButton>
    );
}
