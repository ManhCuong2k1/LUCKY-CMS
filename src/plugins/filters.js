import Vue from 'vue';
import formatDate from '~/filters/formatDate';
import formatPrice from '~/filters/formatPrice';
import formatDuration from '~/filters/formatDuration';
import humanizeTime from '~/filters/humanizeTime';
import formatNumber from '~/filters/formatNumber';

export default () => {
    Vue.filter('formatDate', formatDate);
    Vue.filter('formatDuration', formatDuration);
    Vue.filter('humanizeTime', humanizeTime);
    Vue.filter('formatNumber', formatNumber);
    Vue.filter('formatPrice', formatPrice);
    Vue.filter('currency', {
        read(value) {
            return `$${value.toFixed(2)}`;
        },
        write(value) {
            const number = +value.replace(/[^\d.]/g, '');
            // eslint-disable-next-line no-restricted-globals
            return isNaN(number) ? 0 : number;
        },
    });
};
