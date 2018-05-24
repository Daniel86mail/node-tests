const utils = require('./utils');
const expect = require('expect');

describe('when adding', () =>{
    it('should add two numbers', () => {
        var res = utils.add(11,33);
        expect(res).toBe(44).toBeA('number');
    });
    it('should add async add two numbers', (done) => { //done makes the test wait for async
        utils.asyncAdd(4,3, (sum) => {
            expect(sum).toBe(7).toBeA('number');
            done();
        });
    });
});

describe('when square is used', ()=>{
    it('should square a number', () => {
        var res = utils.square(3);
        expect(res).toBe(9);
    });
});

describe('when manipulating strings', ()=>{
    it('should split the full name', () => {
        var user = {
            firstName: '',
            lastName: '',
            fullName: 'Daniel Ciuraru',
            age: 31
        };
        var res = utils.setName(user, user.fullName);
        expect(res.firstName).toEqual('Daniel');
        expect(res.lastName).toEqual('Ciuraru');
        expect(res).toInclude({
            age: 31
        });
    });
});


