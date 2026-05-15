/**
 * Simple logging service
 */

export type LogLevel = 'info' | 'warn' | 'error'

export class Logger {
  private context: string

  constructor(context: string) {
    this.context = context
  }

  info(message: string): void {
    this.log('info', message)
  }

  warn(message: string): void {
    this.log('warn', message)
  }

  error(message: string): void {
    this.log('error', message)
  }

  private log(level: LogLevel, message: string): void {
    const timestamp = new Date().toISOString()
    console.log(`[${timestamp}] [${level.toUpperCase()}] [${this.context}] ${message}`)
  }
}
