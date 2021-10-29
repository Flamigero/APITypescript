import supertest from 'supertest';
import Server from '../models/server';

test('test city endpoint', async () => {
    const server = new Server();
    const app = server.app;
    const api = supertest(app);

    const response = await api
        .get('/api/city')
        .expect(200)
        .expect('Content-Type', /application\/json/)

    expect(response.body.total).toBe(5);
});

afterAll(() => {

});