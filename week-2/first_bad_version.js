/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (end) {
    let start = 1;
    let r = null;
    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
      if (isBadVersion(mid)) {
        r = mid;
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
    return r;
  };
};

/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let r = null;
    let s = 1;
    while (s <= n) {
      const m = Math.floor((s + n) / 2);
      if (isBadVersion(m)) {
        r = m;
        n = m - 1;
      } else s = m + 1;
    }
    return r;
  };
};

/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (end) {
    let result = null;
    let start = 1;
    while (start <= end) {
      const mid = Math.floor((start + end) / 2);
      if (isBadVersion(mid)) {
        result = mid;
        end = mid - 1;
      } else start = mid + 1;
    }
    return result;
  };
};
