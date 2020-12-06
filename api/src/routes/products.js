import { Router } from 'express'
import * as controller from '../controllers/products-ctrl'

const router = Router()

router.get('/', controller.getProducts)

router.post('/', controller.addProduct)

router.get('/:productId', controller.getProductById)

router.put('/:productId', controller.editProduct)

router.delete('/:productId', controller.deleteProduct)

export default router