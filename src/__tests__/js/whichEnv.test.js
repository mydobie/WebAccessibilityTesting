import {
  isProd,
  whichEnv,
  isDev,
  isTest,
  isQa,
  isLocalHost,
} from '../../js/whichEnv';

describe('WhichEnv tests', () => {
  test('IsProd returns false for a non-prod hostname', () => {
    expect(isProd('https://127.0.0.1')).toEqual(false);
  });

  test('IsProd returns true for a prod hostname', () => {
    expect(isProd('https://myURL.com')).toEqual(true);
  });

  test('WhichEnv returns description string for non production', () => {
    expect(whichEnv('https://localhost')).toEqual(
      'Hostname: https://localhost, Environment: dev'
    );
  });

  test('WhichEnv returns description string for production', () => {
    expect(whichEnv('https://myUrl.com')).toEqual(
      'Hostname: https://myUrl.com, Environment: production'
    );
  });

  test('IsDev returns false for non-dev hostname', () => {
    expect(isDev('https://devIamNot.myURL.com')).toEqual(false);
  });

  test('IsLocalHost returns true for a localhost', () => {
    expect(isLocalHost('IamNotLocal')).toEqual(false);
    expect(isLocalHost('localhost:3000')).toEqual(true);
    expect(isLocalHost('127.0.0.1')).toEqual(true);
  });
});
