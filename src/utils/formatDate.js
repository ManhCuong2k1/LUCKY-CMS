import moment from 'moment';

export const formatDate = (date) => moment(date).subtract(7, 'hour').format('DD-MM-YYYY HH:mm:ss');
