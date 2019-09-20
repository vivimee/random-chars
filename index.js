
const defaults = {
  pool: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
  length: 10,
};

function RandomStr({pool = defaults.pool, length = defaults.length} = {}) {
  let str = '';
  for (let i = 0; i < length; ++i) {
    const idx = Math.floor(Math.random()*pool.length);
    str += pool.charAt(idx);
  }
  return str;
}

module.exports = RandomStr;
