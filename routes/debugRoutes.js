var appDebugRouter = function(app) {
 
app.get("/hello", function(req, res) {
    res.send("Hello World");
});

}
 
module.exports = appDebugRouter;