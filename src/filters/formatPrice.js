/**
 * @param   {number} number
 * @returns {string}
 */
export default (value) => parseInt(value, 10).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
