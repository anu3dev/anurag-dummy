/**
 * User management service
 */

export interface User {
  id: number
  name: string
  email: string
  createdAt: Date
}

let nextId = 1

export class UserService {
  private users: User[] = []

  createUser(name: string, email: string): User {
    const user: User = {
      id: nextId++,
      name,
      email,
      createdAt: new Date(),
    }
    this.users.push(user)
    return user
  }

  getUser(id: number): User | undefined {
    return this.users.find(u => u.id === id)
  }

  getAllUsers(): User[] {
    return [...this.users]
  }

  deleteUser(id: number): boolean {
    const index = this.users.findIndex(u => u.id === id)
    if (index === -1) return false
    this.users.splice(index, 1)
    return true
  }
}
