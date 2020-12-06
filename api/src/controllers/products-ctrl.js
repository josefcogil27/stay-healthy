import Products from '../models/Product'

const data = [
    'productos.codigo',
    'productos.nombre', 
    'productos.precio_bs',
    'productos.descripcion',
    'productos.cantidad',
    'productos.imagen',
    'categorias.nombre as categoria',
    'empresas.nombre as empresa',
    'ivas.iva',
    'ivas.porcentaje'
]

export const getProducts = async (req, res) => {
    await Products
        .query()
        .select(data)
        .where('productos.id_empresa', '=', 1)
        .innerJoin('categorias', 'categorias.id', '=', 'productos.id_categoria')
        .innerJoin('empresas', 'empresas.id', '=', 'productos.id_empresa')
        .innerJoin('ivas', 'ivas.id', '=', 'empresas.id_iva')
        .then(response => {
            res.status(200).json({
                message: 'Success',
                products: response
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

export const getProductById = async (req, res) => {
    await Products
        .query()
        .select(data)
        .where('productos.id_empresa', '=', 1)
        .where('productos.id', '=', req.params.productId)
        .innerJoin('categorias', 'categorias.id', '=', 'productos.id_categoria')
        .innerJoin('empresas', 'empresas.id', '=', 'productos.id_empresa')
        .innerJoin('ivas', 'ivas.id', '=', 'empresas.id_iva')
        .then(response => {
            if (response.length == 0) {
                res.status(404).json({
                    message: 'Not found'
                })

                return
            }

            res.status(200).json({
                message: 'Success',
                products: response
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

export const addProduct = async (req, res) => {
    res.status(200).json({
        message: 'Add product'
    })
}

export const editProduct = async (req, res) => {
    res.status(200).json({
        message: 'Edit product'
    })
}

export const deleteProduct = async (req, res) => {
    res.status(200).json({
        message: 'Delete product'
    })
}