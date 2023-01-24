const Tours = require("../models/tourServices")

module.exports.saveToursService = async (data) => {
    const tours = await Tours.create(data);

    return tours;
}

module.exports.getToursServices = async (filters, queries) => {
    const tours = await Tours.find(filters)
        .select(queries.field)
        .skip(queries.skip)
        .limit(queries.limit)
        .sort(queries.sort)

    const totalTourismPlace = await Tours.countDocuments(filters);
    const totalPage = Math.ceil(totalTourismPlace / queries.limit);

    if (!totalPage) {
        const totalPage = 'no page is given yet bro..'
        return { totalTourismPlace, totalPage, tours };
    }

    return { totalTourismPlace, totalPage, tours };
}