import {
    cleanEnv, str, url, host, port,
} from 'envalid';

import { readEnv } from './utils';

const env = readEnv('.env');

const validEnv = cleanEnv(env, {
    APP_ENV: str({
        default: 'production',
        devDefault: 'local',
        desc: 'Application env',
    }),

    APP_URL: url({
        default: 'localhost',
        desc: 'App url',
    }),

    HOST: host({
        default: '0.0.0.0',
        desc: 'Application host',
    }),

    PORT: port({
        default: 3000,
        desc: 'Application port',
    }),

    API_HOST: str({
        default: '0.0.0.0',
        desc: 'API rewrite entrypoint',
    }),

    API_PATH: str({
        default: '/api',
        desc: 'API rewrite entrypoint',
    }),

    IMAGE_BASE_URL: url({
        desc: 'Base url for images',
    }),
}, {
    strict: true,
});

export const {
    APP_ENV,
    APP_URL,
    HOST,
    PORT,
    API_HOST,
    API_PATH,
    IMAGE_BASE_URL,
    isDev,
    isProduction,
} = validEnv;
