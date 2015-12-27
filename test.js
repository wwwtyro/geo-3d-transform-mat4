'use strict';

var mat4 = require('gl-mat4');
var transform = require('./index.js');

var src = [[1, 0, 0], [0, 1, 0], [0, 0, 1]];

function cmp(a, b) {
    if (Math.abs(a[0] - b[0]) > 1e-10) {
        return false;
    }
    if (Math.abs(a[1] - b[1]) > 1e-10) {
        return false;
    }
    if (Math.abs(a[2] - b[2]) > 1e-10) {
        return false;
    }
    return true;
}

exports.testRotation = function(test) {
    test.expect(3);
    var rot = mat4.create();
    mat4.rotateX(rot, rot, Math.PI/2);
    var out = transform(src, rot);
    test.ok(cmp(out[0], [1,  0,  0]));
    test.ok(cmp(out[1], [0,  0,  1]));
    test.ok(cmp(out[2], [0, -1,  0]));
    test.done();
}

exports.testScale = function(test) {
    test.expect(3);
    var scale = mat4.create();
    mat4.scale(scale, scale, [2,2,2]);
    var out = transform(src, scale);
    test.ok(cmp(out[0], [2, 0, 0]));
    test.ok(cmp(out[1], [0, 2, 0]));
    test.ok(cmp(out[2], [0, 0, 2]));
    test.done();
}

exports.testTranslation = function(test) {
    test.expect(3);
    var trans = mat4.create();
    mat4.translate(trans, trans, [1,2,3]);
    var out = transform(src, trans);
    test.ok(cmp(out[0], [2, 2, 3]));
    test.ok(cmp(out[1], [1, 3, 3]));
    test.ok(cmp(out[2], [1, 2, 4]));
    test.done();
}
