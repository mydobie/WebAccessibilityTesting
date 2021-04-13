// *********************** GET ENVIRONMENT BASED ON URL ************************* //
// Add non-prod environments here:
const environments = [
  { urlpattern: 'localhost', env: 'dev' },
  { urlpattern: '127.0.0.1', env: 'dev' },
];

const { hostname } = window.location;

export const isProd = (url?: string): boolean => {
  const host = url || hostname;

  return (
    environments.find((env) => host.includes(env.urlpattern)) === undefined // undefined if there isn't a match found
  );
};

export const whichEnv = (url?: string): string => {
  const host = url || hostname;
  const found = environments.find((env) => host.includes(env.urlpattern));
  return `Hostname: ${host}, Environment: ${
    found === undefined ? 'production' : found.env
  }`;
};

const isEnv = (envType: string, url?: string): boolean => {
  const host = url || hostname;
  const found = environments.find(
    (env) => host.includes(env.urlpattern) && env.env === envType
  );
  return found !== undefined;
};

export const isDev = (url?: string): boolean => isEnv('dev', url);

export const isLocalHost = (url?: string): boolean => {
  const host = url || hostname;
  return host.includes('localhost') || host.includes('127.0.0.1');
};
