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

        it('should return 404 for unknown route', async done => {
            const response = await request.get('/something')
            expect(response.status).toBe(404)
            done()
        })
    })

})