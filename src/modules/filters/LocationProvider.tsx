import React, {Context, ReactNode} from "react";

type Coordinates = {
    latitude: number;
    longitude: number;
};
type CoordinatesTuple = [latitude: number, longitude: number];

interface ILocation {
    alias: string;
    coordinates: CoordinatesTuple;
}
const loc: ILocation = {
    alias: `O'Fallon:Missouri:United_States`,
    coordinates: [38.7448832, -90.7051008]
};

export const LocationContext: Context<any> = React.createContext({});
interface LocationProvider {
    children: ReactNode;
}
export function LocationProvider(props: LocationProvider) {
    const {
        children
    } = props;
    const [locationState, setLocationState] = React.useState();
    return(
        <LocationContext.Provider value={{}}>
            {children}
        </LocationContext.Provider>
    );
}
