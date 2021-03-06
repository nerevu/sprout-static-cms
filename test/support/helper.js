var chai   = require('chai'),
    path   = require('path'),
    fs     = require('fs'),
    Sprout = require('sprout');

if (fs.existsSync(path.join(process.cwd(), '.env'))) {
  require('dotenv').load()
}

var sprout = new Sprout(path.join(__dirname, '../config'));

var _path  = path.join(__dirname, '../fixtures');
var locals = require(path.join(_path, 'locals.json'))
var ENV    = process.env

locals.delivery_token   = ENV['DELIVERY_TOKEN']
locals.management_token = ENV['MANAGEMENT_TOKEN']
locals.space_id         = ENV['SPACE_ID']

global.chai   = chai;
global.sprout = sprout;
global.expect = chai.expect;
global._path  = _path
global.locals = locals
