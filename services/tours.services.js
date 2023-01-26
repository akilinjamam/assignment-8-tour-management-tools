const Tours = require("../models/tourServices")


let count = 0;
async function allData(id) {
    const getAll = await Tours.findOne({ _id: id });
    return count = getAll.__v
}


module.exports.saveToursService = async (data) => {
    const tours = await Tours.create(data);

    return tours;
}

module.exports.getToursServices = async (filters, queries) => {
    const tours = await Tours.find(filters)
        .select(`${queries.fields} ${queries.fields === '_id' ? '_id' : '-_id'} `)
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

module.exports.getTourIdService = async (id) => {
    if (id) {
        console.log(count)
        let newCount = await allData(id);
        count = newCount
        count++
        console.log(count)
    }

    const newResult = await Tours.updateOne({ _id: id }, { $set: { __v: count } })
    console.log(newResult);

    const result = await Tours.findById({ _id: id });

    return result
}

module.exports.updateToursByIdService = async (id, data) => {
    const result = await Tours.updateOne(
        { _id: id },
        { $set: data },
        { runValidators: true });
    return result
}

module.exports.getTopViewedIdService = async () => {
    const result = await Tours.find({}).sort('__V').limit(3);
    return result;
}

module.exports.getCheapestToursService = async () => {
    const result = await Tours.find({}).sort('price').limit(3);
    return result;
}