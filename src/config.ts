/**
 * Application configuration — environment-aware
 */

export interface AppConfig {
  appName: string
  version: string
  port: number
  logLevel: 'debug' | 'info' | 'warn' | 'error'
  maxUsers: number
  env: 'development' | 'production'
}

export const config: AppConfig = {
  appName: 'Anurag Dummy App',
  version: '1.1.0',
  port: 8080,
  logLevel: 'debug',
  maxUsers: 500,
  env: 'development',
}

export function getConfig<K extends keyof AppConfig>(key: K): AppConfig[K] {
  return config[key]
}

export function isProduction(): boolean {
  return config.env === 'production'
}
