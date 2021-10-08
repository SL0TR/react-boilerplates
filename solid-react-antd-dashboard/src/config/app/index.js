import development from './development';
import production from './production';
import defaultConfig from './default';

const configMap = {
  development,
  production,
};

export default Object.assign(
  configMap[process.env.REACT_APP_DEPLOY_SCOPE || 'development'],
  defaultConfig,
);
