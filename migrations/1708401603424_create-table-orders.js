/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.createTable('orders', {
    id: {
      type: 'VARCHAR(50)',
      primaryKey: true,
    },
    customer_id: {
      type: 'VARCHAR(50)',
      notNull: true,
    },
    user_id: {
      type: 'VARCHAR(50)',
      notNull: true,
    },
    note: {
      type: 'TEXT',
      notNull: false,
    },
    created_at: {
      type: 'TEXT',
      notNull: true,
    },
  });

  pgm.addConstraint('orders', 'fk_orders.customer_id_customers.id', 'FOREIGN KEY(customer_id) REFERENCES customers(id) ON DELETE CASCADE');
  pgm.addConstraint('orders', 'fk_orders.user_id_users.id', 'FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE');
};

exports.down = (pgm) => {
  pgm.dropTable('orders');
};
