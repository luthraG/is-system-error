var isSystemError   = require('../index.js').isSystemError,
    expect          = require('chai').expect;

describe('isSystemError API Tests', function () {
    describe('Valid tests for isSystemError API', function () {
        var error = new Error();
        error.code = 'ENOENT';

        it('Error with code ENOENT is a valid system error', function () {
            expect(isSystemError(error)).to.be.true;
        });

        error.code = 'EADDRINUSE';
        it('Error with code EADDRINUSE is a valid system error', function () {
            expect(isSystemError(error)).to.be.true;
        });

        error.code = 'EMFILE';
        it('Error with code EMFILE is a valid system error', function () {
            expect(isSystemError(error)).to.be.true;
        });

        error.code = 'ECONNRESET'
        it('Error with code ECONNRESET is a valid system error', function () {
            expect(isSystemError(error)).to.be.true;
        });

        error.code = 'EMLINK'
        it('Error with code EMLINK is a valid system error', function () {
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