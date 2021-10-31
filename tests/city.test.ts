import supertest from 'supertest';
import Server from '../models/server';

describe('test city endpoint', () => {
    let api: any;

    beforeEach(() => {
        const server = new Server();
        const app = server.app;
        api = supertest(app);
    })

    test('Get cities', async () => {
        const response = await api
            .get('/api/city')
            .expect(200)
            .expect('Content-Type', /application\/json/)
    
        expect(response.body.total).toBe(5);
    });

    test('Get city', async () => {
        const response = await api
            .get('/api/city/102')
            .expect(200)
            .expect('Content-Type', /application\/json/)

        expect(response.body.city).toBe('Palma de Mallorca');
    });

    test('Post cities', async () => {
        const response = await api
            .post('/api/city')
            .send({city: "Barcelona"})
            .expect(400)
            .expect('Content-Type', /application\/json/)

            expect(response.body.msg).toBe('City already exist');
    });

    test('Put cities', async () => {
        const response = await api
            .put('/api/city/102')
            .send({city: "Palma de Mallorca"})
            .expect(200)
            .expect('Content-Type', /application\/json/)

            expect(response.body.city.city).toBe('Palma de Mallorca');
    });
    
    afterAll(() => {
        
    });
});