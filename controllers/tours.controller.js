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

        const result = await getToursServices()

        res.status(200).json({ status: true, message: 'data-found successfully', tours: result });
    } catch (err) {
        res.status(400).json({ status: false, error: err, message: 'its error bro..' })
    }
}