import { Router } from 'express'
import * as controller from '../controllers/users-ctrl'

const router = Router()

router.get('/', controller.getUsers)

router.post('/', controller.addUser)

router.get('/:userId', controller.getUserById)

router.put('/:userId', controller.editUser)

router.delete('/:userId', controller.deleteUser)

export default router