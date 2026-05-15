/**
 * Greeting utilities
 */

export function greet(name: string): string {
  return `Hello, ${name}! Welcome to the app.`
}

export function farewell(name: string): string {
  return `Goodbye, ${name}. See you later!`
}

export function getTimeOfDay(): string {
  const hour = new Date().getHours()
  if (hour < 12) return 'morning'
  if (hour < 17) return 'afternoon'
  return 'evening'
}
