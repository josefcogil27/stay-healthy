import { Router } from 'express'
import * as controller from '../controllers/orders-ctrl'

const router = Router()

router.get('/', controller.getOrders)

router.post('/', controller.addOrder)

router.get('/:orderId', controller.getOrderById)

router.put('/:orderId', controller.editOrder)

router.delete('/:orderId', controller.deleteOrder)

export default router