import qs from 'qs';

const utils = {};

/**
 * 对象转url字符串
 * @param params
 * @param arrayFormat
 */
export function paramsSerializer(params, arrayFormat = 'repeat') {
  return qs.stringify(params, { arrayFormat });
}

export default utils;
