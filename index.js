'use strict'

var geoid = require('geo-identify-position-format');
var geoconv = require('geo-convert-position-format');
var vec3 = require('gl-vec3');

module.exports = transform;

function transform(positions, m) {
    var oldfmt = geoid.identify(positions);
    var newpos = geoconv.convert(positions, geoid.ARRAY_OF_ARRAYS, 3);
    for (var i = 0; i < newpos.length; i++) {
        vec3.transformMat4(newpos[i], newpos[i], m);
    }
    newpos = geoconv.convert(newpos, oldfmt, 3);
    return newpos;
}
