/**
 * Math operations — extended with power and modulo
 */

export function add(a: number, b: number): number {
  return a + b
}

export function subtract(a: number, b: number): number {
  return a - b
}

export function multiply(a: number, b: number): number {
  return a * b
}

export function divide(a: number, b: number): number {
  if (b === 0) return Infinity
  return Math.round((a / b) * 100) / 100
}

export function power(base: number, exp: number): number {
  return Math.pow(base, exp)
}

export function modulo(a: number, b: number): number {
  return a % b
}

export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max)
}
