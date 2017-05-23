var isSystemError   = require('../index.js').isSystemError,
    expect          = require('chai').expect;

describe('isSystemError API Tests', function () {
    describe('Valid tests for isSystemError API', function () {
        var error = new Error();
        error.code = 'EACCES';

        it('Error with code EACCES is a valid system error', function () {
            expect(isSystemError(error)).to.be.true;
        });

        error.code = 'EADDRINUSE';
        it('Error with code EADDRINUSE is a valid system error', function () {
            expect(isSystemError(error)).to.be.true;
        });

        error.code = 'EBADRQC';
        it('Error with code EBADRQC is a valid system error', function () {
            expect(isSystemError(error)).to.be.true;
        });

        error.code = 'ECONNREFUSED'
        it('Error with code ECONNREFUSED is a valid system error', function () {
            expect(isSystemError(error)).to.be.true;
        });

        error.code = 'EDEADLOCK'
        it('Error with code EDEADLOCK is a valid system error', function () {
            expect(isSystemError(error)).to.be.true;
        });

         error.code = 'EEXIST'
        it('Error with code EEXIST is a valid system error', function () {
            expect(isSystemError(error)).to.be.true;
        });

        error.code = 'EDESTADDRREQ'
        it('Error with code EDESTADDRREQ is a valid system error', function () {
            expect(isSystemError(error)).to.be.true;
        });
    });

    describe('Invalid tests for isSystemError API', function () {
        it('Error is not a system error', function () {
            expect(isSystemError(new Error())).to.be.false;
        });

        it('TypeError is not a system error', function () {
            expect(isSystemError(new TypeError)).to.be.false;
        });

        it('URIError is not a system error', function () {
            expect(isSystemError(new URIError())).to.be.false;
        });

        it('EvalError is not a system error', function () {
            expect(isSystemError(new EvalError())).to.be.false;
        });

        it('ReferenceError is not a system error', function () {
            expect(isSystemError(new ReferenceError())).to.be.false;
        });

         it('RangeError is not a system error', function () {
            expect(isSystemError(new RangeError())).to.be.false;
        });
    });
});