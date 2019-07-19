const { Names, Reservations } = require('../models')

const main = async () => {

    // delete database

    await Names.destroy({
        where: {}
    });

    await Reservations.destroy({
        where: {}
    });

    const name1 = await Name.create({
        name: 'Quavo'
    });

    const name2 = await Name.create({
        name: 'Seven'
    });

    const res1 = await Reservations.create({
        restaurant: 'Taco Bell',
        date: 7/30/19,
        time: 8,
    });

    const res2 = await Reservations.create({
        restaurant: 'Taco Bell',
        date: 08/01/19,
        time: 9,
    });

    const res3 = await Reservations.create({
        restaurant: 'Taco Bell',
        date: 08/02/19,
        time: 7,
    });

    const res4 = await Reservations.create({
        restaurant: 'Taco Bell',
        date: 08/21/19,
        time: 6,
    });

    //  Associations

    await res1.setUser(name1);
    await res2.setUser(name1);
    await res3.setUser(name1);
    await res4.setUser(name2);

    process.exit()
}

main();