/**
 * Structured logging service with log levels and colors
 */

export type LogLevel = 'debug' | 'info' | 'warn' | 'error'

const LEVEL_PRIORITY: Record<LogLevel, number> = {
  debug: 0,
  info: 1,
  warn: 2,
  error: 3,
}

export class Logger {
  private context: string
  private minLevel: LogLevel

  constructor(context: string, minLevel: LogLevel = 'info') {
    this.context = context
    this.minLevel = minLevel
  }

  debug(message: string, data?: unknown): void {
    this.log('debug', message, data)
  }

  info(message: string, data?: unknown): void {
    this.log('info', message, data)
  }

  warn(message: string, data?: unknown): void {
    this.log('warn', message, data)
  }

  error(message: string, data?: unknown): void {
    this.log('error', message, data)
  }

  private log(level: LogLevel, message: string, data?: unknown): void {
    if (LEVEL_PRIORITY[level] < LEVEL_PRIORITY[this.minLevel]) return

    const entry = {
      timestamp: new Date().toISOString(),
      level,
      context: this.context,
      message,
      ...(data !== undefined ? { data } : {}),
    }
    console.log(JSON.stringify(entry))
  }
}
