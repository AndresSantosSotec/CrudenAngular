import { DataTypes } from 'sequelize';
import db from '../db/conexion';

const Producto = db.define('Producto', {
    name: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING
    },
    price: {
        type: DataTypes.DOUBLE
    },
    stock: {
        type: DataTypes.NUMBER
    }
}, {
    createdAt: false,
    updatedAt: false
});

export default Producto;