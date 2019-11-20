const app = require('../app');
const supertest = require('supertest');
const request = supertest(app);

jest.mock('lirc_node');

describe('genius-swhf51-3000', function () {
    beforeAll(() => {
        require('lirc_node').remotes = require(__dirname + '/data/remotes.json');
      });
      
    describe('routs', () => {
        test('should have an root route', async done => {
            const response = await request.get('/');
            expect(response.status).toBe(200);
            done();
        });

        test('should return 301 for swagger', async done => {
            const response = await request.get('/api/docs');
            expect(response.status).toBe(301);
            done();
        });

        test('should return 200 for /api/v1/refresh', async done => {
            const response = await request.post('/api/v1/refresh');
            expect(response.status).toBe(200);
            done();
        });

        test('should return 404 for unknown route', async done => {
            const response = await request.get('/something');
            expect(response.status).toBe(404);
            done();
        });
    });

    describe('remotes', () => {
        describe('GET', () => {
            test('should return 200', async done => {
                const response = await request.get('/api/v1/remotes');
                expect(response.status).toBe(200);
                done();
            });

            test('should return array', async done => {
                const response = await request.get('/api/v1/remotes');
                expect(response.status).toBe(200);
                expect(Array.isArray(response.body)).toBeTruthy();
                expect(response.body.length).toBe(3);
                done();
            })

            test('should return a remote', async done => {
                const response = await request.get('/api/v1/remotes/XboxOne');
                const expected = {
                    name: 'XboxOne',
                    commands: ["Power", "Up", "Select"]
                };
                expect(response.status).toBe(200);
                expect(response.body).toStrictEqual(expected);
                done();
            });

            test('should return a 404', async done => {
                const response = await request.get('/api/v1/remotes/XXX');
                expect(response.status).toBe(404);
                done();
            });
        });
        describe('POST', () => {
            test('should return 200', async done => {
                const response = await request.post('/api/v1/remotes/XboxOne/Power');
                expect(response.status).toBe(200);
                done();
            });

            test('invalid command should return 404', async done => {
                const response = await request.post('/api/v1/remotes/XboxOne/xxx');
                expect(response.status).toBe(404);
                done();
            });

            test('invalid remote should return 404', async done => {
                const response = await request.post('/api/v1/remotes/xxx/xxx');
                expect(response.status).toBe(404);
                done();
            });
        });
    });

    describe('remote', () => {
        describe('GET', () => {
            test('should return 200', async done => {
                const response = await request.get('/api/v1/remote');
                expect(response.status).toBe(200);
                done();
            });

            test('should return a remote', async done => {
                const response = await request.get('/api/v1/remote');
                const expected = {
                    name: 'GeniusSW-HF5.1-3000',
                    commands: ["POWER", "VOL+", "VOL-", "MUTE", "WOOF+", "WOOF-", "AUX", "5.1", "SURR+", "SURR-", "CEN+", "CEN-", "FRONT+", "FRONT-", "RESET"]
                };
                expect(response.status).toBe(200);
                expect(response.body).toStrictEqual(expected);
                done();
            });
        });
        describe('POST', () => {
            test('should return 200', async done => {
                const response = await request.post('/api/v1/remote/POWER');
                expect(response.status).toBe(200);
                done();
            });

            test('invalid command should return 404', async done => {
                const response = await request.post('/api/v1/remote/xxxx');
                expect(response.status).toBe(404);
                done();
            });
        });
    });
})