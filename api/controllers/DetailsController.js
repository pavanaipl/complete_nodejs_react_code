/**
 * DetailsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {


    create: function (req, res) {

    //Reading input from request object
    
    let contract_id = req.param("contract_id");
    let contract_status = req.param("contract_status");
    let portfolio = req.param("portfolio");
    let portfolio_group = req.param("portfolio_group");
    let counterparty = req.param("counterparty");
    let dealer = req.param("dealer");
    let security_type = req.param("security_type");
    let security_group = req.param("security_group");
    let trade_date = req.param("trade_date");
    let settlement_days = req.param("settlement_days");
    let settlement_date = req.param("settlement_date");

    //Inserting record in mongoDB
    Details.create({
        contract_id: contract_id,
        contract_status: contract_status,
        portfolio: portfolio,
        portfolio_group: portfolio_group,
        counterparty: counterparty,
        security_type: security_type,
        security_group: security_group,
        trade_date: trade_date,
        settlement_days: settlement_days,
        settlement_date : settlement_date,
        dealer : dealer


    }).then(function (information) {
        //Returning success response
        return res.send({
            "success": true,
            "message": "Record created successfully",
            "data": information
        });
    }).catch(function (err) {
        sails.log.debug(err);
        //Returning failure response
        return res.send({
            "success": false,
            "message": "Unable to create record"
        });
    });
},

get: function (req, res) {

    Details.find()
        .then(function (information) {
            if(!information || information.length == 0) {
                return res.send({
                    "success": false,
                    "message": "No records found in DB"
                });
            }

            return res.send({
                "success": true,
                "message": "Records fetched",
                "data": information
            });
        })
        .catch(function (err) {
            sails.log.debug(err);
            return res.send({
                "success": false,
                "message": "Unable to fetch records"
            });
        });
},




update: function (req, res) {

    let tradeinformationid = req.param("id");
    console.log(tradeinformationid)
    let contract_id = req.param("contract_id");
    let contract_status = req.param("contract_status");
    let portfolio = req.param("portfolio");
    let portfolio_group = req.param("portfolio_group");
    let counterparty = req.param("counterparty");
    let security_type = req.param("security_type");
    let security_group = req.param("security_group");
    let trade_date = req.param("trade_date");
    let settlement_days = req.param("settlement_days");
    let settlement_date = req.param("settlement_date");
   	let dealer = req.param("dealer");

    //Update function takes two object input,
    //1. key:value pair for searching the record
    //2. key:value pairs for updating the records
    Details.update({id: tradeinformationid}, {contract_id: contract_id, contract_status: contract_status, portfolio: portfolio, portfolio_group: portfolio_group, counterparty:counterparty, security_type:security_type, security_group:security_group, trade_date:trade_date, settlement_days:settlement_days, settlement_date:settlement_date,  dealer : dealer})
        .then(function (information) {
            return res.send({
                "success": true,
                "message": "Record updated",
                "data": information
            });
  
        })
        .catch(function (err) {
            sails.log.debug(err);
            return res.send({
                "success": false,
                "message": "Unable to update record"
            });
        });
},

delete: function (req, res) {

    let tradeinformationid = req.param("id");

    //Delete function takes key:value pair by which it will search and delete the record


    Details.destroy({id: tradeinformationid})
        .then(function (information) {
            Details.find()
        .then(function (information) {
            if(!information || information.length == 0) {
                return res.send({
                    "success": false,
                    "message": "No records found in DB"
                });
            }

            return res.send({
                "success": true,
                "message": "Records fetched",
                "data": information
            });
        })
        .catch(function (err) {
            sails.log.debug(err);
            return res.send({
                "success": false,
                "message": "Unable to fetch records"
            });
        });
        })
        .catch(function (err) {
            sails.log.debug(err);
            return res.send({
                "success": false,
                "message": "Unable to delete record"
            });
        });




}
  

  

};

