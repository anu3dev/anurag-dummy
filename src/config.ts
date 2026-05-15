/**
 * Application configuration
 */

export const config = {
  appName: 'Anurag Dummy App',
  version: '1.0.0',
  port: 3000,
  logLevel: 'info' as const,
  maxUsers: 100,
}

export function getConfig<K extends keyof typeof config>(key: K): (typeof config)[K] {
  return config[key]
}
