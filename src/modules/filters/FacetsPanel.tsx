import {Box} from "@chakra-ui/react";

interface FacetsPanelProps {

}
export function FacetsPanel(props: FacetsPanelProps) {
    return(
        <Box>

        </Box>
    );
}

enum RefineTypes {
    SingleValue = 'SINGLE_VALUE',
    MultiValue = 'MULTI_VALUE',
    RangeValue = 'RANGE_VALUE'
}
type RefineType = '';
interface FacetSectionProps {
    refineType: string;
}
export function FacetSection(props: FacetSectionProps) {
    const {} = props;
    return(
        <Box as={'section'}>
            <div>
                <h3>
                    <button>

                    </button>
                </h3>
            </div>
            <div>
                
            </div>
        </Box>
    );
}
