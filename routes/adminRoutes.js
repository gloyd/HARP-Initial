var appRouter = function(app) {
 
app.get("/", function(req, res) {
    res.send("Hello World");
});

app.get("/node", function(req, res) {
    var nodeMock = {
        "nodeId": "nraboy",
        "password": "1234",
        "twitter": "@nraboy"
    }
    if(!req.query.nodeId) {
        return res.send({"status": "error", "message": "missing nodeId"});
    } else if(req.query.nodeId != nodeMock.nodeId) {
        return res.send({"status": "error", "message": "wrong nodeId"});
    } else {
        return res.send(nodeMock);
    }
});


app.post("/node", function(req, res) {
    if(!req.body.nodeId || !req.body.password || !req.body.twitter) {
        return res.send({"status": "error", "message": "missing a parameter"});
    } else {
        return res.send(req.body);
    }
});

 
}
 
module.exports = appRouter;