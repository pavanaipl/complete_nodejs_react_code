/**
 * TransactiondateSearchController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

	create: function (req, res) {

	let date_1 = req.param("date_1");
	let date_2 = req.param("date_2");
	var elasticsearch = require('elasticsearch');
	var client = new elasticsearch.Client({
	host:'localhost:9200',
	log:'trace'
});
	client.search({
    index: 'transactionindex',
    type: 'posts',
    body: {
        query: {
            range: {
                transactionDate:{
                	"gte" : date_1,
                	"lte" : date_2
                }

            }
        }
    }
}).then(function(resp) {
    
    return res.send({
                "success": true,
                "message": "Records fetched",
                "data": resp.hits
            });
}, function(err) {
    
    return res.send({
                "success": false,
                "message": "Unable to fetch records"
            });
});

  
 }
  

};

