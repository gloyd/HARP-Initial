var appRouter = function(app) {
	// var actionRoutes = require("./actionRoutes.js")(app);
	var adminRoutes = require("./adminRoutes.js")(app);
	// var maintenanceRoutes = require("./maintenanceRoutes.js")(app);
	var debugRoutes = require("./debugRoutes.js")(app);

}

module.exports = appRouter;