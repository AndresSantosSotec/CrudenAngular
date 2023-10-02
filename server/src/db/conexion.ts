import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('almacen', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  define: {
    timestamps: false, // Opcional: para desactivar la generación automática de timestamps en las tablas
  },
});

export default sequelize;
