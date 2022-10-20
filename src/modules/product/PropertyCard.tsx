import Link from "next/link";
import {AspectRatio, Box, Flex, HStack, IconButton, Spacer, Text} from "@chakra-ui/react";
import Image from "next/image";
import {Rating} from "../rating/Rating";
import {Button} from "../../components/common/Button";
import {MdFavorite, MdFavoriteBorder} from "react-icons/md";
import styles from '/styles/PropertyCard.module.css';
import {Badge} from "../../components/common/Badge";

enum PropertyTypes {
    Hotel = 'HOTEL',
    House = 'HOUSE',
    Apartment = 'APARTMENT',
    Condo = 'CONDO',
    Resort = 'RESORT'
}

const subtypes = {
    apartment: [
        'studio',
        '2 bedroom'
    ],
    hotel: [
        'single',
        'suite'
    ]
};

export interface PropertyListing {
    id: number;
    name: string;
    price: number; //per day, per week, etc
    propertyType: PropertyTypes;
    guests: number;
    location: string;
    imageUrl: string;
    facets: Partial<Facets>;
}
export const PROPERTY_LISTINGS: PropertyListing[] = [
    {
        id: 0,
        name: 'Isolated Oceanside House',
        price: 600,
        propertyType: PropertyTypes.House,
        guests: 4,
        location: 'Austin, TX', //NY
        imageUrl: 'https://shop-sample-media.s3.us-east-2.amazonaws.com/re/greg-rivers-rChFUMwAe7E-unsplash.jpg',
        facets: {
            beds: 4,
            baths: 2,
            hasPool: false,
            hasWifi: true
        }
    },
    {
        id: 1,
        name: 'Contemporary Duplex',
        price: 290,
        propertyType: PropertyTypes.House,
        guests: 4,
        location: 'Austin, TX', //limq
        imageUrl: 'https://shop-sample-media.s3.us-east-2.amazonaws.com/re/alejandra-cifre-gonzalez-ylyn5r4vxcA-unsplash.jpg',
        facets: {
            beds: 2,
            baths: 2,
            hasPool: true,
            hasWifi: true
        }
    },
    {
        id: 2,
        name: 'Penthouse Apartment in Downtown',
        price: 1150,
        propertyType: PropertyTypes.House,
        guests: 4,
        location: 'Austin, TX', //toronto
        imageUrl: 'https://shop-sample-media.s3.us-east-2.amazonaws.com/re/florian-schmidinger-b_79nOqf95I-unsplash.jpg',
        facets: {
            beds: 2,
            baths: 2,
            hasPool: true,
            hasWifi: true
        }
    },
    {
        id: 3,
        name: 'Beautiful Modern Home',
        price: 390,
        propertyType: PropertyTypes.House,
        guests: 4,
        location: 'Austin, TX',
        imageUrl: 'https://shop-sample-media.s3.us-east-2.amazonaws.com/re/john-fornander-y3_AHHrxUBY-unsplash.jpg',
        facets: {
            beds: 2,
            baths: 2,
            hasPool: true,
            hasWifi: true
        }
    },
    {
        id: 4,
        name: 'Cozy Futuristic House near Park',
        price: 400,
        propertyType: PropertyTypes.House,
        guests: 4,
        location: 'Austin, TX',
        imageUrl: 'https://shop-sample-media.s3.us-east-2.amazonaws.com/re/pixasquare-4ojhpgKpS68-unsplash.jpg',
        facets: {
            beds: 2,
            baths: 2,
            hasPool: false,
            hasWifi: true
        }
    },
    {
        id: 5,
        name: 'Charming Home on Very Private Property',
        price: 565,
        propertyType: PropertyTypes.House,
        guests: 4,
        location: 'Austin, TX',
        imageUrl: 'https://shop-sample-media.s3.us-east-2.amazonaws.com/re/ralph-ravi-kayden-2d4lAQAlbDA-unsplash.jpg',
        facets: {
            beds: 2,
            baths: 2,
            hasPool: true,
            hasWifi: true
        }
    },
    {
        id: 6,
        name: 'Spacious High-end House',
        price: 820,
        propertyType: PropertyTypes.House,
        guests: 4,
        location: 'Austin, TX',
        imageUrl: 'https://shop-sample-media.s3.us-east-2.amazonaws.com/re/ralph-ravi-kayden-mR1CIDduGLc-unsplash.jpg',
        facets: {
            beds: 2,
            baths: 2,
            hasPool: true,
            hasWifi: true
        }
    },
    {
        id: 7,
        name: 'Warm and Cozy Apartment',
        price: 190,
        propertyType: PropertyTypes.House,
        guests: 4,
        location: 'Austin, TX',
        imageUrl: 'https://shop-sample-media.s3.us-east-2.amazonaws.com/re/stephan-bechert-yFV39g6AZ5o-unsplash.jpg',
        //imageUrl: 'https://shop-sample-media.s3.us-east-2.amazonaws.com/re/webaliser-_TPTXZd9mOo-unsplash.jpg',
        facets: {
            beds: 2,
            baths: 2,
            hasPool: false,
            hasWifi: true
        }
    }
];
interface Facets {
    beds: number;
    baths: number;
    hasPool: boolean;
    hasWifi: boolean;
}

