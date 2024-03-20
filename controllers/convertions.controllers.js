const Convertion = require('../models/convertions.models');

const createConvertion = async (req, res) => {
    console.log(req.body);
    try {
        const data = req.body;
        let answer = await new Convertion(data).save();
        res.status(201).json({message: "Convertion created", product: answer});

    } catch (error) {
        console.log(`ERROR: ${error.stack}`);
        res.status(400).json({msj:`ERROR: invalid body format`});
    }
}

module.exports = {
    createConvertion
}