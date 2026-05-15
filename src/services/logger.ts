/**
 * Logging service — with file output and history
 */

export type LogLevel = 'info' | 'warn' | 'error' | 'fatal'

interface LogEntry {
  level: LogLevel
  context: string
  message: string
  timestamp: string
}

export class Logger {
  private context: string
  private static history: LogEntry[] = []
  private static MAX_HISTORY = 500

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

  fatal(message: string): void {
    this.log('fatal', message)
  }

  private log(level: LogLevel, message: string): void {
    const entry: LogEntry = {
      level,
      context: this.context,
      message,
      timestamp: new Date().toISOString(),
    }
    Logger.history.push(entry)
    if (Logger.history.length > Logger.MAX_HISTORY) Logger.history.shift()

    const prefix = `[${entry.timestamp}] [${level.toUpperCase().padEnd(5)}] [${this.context}]`
    console.log(`${prefix} ${message}`)
  }

  static getHistory(): readonly LogEntry[] {
    return [...Logger.history]
  }

  static clearHistory(): void {
    Logger.history = []
  }
}
