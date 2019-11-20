const app = require('../app');
const supertest = require('supertest');
const request = supertest(app);

describe('genius-swhf51-3000', function () {
    describe('routs', () => {
        it('should have an root route', async done => {
            const response = await request.get('/')
            expect(response.status).toBe(200)
            done()
        })

        it('should return 301 for swagger', async done => {
            const response = await request.get('/api/docs')
            expect(response.status).toBe(301)
            done()
        })

        it('should return 200 for /api/v1/refresh', async done => {
            const response = await request.post('/api/v1/refresh')
            expect(response.status).toBe(200)
            done()
        })

        it('should return 404 for unknown route', async done => {
            const response = await request.get('/something')
            expect(response.status).toBe(404)
            done()
        })
    });

    describe('Remotes', () => {
        describe('GET remotes', () => {

            it('should return 200', async done => {
                const response = await request.get('/api/v1/remotes')
                expect(response.status).toBe(200)
                done()
            });

            it('should return array', async done => {
                const response = await request.get('/api/v1/remotes')
                expect(Array.isArray(response.body)).toBeTruthy();
                expect(response.body.length).toBe(3);
                done()
            })

            it('should return a remote', async done => {
                const response = await request.get('/api/v1/remotes/GeniusSW-HF5.1-3000')
                const expected = {
                    name: 'GeniusSW-HF5.1-3000',
                    commands: ["POWER","VOL+","VOL-","MUTE","WOOF+","WOOF-","AUX","5.1","SURR+","SURR-","CEN+","CEN-","FRONT+","FRONT-","RESET"]
                };
                expect(response.body).toStrictEqual(expected);
                done()
            })
        });

    })
})