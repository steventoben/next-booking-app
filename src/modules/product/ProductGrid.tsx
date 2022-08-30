import {Box, useColorModeValue} from "@chakra-ui/react";
import {ProductCard} from "./ProductCard";
import i1 from '/public/images/ali-choubin-kvRlouf0RTs-unsplash.jpg';
import i2 from '/public/images/ali-choubin-l_rD5dMOKqI-unsplash.jpg';
import i3 from '/public/images/ali-choubin-o1KXH1jVw8s-unsplash.jpg';
import i4 from '/public/images/ali-choubin-XdVsoBYhdm4-unsplash.jpg';
import {PROPERTY_LISTINGS, PropertyCard} from "./PropertyCard";
const PRODUCTS_SET = [
    {id: "0", name: "Adidas Ultraboost 5.0 #triple black", price: 200},
    {id: "1", name: "Adidas Ultraboost 2.0 #teal/orange/white", price: 220},
    {id: "2", name: "Adidas Yeezy 350 #triple white", price: 220},
    {id: "3", name: "TNR Chelsea Boots #tan/gum", price: 120},
    {id: "4", name: "Allbirds Free #olive", price: 90},
    {id: "5", name: "Adidas Ultraboost 5.0 #triple black", price: 200},
    {id: "6", name: "Adidas Ultraboost 2.0 #teal/orange/white", price: 220},
    {id: "7", name: "Adidas Yeezy 350 #triple white", price: 220},
    {id: "8", name: "TNR Chelsea Boots #tan/gum", price: 120},
    {id: "9", name: "Allbirds Free #olive", price: 90},
    {id: "10", name: "Adidas Ultraboost 5.0 triple black", price: 200},
    {id: "11", name: "Adidas Ultraboost 2.0 teal/orange/white", price: 220},
    {id: "12", name: "Adidas Yeezy 350 triple white", price: 220},
    {id: "13", name: "TNR Chelsea Boots tan/gum", price: 120},
    {id: "14", name: "Allbirds Free olive", price: 90},
    {id: "15", name: "Adidas Ultraboost 5.0 triple black", price: 200},
    {id: "16", name: "Adidas Ultraboost 2.0 teal/orange/white", price: 220},
    {id: "17", name: "Adidas Yeezy 350 triple white", price: 220},
    {id: "18", name: "TNR Chelsea Boots tan/gum", price: 120},
    {id: "19", name: "Allbirds Free olive", price: 90},
];

const FOOD_SET = [
    {id: '1', name: 'Food', price: 18, image: i1},
    {id: '2', name: 'Drink', price: 12, image: i2},
    {id: '3', name: 'Food', price: 8, image: i3},
    {id: '2', name: 'Drink', price: 12, image: i4},
];

interface ProductGridProps {}
export function ProductGrid(props: ProductGridProps) {
    const {} = props;
    return(
        <Box maxWidth={'60em'} margin={{base: '1rem', md: '1rem', lg: '0 auto'}} bg={useColorModeValue('gray.200', 'gray.900')} data-auto-id={ProductGrid.name}>
            <Box as={'section'} gap={{base: '0.5rem', md: '0.5rem', lg: '1rem'}} sx={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(14rem, 1fr))'}}>
                {FOOD_SET.map((product) => {
                    return(
                        <ProductCard key={product.id} image={product.image} id={product.id} name={product.name} price={product.price}/>
                    );
                })}
            </Box>
        </Box>
    );
}

export function PropertyListingsGrid(props: ProductGridProps) {
    const {} = props;
    return(
        <Box maxWidth={'60em'} marginX={{base: '1rem', md: '1rem', lg: 'auto'}} bg={useColorModeValue('gray.100', 'gray.900')} data-auto-id={PropertyListingsGrid.name}>
            <Box bg={useColorModeValue('gray.100', 'gray.900')} as={'section'} gap={{base: '0.5rem', md: '0.5rem', lg: '1rem'}} sx={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(16rem, 1fr))'}}>
                {PROPERTY_LISTINGS.map((property, index) => {
                    return(
                        <PropertyCard key={index} property={property}/>
                    );
                })}
            </Box>
        </Box>
    );
}
