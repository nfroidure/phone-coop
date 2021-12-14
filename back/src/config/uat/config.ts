import COMMON_CONFIG from '../common/config';
import type { AppConfigs } from '../common/config';

const CONFIG: AppConfigs = {
  ...COMMON_CONFIG,
  APP_BASE_URL: 'https://app.phone-coop.uat',
};

export default CONFIG;
