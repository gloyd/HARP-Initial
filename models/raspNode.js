var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var RaspNodeSchema   = new Schema({
    id: String,
    name: String,
    ip: String
});

module.exports = mongoose.model('RaspNode', RaspNodeSchema);