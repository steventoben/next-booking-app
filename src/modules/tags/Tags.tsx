import {Tag} from "./Tag";
import {Box} from "@chakra-ui/react";

interface TagsProps {
    tags: string[];
}
export function Tags(props: TagsProps) {
    const {
        tags
    } = props;
    return(
        <Box display={'flex'} justifyContent={'space-between'} maxW={'32rem'} w={'100%'}>
            {tags.map((tag) => {
                return(
                    <Tag key={tag} label={tag}/>
                );
            })}
        </Box>
    );
}
