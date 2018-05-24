const request = require('supertest'); //supertest only supports simple expect assertions so we need to include the full expect library
const expect = require('expect');

const app = require('./server').app;

describe('Server', ()=>{
    describe('on the root route', () => {
        it('should return hello world', (done) => {
            request(app)
            .get('/')
            .expect(404)
            .expect((res) => {
               expect(res.body).toInclude({name: 'Todo app'});
            })
            .end(done);
        });    
    });
    
    describe('on the users route', () => {
        it('should return users array containin 2 users', (done)=>{
            request(app)
            .get('/users')
            .expect((res)=>{
                expect(res.body.length).toBe(2);
                expect(res.body).toInclude({name: 'a', age: 1});
            })
            .end(done);
        });
    });
});



