var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var RaspNodeSchema   = new Schema({
    name: String,
    ip: String
});

module.exports = mongoose.model('RaspNode', RaspNodeSchema);