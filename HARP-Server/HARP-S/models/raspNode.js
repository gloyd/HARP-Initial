var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var RaspNodeSchema   = new Schema({
    name: String,
    ip: String,
    port: String
});

module.exports = mongoose.model('RaspNode', RaspNodeSchema);