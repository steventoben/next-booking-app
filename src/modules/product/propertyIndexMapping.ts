export {};
const esIndex = {
    "mappings": {
        "properties": {

        }
    }
};
const fieldMappings = {
    "properties": {
        "listing_name": {
            "type": "text"
        },
        "price": {
            "type": "integer"
        },
        "location": {
            "type": "geo_point"
        },
        "property_type": {
            "type": "keyword"
        },
        "guests": {
            "type": "integer"
        },
        "beds": {
            "type": "integer"
        },
        "baths": {
            "type": "integer"
        }
    }
};
