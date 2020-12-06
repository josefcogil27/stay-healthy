const bcrypt = require('bcryptjs')

exports.seed = async knex => {
    console.log('Borrando datos...')

    try {
        await Promise.all([
            // Eliminar todos los registros
            knex('productos').del(),
            knex('categorias').del(),
            knex('clientes').del(),
            knex('pedidos').del(),
            knex('producto_pedido').del(),
            knex('usuarios').del(),
            knex('tipo_pago').del(),
            knex('info_bancaria').del(),
            knex('pago_movil').del(),
            knex('empresas').del(),
            knex('empresa_info_bancaria').del(),
            knex('empresa_pago_movil').del(),
            knex('ivas').del(),
            knex('roles').del(),
            
            // Categorias por defecto
            knex('categorias')
                .insert([
                    {
                        id: 1,
                        nombre: 'Categoria 1'
                    },
                    {
                        id: 2,
                        nombre: 'Categoria 2'
                    }
                ]),
            // fin

            // Tipos de pago por defecto
            knex('tipo_pago')
                .insert([
                    {
                        id: 1,
                        tipo: 'Dólar efectivo'
                    },
                    {
                        id: 2,
                        tipo: 'Pago móvil'
                    }
                ]),
            // fin

            // Roles por defecto
            knex('roles')
                .insert([
                    {
                        id: 1,
                        rol: 'Administrador'
                    },
                    {
                        id: 2,
                        rol: 'Usuario'
                    }
                ]),
            // fin

            // Información bancaria por defecto
            knex('info_bancaria')
                .insert({
                        id: 1,
                        nro_cuenta: '0000-00-000000-00-0000',
                        banco: 'Bancaribe',
                        tipo_cuenta: 'Ahorro',
                        cedula: '27938001',
                        titular: 'José Gil'
                    }),
            // fin

            // Pago movil por defecto
            knex('pago_movil')
                .insert({
                        id: 1,
                        nro_telefono: '0424-5904276',
                        cedula: '27938001',
                        banco: 'Bancaribe',
                        cod_banco: '0114'
                    }),
            // fin

            // Iva por defecto
            knex('ivas')
                .insert({
                        id: 1,
                        iva: 0.12,
                        porcentaje: '12%'
                    }),
            // fin

            // Relación empresa-info_bancaria por defecto (una a muchos)
            knex('empresa_info_bancaria')
                .insert({
                        id: 1,
                        id_empresa: 1,
                        id_info_bancaria: 1
                    }),
            // fin

            // Relación empresa-pago_movil por defecto (una a muchos)
            knex('empresa_pago_movil')
                .insert({
                        id: 1,
                        id_empresa: 1,
                        id_pago_movil: 1
                    }),
            // fin

            // Empresa por defecto
            knex('empresas')
                .insert({
                        id: 1,
                        nombre: 'Farmacia StayHealthy',
                        rif: 'J-0000-0000',
                        dolar: 1200000,
                        direccion: 'Av. Unda, Guanare',
                        id_iva: 1,
                        latitud: null,
                        longitud: null
                    }),
            // fin

            // Usuario por defecto
            knex('usuarios')
                .insert({
                    id: 1,
                    usuario: 'admin',
                    id_rol: 1,
                    clave: bcrypt.hashSync('12345', 10)
                }),
            // fin

            // Cliente por defecto
            knex('clientes')
                .insert({
                    id: 1,
                    cedula: 27938001,
                    nombre: 'José Gil',
                    telefono: '0424-5904276',
                    correo: 'josefcogil27@gmail.com',
                    direccion: 'Mesa de Cavacas, Barrio la Guajira',
                    id_usuario: 1
                }),
            // fin

            // Pedido por defecto
            knex('pedidos')
                .insert({
                    id: 1,
                    id_tipo_pago: 2,
                    id_cliente: 1,
                    referencia: 2541,
                    total: 999999.99,
                    fecha: new Date()
                }),
            // fin


            // Productos por defecto
            knex('productos')
            .insert([
                {
                    id: 1,
                    codigo: '01_001',
                    nombre: 'Producto 1',
                    descripcion: 'Descripción producto número 1',
                    imagen: null,
                    cantidad: 99,
                    id_categoria: 1,
                    precio_bs: 999.99,
                    precio_dolares: 5,
                    id_empresa: 1
                },
                {
                    id: 2,
                    codigo: '01_002',
                    nombre: 'Producto 2',
                    descripcion: 'Descripción producto número 2',
                    imagen: null,
                    cantidad: 199,
                    id_categoria: 2,
                    precio_bs: 9999.99,
                    precio_dolares: 10,
                    id_empresa: 1
                }
            ]),
            // fin

            // Relacion producto-pedido por defecto (mucho a mucho)
            knex('producto_pedido')
                .insert([
                    {
                        id: 1,
                        id_producto: 1,
                        id_pedido: 1
                    },
                    {
                        id: 2,
                        id_producto: 2,
                        id_pedido: 1
                    },
                ]),
            // fin
        ])
    } catch(error){
        console.log(`Ocurrió un error: ${error}`)
    }
}