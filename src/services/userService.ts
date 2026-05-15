/**
 * User management service — with validation and events
 */

export interface User {
  id: number
  name: string
  email: string
  status: 'active' | 'inactive' | 'banned'
  createdAt: Date
  updatedAt: Date
}

type UserEvent = { type: 'created' | 'deleted'; userId: number; at: Date }

let nextId = 1

export class UserService {
  private users: User[] = []
  private eventLog: UserEvent[] = []

  createUser(name: string, email: string): User {
    if (!email.includes('@')) throw new Error('Invalid email')
    if (this.users.some(u => u.email === email)) throw new Error('Email already exists')

    const now = new Date()
    const user: User = {
      id: nextId++,
      name: name.trim(),
      email: email.toLowerCase().trim(),
      status: 'active',
      createdAt: now,
      updatedAt: now,
    }
    this.users.push(user)
    this.eventLog.push({ type: 'created', userId: user.id, at: now })
    return user
  }

  getUser(id: number): User | undefined {
    return this.users.find(u => u.id === id)
  }

  getActiveUsers(): User[] {
    return this.users.filter(u => u.status === 'active')
  }

  getAllUsers(): User[] {
    return [...this.users]
  }

  deleteUser(id: number): boolean {
    const index = this.users.findIndex(u => u.id === id)
    if (index === -1) return false
    this.users.splice(index, 1)
    this.eventLog.push({ type: 'deleted', userId: id, at: new Date() })
    return true
  }

  getEventLog(): readonly UserEvent[] {
    return [...this.eventLog]
  }
}
