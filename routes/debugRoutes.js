var appDebugRouter = function(app) {

 // test route to make sure everything is working (accessed at GET http://localhost:8080/api)
app.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

app.get("/hello", function(req, res) {
    res.send("Hello World");
});

}
 
module.exports = appDebugRouter;