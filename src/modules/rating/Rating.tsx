import {MdStarHalf, MdStarRate} from "react-icons/md";
import {Flex, Text} from "@chakra-ui/react";

interface RatingProps {
    rating: number;
    size?: string;
}
export function Rating(props: RatingProps) {
    const {
        rating,
        size = '1rem'
    } = props;
    const roundedRating = Math.round(rating * 10) / 10;
    const x = Math.round(roundedRating * 2); //4.32 => 4.3 => 8.6 => 9 => 9/2 => 4.5
    //3.8 => 7.6 => 8
    //3.6 => 7.2 => 7
    const hasHalfStar = x % 2 === 1;
    //const starsArray = hasHalfStar ? [0,1,2,3] : [0,1,2,3,4];
    const starsArray = [1,2,3,4,5];
    return(
        <Flex position={"relative"}>
            {starsArray.map((r) => {
                return(
                    <MdStarRate fill={roundedRating > r ? 'hsl(308,82%,60%)' : 'hsla(0,0%,0%, 0.4)'} size={'1rem'} key={r}/>
                );
            })}
            {/*<Text>{x/2}</Text>*/}
            {x % 2 === 1 && <MdStarHalf style={{position: 'absolute', left: `${Math.floor(roundedRating)}rem`, top: '0rem'}} clipPath={'polygon(0% 0%, 50% 0, 50% 100%, 0% 100%)'} fill={'hsl(308,82%,60%)'} size={'1rem'}/>}
        </Flex>
    );
}

function makeArrayFromRange(end: number, start?: number) {
    let result = [];
    for(let i = 0; i < end; i++) {
        result.push(i);
    }
    return result;
}
