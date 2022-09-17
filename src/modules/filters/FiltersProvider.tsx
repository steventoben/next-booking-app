import React, {Context} from "react";

export const FiltersContext: Context<any> = React.createContext({});

type FilterType = {
    [name: string]: string[]
};
const typeFilter: FilterType = {
    'type': ['house', 'hotel', 'apartment']
};

const allFilters: [string, string[]][] = [
    ['type', ['house','hotel','apartment']],
    ['guests', ['']]
];
const typeFilters = () => ({type: () => ({'house': 'house', 'hotel': 'hotel', 'apartment':'apartment'})});
function makeFilters() {

}

function test() {
    const a = typeFilter['type'];

}

interface FiltersProviderProps {}
export function FiltersProvider(props: FiltersProviderProps) {
    const {} = props;
    return(
        <FiltersContext.Provider value={{}}>
            Template
        </FiltersContext.Provider>
    );
}
