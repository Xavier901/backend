'use strict';

/**
 * company-stat service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::company-stat.company-stat');
