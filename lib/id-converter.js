const BASE58 = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
const BASE16 = '0123456789abcdef';
const baseX = require('base-x');
const bs58 = baseX(BASE58);
const bs16 = baseX(BASE16);

/* eslint-disable func-names */
function fromRawID(prefix) {
  return function () {
    return (`${prefix}_` || 'z_') + bs58.encode(bs16.decode(String(this._id)));
  };
}

function toRawID(prefix) {
  return function (id) {
    const splittedId = id.split('_');

    if (splittedId[0] !== prefix) return null;
    return bs16.encode(bs58.decode(splittedId[1]));
  };
}

module.exports = {
  fromRawID,
  toRawID,
};
