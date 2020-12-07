import Orders from '../models/Order'

const order = [
    'pedidos.id as cod_pedido',
    'pedidos.fecha',
    'pedidos.total',
    'pedidos.referencia',
    'clientes.cedula',
    'clientes.nombre as cliente',
    'clientes.telefono',
    'tipo_pago.tipo as tipo_pago'
]

const orderData = [
    'pedidos.id as cod_pedido',
    'pedidos.fecha',
    'pedidos.total',
    'productos.nombre as producto',
    'productos.precio_bs',
    'empresas.nombre as empresa',
    'ivas.iva',
    'ivas.porcentaje'
]

export const getOrders = async (req, res) => {
    await Orders
        .query()
        .select(order)
        .innerJoin('clientes', 'clientes.id', '=', 'pedidos.id_cliente')
        .innerJoin('tipo_pago', 'tipo_pago.id', '=', 'pedidos.id_tipo_pago')
        .orderBy('pedidos.id', 'DESC')
        .then(response => {
            res.status(200).json({
                message: 'Success',
                orders: response
            })
        })
        .catch(err => {
            console.log(err)
            res.status(400).json({
                message: 'Error',
                err
            })
        })
}

export const getOrderById = async (req, res) => {    
    
    await Orders
        .query()
        .select(orderData)
        .where('pedidos.id', '=', req.params.orderId)
        .innerJoin('producto_pedido', 'producto_pedido.id_pedido', '=', 'pedidos.id')
        .innerJoin('productos', 'productos.id', '=', 'producto_pedido.id_producto')
        .innerJoin('empresas', 'empresas.id', '=', 'productos.id_empresa')
        .innerJoin('ivas', 'ivas.id', '=', 'empresas.id_iva')
        
        .then(response => {
            if (response.length == 0) {
                res.status(404).json({
                    message: 'Not found'
                })

                return
            }

            let products = []
            let product = {}

            response.forEach(order => {
                product = {
                    nombre: order.producto,
                    precio: order.precio_bs,
                    empresa: order.empresa,
                    iva: order.iva,
                    porcentaje: order.porcentaje
                }

                products.push(product)
            });

            let orderBody = {
                id: response[0].cod_pedido,
                fecha: response[0].fecha,
                total: response[0].total,
                products
            }
            
            res.status(200).json({
                message: 'Success',
                orderBody
            })
        })
        .catch(err => {
            console.log(err)
            res.status(400).json({
                message: 'Error',
                err
            })
        })
}

export const addOrder = async (req, res) => {
    res.status(200).json({
        message: 'Add Order'
    })
}

export const editOrder = (req, res) => {
    res.status(200).json({
        message: 'Edit Order'
    })
}

export const deleteOrder = (req, res) => {
    res.status(200).json({
        message: 'Delete Order'
    })
}