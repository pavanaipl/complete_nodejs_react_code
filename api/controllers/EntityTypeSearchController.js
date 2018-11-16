/**
 * EntitySearchController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {


	create: function (req, res) {

	let entity_type = req.param("entity_type");
	var elasticsearch = require('elasticsearch');
	var client = new elasticsearch.Client({
	host:'localhost:9200',
	log:'trace'
});
	client.search({
    index: 'entityindex',
    type: 'posts',
    body: {
        query: {
            match: {
                "entityTypes": entity_type
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


