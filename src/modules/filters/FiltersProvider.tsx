import React, {Context, ReactNode} from "react";

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
type RangeType = {
    _from: number;
    _to: number;
};
const DistanceUnits = {
    Kilometers: 'km',
    Miles: 'mi'
} as const;
type DistanceUnitType = typeof DistanceUnits[keyof typeof DistanceUnits] | typeof DistanceUnits;
type GeoFilterType = {
    center: string; //"{{long}}, {{lat}}"
    distance: number;
    unit: DistanceUnitType;
};
const du: DistanceUnitType = DistanceUnits.Miles;
type RangeTuple = [number, number];

interface IFilter<T> {
    label: string;
    name: string;
    value: T;
}
const priceFilter: IFilter<RangeType> = {
    label: 'Price',
    name: 'price',
    //value: {_from: 200, _to: 550}
    value: {_from: 0, _to: 1000}
}
const locationFilter: IFilter<GeoFilterType> = {
    label: 'Location',
    name: 'location',
    value: {center: '', distance: 20, unit: DistanceUnits.Miles}
}
const guestsFilter: IFilter<number[]> = {
    label: 'Guests',
    name: 'guests',
    //value: [2,3,4]
    value: []
}
const typesFilter: IFilter<string[]> = {
    label: 'Type',
    name: 'type',
    //value: ['house', 'hotel']
    value: []
}
const ratingFilter: IFilter<RangeType> = {
    label: 'Rating',
    name: 'rating',
    //value: {_from: 4, _to: 5}
    value: {_from: 0, _to: 5}
}
export interface IFilters {
    price: IFilter<RangeType>;
    location: IFilter<GeoFilterType>;
    guests: IFilter<number[]>;
    types: IFilter<string[]>;
    rating: IFilter<RangeType>;
}
const filters: IFilters = {
    price: priceFilter,
    location: locationFilter,
    guests: guestsFilter,
    types: typesFilter,
    rating: ratingFilter
};

export type TFilter = {};

interface FiltersProviderProps {
    children: ReactNode;
}
export function FiltersProvider(props: FiltersProviderProps) {
    const {
        children
    } = props;
    const [filtersState, setFiltersState] = React.useState(filters);
    //const [activeFilters, setActiveFilters] = React.useState();
    const [priceFilter, setPriceFilter] = React.useState([0, 1000]);
    const [locationFilter, setLocationFilter] = React.useState();
    const [guestsFilter, setGuestsFilter] = React.useState();
    const [typesFilter, setTypesFilter] = React.useState([]);
    const [ratingFilter, setRatingFilter] = React.useState();
    return(
        <FiltersContext.Provider value={{filtersState, setFiltersState,priceFilter, setPriceFilter,locationFilter, setLocationFilter,guestsFilter, setGuestsFilter,typesFilter, setTypesFilter,ratingFilter, setRatingFilter}}>
            {children}
        </FiltersContext.Provider>
    );
}
export function useFilters() {
    const [activeFilters, setActiveFilters] = React.useState();
    const {filtersState, setFiltersState,priceFilter, setPriceFilter,locationFilter, setLocationFilter,guestsFilter, setGuestsFilter,typesFilter, setTypesFilter,ratingFilter, setRatingFilter} = React.useContext(FiltersContext);
    return {filtersState, setFiltersState,priceFilter, setPriceFilter,locationFilter, setLocationFilter,guestsFilter, setGuestsFilter,typesFilter, setTypesFilter,ratingFilter, setRatingFilter};
}
