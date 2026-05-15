/**
 * User management service — with search and update
 */

export interface User {
  id: string
  name: string
  email: string
  role: 'admin' | 'user' | 'guest'
  createdAt: Date
}

export class UserService {
  private users: Map<string, User> = new Map()
  private counter = 0

  createUser(name: string, email: string, role: 'admin' | 'user' | 'guest' = 'user'): User {
    const id = `usr_${++this.counter}`
    const user: User = { id, name, email, role, createdAt: new Date() }
    this.users.set(id, user)
    return user
  }

  getUser(id: string): User | undefined {
    return this.users.get(id)
  }

  findByEmail(email: string): User | undefined {
    return [...this.users.values()].find(u => u.email === email)
  }

  updateUser(id: string, updates: Partial<Pick<User, 'name' | 'email' | 'role'>>): User | undefined {
    const user = this.users.get(id)
    if (!user) return undefined
    Object.assign(user, updates)
    return user
  }

  getAllUsers(): User[] {
    return [...this.users.values()]
  }

  deleteUser(id: string): boolean {
    return this.users.delete(id)
  }

  get count(): number {
    return this.users.size
  }
}
