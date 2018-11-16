/**
 * Details.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

     contract_id: { type: 'string', required: true },
    contract_status: { type: 'string', required: true },
    portfolio: { type: 'string', required: true },
    portfolio_group: { type: 'string', required: true },
    counterparty: { type: 'string', required:true },
    security_type: { type: 'string', required:true },
    security_group: { type: 'string', required:true },
    dealer: { type: 'string',required:true},
    trade_date: { type: 'string',required:true},
    settlement_days: { type: 'number',required:true},
    settlement_date: { type: 'string',required:true}


  },

};

