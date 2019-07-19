const Sequelize = require('sequelize');

// Connect to DB
const db = new Sequelize({
    database: 'restaurant_inclusion_db',
    dialect: 'postgres',
    operatorsAliases: false,
});

const Reservations = db.define('reservations', {
    restaurant: {
        type: Sequelize.STRING,
        field: 'restaurant'
    },
    date: {
        type: Sequelize.DATEONLY,
        field: 'date'
    },
    time: {
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