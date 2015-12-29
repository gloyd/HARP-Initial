var appRouter = function(app) {
 
app.get("/", function(req, res) {
    res.send("Hello World");
});

app.get("/account", function(req, res) {

});


app.post("/account", function(req, res) {
    
});


}
 
module.exports = appRouter;