/*
 * SPDX-License-Identifier: Apache-2.0
 */

'use strict';

const { Contract } = require('fabric-contract-api');

class BilheteContract extends Contract {

    async bilheteExists(ctx, bilheteId) {
        const buffer = await ctx.stub.getState(bilheteId);
        return (!!buffer && buffer.length > 0);
    }

    async createBilhete(ctx, bilheteId, value) {
        const exists = await this.bilheteExists(ctx, bilheteId);
        if (exists) {
            throw new Error(`The bilhete ${bilheteId} already exists`);
        }
        const asset = { value };
        const buffer = Buffer.from(JSON.stringify(asset));
        await ctx.stub.putState(bilheteId, buffer);
    }

    async readBilhete(ctx, bilheteId) {
        const exists = await this.bilheteExists(ctx, bilheteId);
        if (!exists) {
            throw new Error(`The bilhete ${bilheteId} does not exist`);
        }
        const buffer = await ctx.stub.getState(bilheteId);
        const asset = JSON.parse(buffer.toString());
        return asset;
    }

    async updateBilhete(ctx, bilheteId, newValue) {
        const exists = await this.bilheteExists(ctx, bilheteId);
        if (!exists) {
            throw new Error(`The bilhete ${bilheteId} does not exist`);
        }
        const asset = { value: newValue };
        const buffer = Buffer.from(JSON.stringify(asset));
        await ctx.stub.putState(bilheteId, buffer);
    }

    async deleteBilhete(ctx, bilheteId) {
        const exists = await this.bilheteExists(ctx, bilheteId);
        if (!exists) {
            throw new Error(`The bilhete ${bilheteId} does not exist`);
        }
        await ctx.stub.deleteState(bilheteId);
    }

}

module.exports = BilheteContract;
