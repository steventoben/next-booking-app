import {useFetchHook} from "./useFetchHook";
import {client} from "../drivers/elastic";

export function useQuery() {
    const {handleFetch, setFetchOptions} = useFetchHook('https://03d2734162e34614b2bad9beada8d7e8.us-east-2.aws.elastic-cloud.com:443/search-listings/_search', "POST", {
        /*bodyProvider: () => ({
            "query": {
                "range": {
                    "price": {
                        "gte": 600,
                        "lte": 200
                    }
                }
            }
        })*/
    })
    async function filterPriceRange(min: number, max: number) {
        setFetchOptions({
            body: JSON.stringify({
                "query": {
                    "range": {
                        "price": {
                            "gte": min,
                            "lte": max
                        }
                    }
                }
            })
        })
        /*const a = await client.search({
            query: {
                range: {
                    "price": {
                        gte: min,
                        lte: max
                    }
                }
            }
        });
        console.log(a);*/
        return await handleFetch();
    }
    return {
        filterPriceRange
    }
}
