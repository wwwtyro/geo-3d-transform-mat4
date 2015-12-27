# geo-3d-transform-mat4

Transforms the positions of a few common geometry position formats by a
[gl-mat4](https://github.com/stackgl/gl-mat4) matrix.

Supported formats are:

* Flat arrays `[1,2,3,4,5,6]`
* Array of arrays `[[1,2,3], [4,5,6]]`
* Array of TypedArrays `[new Float32Array([1,2,3]), new Float32Array([4,5,6])]`
* TypedArray `new Float32Array([1,2,3,4,5,6])`
* [ndarray](https://www.npmjs.com/package/ndarray) `ndarray(new Float32Array([1,2,3,4,5,6]))`

## Install

```sh
npm install geo-3d-transform-mat4
```

## Example
```js
var mat4 = require('gl-mat4');
var tform = require('geo-3d-transform-mat4');

var positions = [
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1]
];

var scale = mat4.create();
mat4.scale(scale, scale, [2,2,2]);

var out = tform(positions, scale);

// out = [
//     [2, 0, 0],
//     [0, 2, 0],
//     [0, 0, 2]
// ]
```

## API
```js
var tform = require('geo-3d-transform-mat4');
```

#### `tform(positions, matrix4)`

Returns a copy of `positions` that has been transformed by `matrix4`. The output
format will be the same as `positions` was provided in.
