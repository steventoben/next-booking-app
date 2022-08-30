import {AspectRatio, Box, Text} from "@chakra-ui/react";
import Link from "next/link";
import {ReactNode} from "react";
import {StaticImageData} from "next/image";
import Image from 'next/image';

interface Product {

}



interface ProductCardDTO {
    id: string;
    name: string;
    price: number;
    image: StaticImageData;
}
const PRODUCT_ID_PREFIX = 'product-';

interface ProductCardProps extends Partial<ProductCardDTO>{
    id: string;
}
export function ProductCard(props: ProductCardProps) {
    const {
        id,
        name,
        price,
        image
    } = props;
    return(
        <Box /*border={'2px solid'}*/ boxShadow={'2px 2px 5px hsla(0,0%,0%,0.15)'} bg={'white'} as={'article'} id={PRODUCT_ID_PREFIX.concat(id)} data-auto-id={ProductCard.name}>
            <Link href={'#'}>
                <>
                <AspectRatio ratio={ 3.5/4 }>
                    <Image layout={'fill'} src={image?.src!}/>
                    {/*<img src={''} alt={'ar'}/>*/}
                    {/*<Box bg={'orange.200'}>

                    </Box>*/}
                </AspectRatio>
                <Box padding={'0.5rem'}>
                    {/*<Text  fontWeight={500}>{name?.substring(0, name?.indexOf('#'))}</Text>
                    <Text fontSize={'0.875rem'} color={'#566070'}>{name?.substring(name?.indexOf('#')+1)}</Text>*/}
                    <Text sx={{color: 'hsla(0, 0%, 0%, 0.85)'}} fontSize={'1rem'} fontWeight={500}>{name}</Text>
                    <Text sx={{color: 'hsla(0, 0%, 0%, 0.60)'}} fontSize={'0.75rem'} fontWeight={500}>{'Breakfast'}</Text>
                    <Text fontSize={'0.875rem'} fontWeight={600}>${price}</Text>
                </Box>
                </>
            </Link>
        </Box>
    );
}

function ProjectCardDescription(description: string) {
    return(
        <Text>{description}</Text>
    );
}
