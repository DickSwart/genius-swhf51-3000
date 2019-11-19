const app = require('../app');
const supertest = require('supertest');
const request = supertest(app);

describe('genius-swhf51-3000', function () {
    describe('Routs', () => {
        it('should have an root route', async done => {
            const response = await request.get('/')
            expect(response.status).toBe(200)
            done()
        })

        it('should return 404 for unknown route', async done => {
            const response = await request.get('/something')
            expect(response.status).toBe(404)
            done()
        })
    })

})