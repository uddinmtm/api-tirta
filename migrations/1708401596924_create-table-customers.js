/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.createTable('customers', {
    id: {
      type: 'VARCHAR(50)',
      primaryKey: true,
    },
    name: {
      type: 'VARCHAR(150)',
      notNull: true,
    },
    number_plate: {
      type: 'VARCHAR(50)',
      notNull: true,
    },
    phone: {
      type: 'VARCHAR(50)',
      notNull: true,
    },
  });
};

exports.down = (pgm) => {
  pgm.dropTable('customers');
};
