const { saveToursService, getToursServices, getTourIdService, updateToursByIdService, getTopViewedIdService, getCheapestToursService } = require("../services/tours.services");

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

        if (req.query.fields) {
            const quiredData = req.query.fields.split(',').join(' ');
            quries.fields = quiredData;
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


module.exports.getToursById = async (req, res, next) => {

    try {
        const { id } = req.params;
        const result = await getTourIdService(id)

        res.status(200).json({ status: true, message: 'id is found successfully', tours: result });
    } catch (err) {
        res.status(400).json({ status: false, error: err, message: 'its error bro..' })
    }
}
module.exports.updateToursById = async (req, res, next) => {

    try {
        const { id } = req.params;


        const result = await updateToursByIdService(id, req.body);



        if (!result.matchedCount) {

            return res.status(400).json({ status: 'failed', error: 'id is not matched' })
        }

        res.status(200).json({ status: true, message: 'id is updated successfully', tours: result });
    } catch (err) {
        res.status(400).json({ status: false, error: err, message: 'its error bro..' })
    }
}

module.exports.getTopViewedId = async (req, res, next) => {
    try {

        const result = await getTopViewedIdService();

        res.status(200).json({ status: true, message: 'successfully loaded all top viewed id', topViewed: result })

    } catch (err) {
        res.status(400).json({ status: false, error: err, message: 'its error bro..' })
    }
}
module.exports.getCheapestTours = async (req, res, next) => {
    try {

        const result = await getCheapestToursService();
        res.status(200).json({ status: true, message: 'successfully loaded all top viewed id', topViewed: result })

    } catch (err) {
        res.status(400).json({ status: false, error: err, message: 'its error bro..' })
    }
}