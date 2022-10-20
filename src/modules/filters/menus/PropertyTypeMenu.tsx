import {CheckboxGroup} from "../../../components/common/CheckboxGroup";
import React from "react";
import {IFilters, useFilters} from "../FiltersProvider";
import {propertyTypeOptions} from "../../layout/GlobalLayout";
import {Box} from "@chakra-ui/react";

interface PropertyTypeMenuProps {}
export function PropertyTypeMenu(props: PropertyTypeMenuProps) {
    const {} = props;
    const ctx = useFilters();
    const [filters, setFilters] = React.useState({'Type': [] as (string|number)[]});
    function handleTypeChange(ev: React.ChangeEvent, value: (string|number)[]) {
        //alert(ev.target);
        setFilters(prevState => ({...prevState, 'Type': value}));
        ctx.setTypesFilter(value);
        ctx.setFiltersState((prevState: IFilters) => ({...prevState, types: {...prevState.types, value: value}}))
        //console.log(ev.target);
        console.log(value);
        console.log(ev);
    }
    return(
        <Box padding={'1rem'}>
            <CheckboxGroup onChange={handleTypeChange} options={propertyTypeOptions} activeValues={ctx.typesFilter}/>
        </Box>
    );
}
