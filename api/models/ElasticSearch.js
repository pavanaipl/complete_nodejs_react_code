var elasticsearch = require('elasticsearch');
var client = new elasticsearch.Client({
    host:'localhost:9200',
    log:'trace'
});



// client.indices.create({
//      index: 'entityindex'
//  }, function(err, resp, status) {
//      if (err) {
//          console.log(err);
//      } else {
//          console.log("create", resp);
//      }
//  });

// for (i=1;i<=10;i++){
// client.index({
//      index: 'entityindex',
//      type: 'posts',
//      body: {
         
//             "entityName": "Entity1",
//             "entityTypes": "type 2"
//         },
        
//  }, function(err, resp, status) {
     
//      console.log(resp);
//  });

// }

// client.indices.create({
//      index: 'entityuserindex'
//  }, function(err, resp, status) {
//      if (err) {
//          console.log(err);
//      } else {
//          console.log("create", resp);
//      }
//  });


//  for (i=1;i<=10;i++){
// client.index({
//      index: 'transactionindex',
//      type: 'posts',
//      body: {
         
     
//     "firstName": "sumukh",
//     "LastName": "kumar",
//     "entityId": {
//       "id": "AWcclN1ph2OV23-jWOXW",
//      "entityName": "Entity1",
//      "entityTypes": "type 2"
//     },
//     "addresses": {
//       "addressLine1": "Halasuru",
//       "addressLine2": "5th stage",
//       "city": "Bangalore",
//       "State": "Karnataka",
//       "zip": 560045
//     }
  
//         },
        
//  }, function(err, resp, status) {
     
//      console.log(resp);
//  });

// }

// client.indices.create({
//      index: 'transactionindex'
//  }, function(err, resp, status) {
//      if (err) {
//          console.log(err);
//      } else {
//          console.log("create", resp);
//      }
//  });

//  for (i=1;i<=50;i++){
// client.index({
//      index: 'transactionindex',
//      type: 'posts',
//      body: {
//         "entityId": {
//                        "id": "AWcclN1ph2OV23-jWOXW",
//       "entityName": "Entity1",
//      "entityTypes": "type 2"

//                      },
//    "entityUser": {
//     "id" : "AWccptGCh2OV23-jWOY7", 
//     "firstName": "sumukh",
//     "LastName": "kumar",
//     "entityId": {
//       "id": "AWcclN1ph2OV23-jWOXW",
//       "entityName": "Entity1",
//      "entityTypes": "type 2"
//     },
//     "addresses": {
//       "addressLine1": "Halasuru",
//       "addressLine2": "5th stage",
//       "city": "Bangalore",
//       "State": "Karnataka",
//       "zip": 560045
//     }
  
//         },

//     "tranDescription": "Descirption3",
//     "transactionType": "Tran Type 2",
//     "transactionDate": "23/10/2018",
//     "transactionAmount": "60,000"



        
//         }
//  }, function(err, resp, status) {
     
//      console.log(resp);
//  });

// }