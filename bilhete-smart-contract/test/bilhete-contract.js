/*
 * SPDX-License-Identifier: Apache-2.0
 */

'use strict';

const { ChaincodeStub, ClientIdentity } = require('fabric-shim');
const { BilheteContract } = require('..');
const winston = require('winston');

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

chai.should();
chai.use(chaiAsPromised);
chai.use(sinonChai);

class TestContext {

    constructor() {
        this.stub = sinon.createStubInstance(ChaincodeStub);
        this.clientIdentity = sinon.createStubInstance(ClientIdentity);
        this.logger = {
            getLogger: sinon.stub().returns(sinon.createStubInstance(winston.createLogger().constructor)),
            setLevel: sinon.stub(),
        };
    }

}

describe('BilheteContract', () => {

    let contract;
    let ctx;

    beforeEach(() => {
        contract = new BilheteContract();
        ctx = new TestContext();
        ctx.stub.getState.withArgs('1001').resolves(Buffer.from('{"value":"bilhete 1001 value"}'));
        ctx.stub.getState.withArgs('1002').resolves(Buffer.from('{"value":"bilhete 1002 value"}'));
    });

    describe('#bilheteExists', () => {

        it('should return true for a bilhete', async () => {
            await contract.bilheteExists(ctx, '1001').should.eventually.be.true;
        });

        it('should return false for a bilhete that does not exist', async () => {
            await contract.bilheteExists(ctx, '1003').should.eventually.be.false;
        });

    });

    describe('#createBilhete', () => {

        it('should create a bilhete', async () => {
            await contract.createBilhete(ctx, '1003', 'bilhete 1003 value');
            ctx.stub.putState.should.have.been.calledOnceWithExactly('1003', Buffer.from('{"value":"bilhete 1003 value"}'));
        });

        it('should throw an error for a bilhete that already exists', async () => {
            await contract.createBilhete(ctx, '1001', 'myvalue').should.be.rejectedWith(/The bilhete 1001 already exists/);
        });

    });

    describe('#readBilhete', () => {

        it('should return a bilhete', async () => {
            await contract.readBilhete(ctx, '1001').should.eventually.deep.equal({ value: 'bilhete 1001 value' });
        });

        it('should throw an error for a bilhete that does not exist', async () => {
            await contract.readBilhete(ctx, '1003').should.be.rejectedWith(/The bilhete 1003 does not exist/);
        });

    });

    describe('#updateBilhete', () => {

        it('should update a bilhete', async () => {
            await contract.updateBilhete(ctx, '1001', 'bilhete 1001 new value');
            ctx.stub.putState.should.have.been.calledOnceWithExactly('1001', Buffer.from('{"value":"bilhete 1001 new value"}'));
        });

        it('should throw an error for a bilhete that does not exist', async () => {
            await contract.updateBilhete(ctx, '1003', 'bilhete 1003 new value').should.be.rejectedWith(/The bilhete 1003 does not exist/);
        });

    });

    describe('#deleteBilhete', () => {

        it('should delete a bilhete', async () => {
            await contract.deleteBilhete(ctx, '1001');
            ctx.stub.deleteState.should.have.been.calledOnceWithExactly('1001');
        });

        it('should throw an error for a bilhete that does not exist', async () => {
            await contract.deleteBilhete(ctx, '1003').should.be.rejectedWith(/The bilhete 1003 does not exist/);
        });

    });

});
