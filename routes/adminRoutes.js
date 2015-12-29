var appAdminRouter = function(app) {

 app.route('/nodes')

    // create a bear (accessed at POST http://localhost:8080/api/bears)
    .post(function(req, res) {
        
    })

    // get all the bears (accessed at GET http://localhost:8080/api/bears)
    .get(function(req, res) {
       console.log('hi');
    });




// app.get("/createNode", function(req, res) {
//     res.send("Hello World");
// });

// app.get("/node", function(req, res) {
//     var nodeMock = {
//         "nodeId": "nraboy",
//         "password": "1234",
//         "twitter": "@nraboy"
//     }
//     if(!req.query.nodeId) {
//         return res.send({"status": "error", "message": "missing nodeId"});
//     } else if(req.query.nodeId != nodeMock.nodeId) {
//         return res.send({"status": "error", "message": "wrong nodeId"});
//     } else {
//         return res.send(nodeMock);
//     }
// });


// app.post("/node", function(req, res) {
//     if(!req.body.nodeId || !req.body.password || !req.body.twitter) {
//         return res.send({"status": "error", "message": "missing a parameter"});
//     } else {
//         return res.send(req.body);
//     }
// });

 
}
 
module.exports = appAdminRouter;

// createNode
// updateNode
// deleteNode
