


var should = require('chai').should();
var is42 = require('../is42');


describe('#Handling of 42', function() {
    it('Verifies that 42 is 42', function() {
        is42.is42(42).should.equal(true);   
    });

    it('Verifies that 42.0 is 42', function() {
        is42.is42(42.0).should.equal(true);
    });

    it("verifies that '42' is 42", function() {
        is42.is42('42').should.equal(true);
    })

    it('verifies that "fortytwo" is 42', function() {
        is42.is42('fortytwo').should.equal(true);
    });

    it('verifies that "forty two" is 42', function() {
        is42.is42('forty two').should.equal(true);
    });

    it('verifies that "forty-two" is 42', function() {
        is42.is42('forty-two').should.equal(true);
    })
});

describe('#Handling of 42 in other languages', function() {
    it('Verifies that "quarantadue" is 42', function() {
        is42.is42("quarantadue").should.equal(true);   
    });

    it('Verifies that "quarante-deux" is 42', function() {
        is42.is42("quarante-deux").should.equal(true);
    });
});

describe('#Handling of things other than 42', function() { 
    it('Verifies that 55 is not 42', function() {
        is42.is42(55).should.equal(false);
    });

    it('Verifies that null is not 42', function() {
        is42.is42(null).should.equal(false);
    });

    it('Verifies that undefined is not 42', function() {
        is42.is42(undefined).should.equal(false);
    });
});
