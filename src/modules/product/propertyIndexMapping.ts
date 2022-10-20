export {};
const esIndex = {
    "mappings": {
        "properties": {

        }
    }
};
const fieldMappings = {
    "properties": {
        "property_id": {
            "type": "keyword"
        },
        "listing_name": {
            "type": "text"
        },
        "image_data": {
            "type": "object",
            "enabled": false
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

const sampleDocs = [
    //ney york
    {
        "image_data": {
            "key": "greg-rivers-rChFUMwAe7E-unsplash.jpg"
        },
        "listing_name": "Isolated Oceanside House",
        "location": {
            "lat": 40.7128,
            "lon": 74.0060
        },
        "price": 600,
        "property_id": "pid0",
        "property_type": "house"
    },
    //lima
    {
        "image_data": {
            "key": "alejandra-cifre-gonzalez-ylyn5r4vxcA-unsplash.jpg"
        },
        "listing_name": "Contemporary Duplex",
        "location": {
            "lat": 12.0464,
            "lon": 77.0428
        },
        "price": 290,
        "property_id": "pid1",
        "property_type": "house"
    },
    //toronto
    {
        "image_data": {
            "key": "florian-schmidinger-b_79nOqf95I-unsplash.jpg"
        },
        "listing_name": "Penthouse Apartment in Downtown",
        "location": {
            "lat": 43.6532,
            "lon": 79.3832
        },
        "price": 1150,
        "property_id": "pid2",
        "property_type": "house"
    },
    //paris
    {
        "image_data": {
            "key": "john-fornander-y3_AHHrxUBY-unsplash.jpg"
        },
        "listing_name": "Beautiful Modern Home",
        "location": {
            "lat": 48.8566,
            "lon": 2.3522
        },
        "price": 390,
        "property_id": "pid3",
        "property_type": "house"
    },
    {
        "image_data": {
            "key": "pixasquare-4ojhpgKpS68-unsplash.jpg"
        },
        "listing_name": "Cozy Futuristic House near Park",
        "location": {
            "lat": 40.7128,
            "lon": 74.0060
        },
        "price": 400,
        "property_id": "pid3",
        "property_type": "house"
    }
];
