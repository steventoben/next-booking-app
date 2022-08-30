import {
    Accordion,
    AccordionButton,
    AccordionItem,
    AccordionPanel,
    AspectRatio,
    Box,
    HStack,
    Spacer,
    Stack,
    Text
} from "@chakra-ui/react";
import styles from "/styles/PropertyCard.module.css";
import {Badge} from "../../components/common/Badge";
import {Rating} from "../rating/Rating";
import {PropertyCard, PropertyListing} from "./PropertyCard";
import {Button} from "../../components/common/Button";

interface PropertyMobileListingProps {
    property: PropertyListing;
}
export function PropertyMobileListing(props: PropertyMobileListingProps) {
    const {
        property
    } = props;
    return(
        <Box maxWidth={'40rem'} borderRadius={4} overflow={'hidden'} /*border={'2px solid'}*/ bg={'white'} as={'article'} id={'property-listing'} data-auto-id={PropertyCard.name}>
            {/*<IconButton bg={'transparent'} position={'absolute'} zIndex={500} aria-label={'favorite'}>
                <MdFavoriteBorder color={'white'}/>
            </IconButton>*/}
            {/*<FavoriteButton isFavorite={false}/>*/}

            <>
                <AspectRatio pos={"relative"} ratio={ 4/3 }>
                    <>
                        <img src={property.imageUrl}/>
                        <div className={styles.overlay}/>
                    </>

                    {/*<img src={''} alt={'ar'}/>*/}
                    {/*<Box bg={'orange.200'}>

                    </Box>*/}
                </AspectRatio>
                <div className={styles.overlay}/>
                <Stack  position={'relative'} padding={'1rem'}>
                    {/*<Text  fontWeight={500}>{name?.substring(0, name?.indexOf('#'))}</Text>
                    <Text fontSize={'0.875rem'} color={'#566070'}>{name?.substring(name?.indexOf('#')+1)}</Text>*/}
                    {/*<Text sx={{color: 'hsla(0, 0%, 0%, 0.60)'}} fontSize={'0.75rem'} fontWeight={500}>{`4 BEDS - 2 BATHS`}</Text>*/}
                    <Text sx={{color: 'hsla(210, 20%, 10%, 0.85)'}} fontSize={'1.75rem'} fontWeight={800}>{property.name}</Text>
                    {/*
                        <Text sx={{color: 'hsla(0, 0%, 0%, 0.60)'}} fontSize={'0.75rem'} fontWeight={500}>{property.propertyType}</Text>

*/}
                    {/*<Badge/>*/}
                    <Spacer height={'0.5rem'}/>

                    <Text fontSize={'1rem'} fontWeight={400}>${property.price}/week</Text>
                    <Spacer height={'0.5rem'}/>
                    <HStack display={'inline-flex'} alignItems={"start"} spacing={1}>
                        <Rating size={'0.75rem'} rating={4}/>
                        <Text fontSize={'0.75rem'}>14</Text>
                        <Accordion allowToggle>
                            <AccordionItem>
                                <h4>
                                <AccordionButton>Reviews</AccordionButton>
                                </h4>
                                <AccordionPanel>
                                    f
                                </AccordionPanel>
                            </AccordionItem>
                        </Accordion>
                    </HStack>
                    <Button>View Availability</Button>
                </Stack>
            </>

        </Box>
    );
}

