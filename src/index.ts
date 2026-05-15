import { greet } from './utils/greeting'
import { add, subtract } from './utils/math'
import { UserService } from './services/userService'
import { Logger } from './services/logger'

const logger = new Logger('App')

logger.info('Application starting...')
console.log(greet('Anurag'))
console.log(`2 + 3 = ${add(2, 3)}`)
console.log(`10 - 4 = ${subtract(10, 4)}`)

const userService = new UserService()
const user = userService.createUser('Anurag', 'anurag@example.com')
logger.info(`User created: ${user.name}`)
