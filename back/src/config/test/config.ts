import COMMON_CONFIG from '../common/config';
import type { AppConfigs } from '../common/config';

const CONFIG: AppConfigs = {
  ...COMMON_CONFIG,
  APP_BASE_URL: 'http://app.phone.localhost:3000',
};

export default CONFIG;
