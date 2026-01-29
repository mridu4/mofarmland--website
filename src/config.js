// Site configuration
const isProd = process.env.NODE_ENV === 'production';

export const siteConfig = {
  basePath: isProd ? '/mofarmland--website' : '',
};

export function getImagePath(path) {
  return `${siteConfig.basePath}${path}`;
}
