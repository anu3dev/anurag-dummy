/**
 * Greeting utilities — enhanced with personalization
 */

export function greet(name: string, formal: boolean = false): string {
  if (formal) {
    return `Good day, Mr./Ms. ${name}. Welcome aboard.`
  }
  return `Hey ${name}! 👋 Welcome to the app.`
}

export function farewell(name: string): string {
  return `Take care, ${name}! See you next time 🙌`
}

export function getTimeOfDay(): string {
  const hour = new Date().getHours()
  if (hour < 6) return 'night'
  if (hour < 12) return 'morning'
  if (hour < 18) return 'afternoon'
  return 'evening'
}

export function greetByTime(name: string): string {
  return `Good ${getTimeOfDay()}, ${name}!`
}
