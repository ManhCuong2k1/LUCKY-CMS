import _mapValues from 'lodash/mapValues';
import _each from 'lodash/each';
import _isArray from 'lodash/isArray';
import _isObject from 'lodash/isObject';

export function collectServerError(errors) {
    return _mapValues(errors, '0');
}

export const convertToFormData = (data) => {
    const formData = new FormData();

    _each(data, (value, name) => {
        if (value == null) {
            return;
        }

        if (_isArray(value)) {
            _each(value, (item) => formData.append(`${name}[]`, item));
        } else if (_isObject(value)) {
            if (value instanceof File) {
                formData.append(name, value);
            } else {
                _each(value, (v, k) => formData.append(`${name}[${k}]`, v));
            }
        } else {
            formData.append(name, value);
        }
    });

    return formData;
};

export const validString = (rule, value, callback) => {
    if (value.length < rule.min || value.length > rule.max) {
        callback(new Error(`Length should be ${rule.min} to ${rule.max}`));
    } else {
        callback();
    }
};

export const validCate = (rule, value, callback) => {
    if (!value.id) {
        callback(new Error('Please select category'));
    } else {
        callback();
    }
};
