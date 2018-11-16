module.exports = {
	 create: function (req, res) {

	let transaction_type = req.param("transaction_type");
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
            match: {
                "transactionType": transaction_type
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