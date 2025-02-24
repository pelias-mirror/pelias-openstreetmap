const _ = require('lodash');

// Split multi-value OSM tags into an Array
// https://wiki.openstreetmap.org/wiki/Talk:Semi-colon_value_separator
function parseSemicolonDelimitedValues(value) {
  return (_.isString(value) ? value : '')
    .split(';')
    .map(v => v.trim())
    .filter(v => v.length);
}

module.exports = parseSemicolonDelimitedValues;