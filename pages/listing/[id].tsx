import {NextPage} from "next";
import {AppLayout} from "../../src/modules/layout/AppLayout";
import {useRouter} from "next/router";
import {GlobalLayout} from "../../src/modules/layout/GlobalLayout";
import {PROPERTY_LISTINGS, PropertyCard} from "../../src/modules/product/PropertyCard";
import {AspectRatio, Box, Flex, HStack, Spacer, Text, useColorModeValue, VStack} from "@chakra-ui/react";
import {PropertyMobileListing} from "../../src/modules/product/PropertyMobileListing";
import styles from "/styles/PropertyCard.module.css";
import {MdBathtub, MdBed} from "react-icons/md";
import {Badge} from '../../src/components/common/Badge';
import {HiLocationMarker} from "react-icons/hi";
import {Layout} from "../../src/modules/layout/Layout";

const ListingPage: NextPage = () => {
    const router = useRouter();
    const id = router.query.id || '0';
    const property = PROPERTY_LISTINGS[parseInt(id.toString())];
    return(
        <Layout>
            <Spacer height={'4rem'}/>
            <Flex margin={'0 auto'} maxWidth={'60rem'} flexDirection={{base: 'column', lg: 'row'}}>
            <Box bg={useColorModeValue('gray.100', 'gray.900')} flexDirection={'column'} display={'flex'}>
                <Box minWidth={{base: '4rem', lg: '30rem'}} maxWidth={'40rem'}>
                <AspectRatio ratio={ 4/3 }>
                    <Box>
                        <img src={property.imageUrl}/>
                        <div className={styles.overlay}/>
                    </Box>
                </AspectRatio>
                </Box>
            {/*<PropertyMobileListing property={PROPERTY_LISTINGS[parseInt(id.toString())]}/>*/}
            </Box>
                <Spacer flex={'1 0 auto'} width={'2rem'}/>
                <VStack alignItems={'start'} spacing={2}>
                    <HStack spacing={2} alignItems={'center'} flexDirection={'row'}>
                    <Text lineHeight={1.2} sx={{color: 'hsla(210, 20%, 10%, 0.85)'}} fontSize={'2rem'} fontWeight={800}>{property.name}</Text>
                        <Box height={'100%'} display={'inline-flex'} alignItems={'center'}><Badge>{property.propertyType}</Badge></Box>
                    </HStack>

                    <HStack spacing={1}>
                        <HiLocationMarker color={'hsla(0,0%,0%,0.70)'}/>
                        <Text sx={{color: 'hsla(210, 20%, 10%, 0.85)'}} fontSize={'1rem'} fontWeight={400}>
                            {property.location}
                        </Text>
                    </HStack>

                    <HStack spacing={1}>
                        <MdBathtub color={'hsla(0, 0%, 0%, 0.60)'}/>
                        <Text sx={{color: 'hsla(0, 0%, 0%, 0.60)'}} fontSize={'1rem'} fontWeight={500}>
                            {'2 BATHS'}
                        </Text>
                    </HStack>

                    <HStack spacing={1}>
                        <MdBed color={'hsla(0, 0%, 0%, 0.60)'}/>
                        <Text sx={{color: 'hsla(0, 0%, 0%, 0.60)'}} fontSize={'1rem'} fontWeight={500}>
                            {'4 BEDS'}
                        </Text>
                    </HStack>

                    <Box>
                        <Text>{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`}</Text>
                    </Box>
                </VStack>

            </Flex>
        </Layout>
    );
};

export default ListingPage;
