'use strict';

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::q-pool.q-pool', () => ({
  async getOne(ctx, next) {
    try {
      const ids = ctx.query.ids;

      const arrayIds = ids ? ids.split(",").map(id => parseInt(id)) : [];

      const questions = await strapi.query('api::q-pool.q-pool').findMany({});

      const filteredData = questions.filter((data) => !arrayIds.includes(data.id));



      const randomIndex = Math.floor(Math.random() * filteredData.length);
      const randomItem = filteredData[randomIndex];

      ctx.body = randomItem;
    } catch (error) {
      console.error(error);
      ctx.throw(500, 'Internal server error');
    }
  },
}));