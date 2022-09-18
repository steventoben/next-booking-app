import {Box} from "@chakra-ui/react";
import {Dropdown, StxDropdown} from "../dropdown/Dropdown";

interface FilterRowProps {}
export function FilterRow(props: FilterRowProps) {
    const {} = props;
    return(
        <Box>
            <Dropdown/>
            <StxDropdown/>
        </Box>
    );
}