interface IFacets {

}

interface PropertyCardProps {
    property: PropertyListing;
}
export function PropertyCard(props: PropertyCardProps) {
    const {
        property
    } = props;
    return(
        <Link passHref href={`/listing/${encodeURIComponent(property.id)}`}>
        <Box borderRadius={4} overflow={'hidden'} /*border={'2px solid'}*/ boxShadow={'2px 2px 5px hsla(0,0%,0%,0.15)'} _hover={{boxShadow: '4px 4px 10px hsla(0,0%,0%,0.25), -4px -4px 8px hsla(0,0%,0%,0.25)'}} transition={'all 150ms ease'} bg={'white'} as={'article'} id={'property-listing'} data-auto-id={PropertyCard.name}>
            {/*<IconButton bg={'transparent'} position={'absolute'} zIndex={500} aria-label={'favorite'}>
                <MdFavoriteBorder color={'white'}/>
            </IconButton>*/}
            <FavoriteButton isFavorite={false}/>

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
                    <Box position={'relative'} padding={'0.75rem 1rem'}>
                        {/*<Text  fontWeight={500}>{name?.substring(0, name?.indexOf('#'))}</Text>
                    <Text fontSize={'0.875rem'} color={'#566070'}>{name?.substring(name?.indexOf('#')+1)}</Text>*/}
                        <Text mt={'0'} mb={'0.25rem'} sx={{color: 'hsla(0, 0%, 0%, 0.60)'}} fontSize={'0.75rem'} fontWeight={500}>{`${property.facets.beds} BEDS - ${property.facets.baths} BATHS`}</Text>
                        <Box height={'64px'}><Text lineHeight={1.1} sx={{color: 'hsla(210, 20%, 10%, 0.85)'}} fontSize={'1.25rem'} fontWeight={800}>{property.name}</Text></Box>
{/*
                        <Text sx={{color: 'hsla(0, 0%, 0%, 0.60)'}} fontSize={'0.75rem'} fontWeight={500}>{property.propertyType}</Text>

*/}
                        {/*<Badge/>*/}
                        {/*<Spacer height={'0.5rem'}/>*/}

                        <Box display={'flex'} alignItems={'baseline'}>
                            <Text fontSize={'1rem'} fontWeight={600}>{`$`}</Text>
                            <Text fontSize={'1rem'} letterSpacing={'-0.025em'} fontWeight={400}>{property.price}</Text>
                            <Text fontSize={'1rem'} mx={'0.125rem'}>{'/'}</Text>
                            <Text fontSize={'0.875rem'} letterSpacing={'0.0125em'}>{'day'}</Text>
                        </Box>
                        {/*<Text fontSize={'1rem'} letterSpacing={'0.05em'} fontWeight={400}>{`$${property.price}/week`}</Text>*/}
                        <Spacer height={'0.5rem'}/>
                        <HStack display={'inline-flex'} alignItems={"start"} spacing={1}>
                            <Rating size={'0.75rem'} rating={4.4}/>
                            <Text fontSize={'0.75rem'}>14</Text>
                        </HStack>
                        {/*<Button>View booking</Button>*/}
                    </Box>
                </>

        </Box>
        </Link>
    );
}
interface Props {
    isFavorite?: boolean;
}
function FavoriteButton(props: Props) {
    const {
        isFavorite
    } = props;
    return(
        <IconButton _hover={{backgroundColor: 'transparent', color: 'hsl(308,82%,60%)'}} bg={'transparent'} color={'white'} position={'absolute'} zIndex={500} aria-label={'favorite'}>
            {isFavorite ? <MdFavorite size={'1.5rem'} color={'inherit'}/> : <MdFavoriteBorder size={'1.5rem'} color={'inherit'}/>}
        </IconButton>
    );
}

function NextLink() {
    return(
        <Link href={''}>
            <Box>

            </Box>
        </Link>
    );
}
