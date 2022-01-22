const axios = require('axios');

beforeEach(() => {
    axios.defaults.baseURL = 'http://api.postcodes.io';
});

test('test lat long', async done => {
    try {
        const response = await axios.get('/postcodes/' + 'SW1A 1AA');
        console.log(response.data)
        expect(response.data.result.latitude).toBe(51.501);
        expect(response.data.result.longitude).toBe(-0.14);
        done();
    } catch (error) {
        expect(error).toBe(null);
        done(error);
    }
});
