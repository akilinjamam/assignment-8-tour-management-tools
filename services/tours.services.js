const Tours = require("../models/tourServices")

module.exports.saveToursService = async (data) => {
    const tours = await Tours.create(data);

    return tours;
}

module.exports.getToursServices = async () => {
    const tours = await Tours.find({})

    return tours;
}