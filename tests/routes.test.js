// const request = require('supertest');
// const app = require('../app');

// describe('Test the root path', () => {
//     test('It should response the GET method', () => {
//         return request(app).get("/").then(response => {
//             expect(response.statusCode).toBe(200)
//         })
//     });
// })

const app = require('../app') // Link to your server file
const supertest = require('supertest')
const request = supertest(app)

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