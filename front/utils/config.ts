import YError from 'yerror';

export const APP_ENVS = ['local', 'staging', 'production'] as const;
export type AppEnv = typeof APP_ENVS[number];
export type AppConfig = {
  apiURL: string;
  staticFolder: string;
  applicationVersion: string;
};

const applicationEnv: AppEnv =
  (process.env.NEXT_PUBLIC_APP_ENV as AppEnv) || 'production';

if (!APP_ENVS.includes(applicationEnv)) {
  throw new YError('E_BAD_APP_ENV', applicationEnv, APP_ENVS);
}

const applicationVersion = process.env.NEXT_PUBLIC_APP_VERSION || 'unknown';
const configs: Record<AppEnv, AppConfig> = {
  local: {
    apiURL: 'http://api.phone.localhost:8000/v0',
    staticFolder: '',
    applicationVersion,
  },
  staging: {
    apiURL: 'https://api.phone-coop.dev/v0',
    staticFolder: '',
    applicationVersion,
  },
  production: {
    apiURL: 'https://api.phone-coop.com/v0',
    staticFolder: '',
    applicationVersion,
  },
};

export default configs[applicationEnv] as AppConfig;
