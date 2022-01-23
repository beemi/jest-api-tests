const axios = require('axios');

beforeEach(() => {
    axios.defaults.baseURL = 'http://api.postcodes.io';
});

test('test lat long', async () => {
    const response = await axios.get('/postcodes/' + 'SW1A 1AA');
    console.log(JSON.stringify(response.data));
    expect(response.status).toBe(200);
    expect(response.data.status).toBe(200);
    expect(response.data.result.latitude).toBe(51.501);
    expect(response.data.result.longitude).toBe(-0.14);
});

test('test lat long with postcode lowercase', async () => {
    const response = await axios.get('/postcodes/' + 'rm176ey');
    console.log(JSON.stringify(response.data));
    expect(response.status).toBe(200);
});

test('test bulk lat long validations', async () => {
    const response = await axios.post('/postcodes/', {
        "postcodes": ["OX49 5NU", "M32 0JG", "NE30 1DP"]
    })
    console.log(JSON.stringify(response.data));
    expect(response.status).toBe(200);
    expect(response.data.result.length).toBe(3);
});

test('test bulk reverse Geocoding', async () => {
    const response = await axios.post('/postcodes/', {
        "geolocations": [{
            "longitude": 0.629834723775309,
            "latitude": 51.7923246977375
        }, {
            "longitude": -2.49690382054704,
            "latitude": 53.5351312861402,
            "radius": 1000,
            "limit": 5
        }]
    })

    console.log(JSON.stringify(response.data));
    expect(response.status).toBe(200);
});

