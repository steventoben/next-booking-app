import {Box} from "@chakra-ui/react";

interface FacetsListProps {}
export function FacetsList(props: FacetsListProps) {
    const {} = props;
    return(
        <Box display={{base: 'none', lg: 'block'}} position={'fixed'} left={0} top={'4rem'} width={'20rem'} height={'calc(100vh - 4rem)'} bg={'blue.500'}>
            Template
        </Box>
    );
}
