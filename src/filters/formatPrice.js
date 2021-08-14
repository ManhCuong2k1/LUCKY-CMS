/**
 * @param   {number} number
 * @returns {string}
 */
export default (value) => value.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
