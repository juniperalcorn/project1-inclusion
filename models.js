const Sequelize = require('sequelize');

// Connect to DB
const db = new Sequelize({
    database: 'restaurant_inclusion_db',
    dialect: 'postgres',
    operatorsAliases: false,
});

const Reservations = db.define('reservations', {
    image: {
        type: Sequelize.STRING,
        field: 'restaurant'
    },
    description: {
        type: Sequelize.DATEONLY,
        field: 'date'
    },
    street: {
        type: Sequelize.DATE,
        field: 'time'
    },
})

const Name = db.define('name',{
    name:{
        type: Sequelize.STRING,
        field: 'name'
    }
})

Name.hasMany(Reservations)
Reservations.belongsTo(Name)

module.exports = {
    db,
    Reservations,
    Name
}