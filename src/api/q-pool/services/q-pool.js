'use strict';

/**
 * q-pool service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::q-pool.q-pool');
