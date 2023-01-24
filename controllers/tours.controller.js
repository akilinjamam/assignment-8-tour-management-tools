const { saveToursService, getToursServices } = require("../services/tours.services");

module.exports.saveTours = async (req, res, next) => {

    try {
        const bodyData = req.body;
        const result = await saveToursService(bodyData);
        result.logger();
        res.status(200).json({ status: true, tours: result });
    } catch (err) {
        res.status(400).json({ status: false, error: err, message: 'its error bro..' })
    }
}


module.exports.getTours = async (req, res, next) => {

    try {

        let filters = { ...req.query };
        console.log(req.query);
        let quries = {};
        if (req.query.field) {
            const quiredData = req.query.field.split(',').join(' ');
            quries.field = quiredData;
            console.log(quiredData);
        }



        if (req.query.page) {
            const { limit = 10, page = 1 } = req.query;
            const skip = (page - 1) * +limit;
            quries.skip = skip
            quries.limit = +limit
        };

        if (req.query.sort) {
            quries.sort = req.query.sort.split(',').join(' ');
        }


        const result = await getToursServices(filters, quries)

        res.status(200).json({ status: true, message: 'data-found successfully', tours: result });
    } catch (err) {
        res.status(400).json({ status: false, error: err, message: 'its error bro..' })
    }
}