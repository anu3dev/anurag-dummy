/**
 * Greeting utilities — multilingual support
 */

type Language = 'en' | 'es' | 'fr' | 'de'

const GREETINGS: Record<Language, string> = {
  en: 'Hello',
  es: 'Hola',
  fr: 'Bonjour',
  de: 'Hallo',
}

export function greet(name: string, lang: Language = 'en'): string {
  return `${GREETINGS[lang]}, ${name}! Welcome to the app.`
}

export function farewell(name: string): string {
  return `Goodbye, ${name}. Until we meet again!`
}

export function getTimeOfDay(): string {
  const hour = new Date().getHours()
  if (hour >= 5 && hour < 12) return 'morning'
  if (hour >= 12 && hour < 17) return 'afternoon'
  if (hour >= 17 && hour < 21) return 'evening'
  return 'night'
}
