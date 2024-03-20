const Convertion = require('../models/convertions.models');


const getConvertions = async (req, res) => {
    try {
        let answer = await Convertion.find({});
        res.status(200).json(answer);
    } catch (error) {
        console.log(`ERROR: ${error.stack}`);
        res.status(400).json({msj:`ERROR: invalid body format`});
    }
}

const createConvertion = async (req, res) => {
    try {
        const data = req.body;
        let answer = await new Convertion(data).save();
        res.status(201).json({message: "Convertion created", convertion: answer});

    } catch (error) {
        console.log(`ERROR: ${error.stack}`);
        res.status(400).json({msj:`ERROR: invalid body format`});
    }
}

const deleteConvertion = async (req, res) => {
    try {
        const convertionID = req.body.id;
        const convertion = await Convertion.findOne({id: convertionID});
            if (convertion != null) {
                await Convertion.deleteOne({id: convertionID})
                res.status(200).send("Convertion deleted: " + convertionID)

            } else if (convertion == null && req.body.id) {
                    res.status(404).send("Convertion not found: " + convertionID)

            } else if (convertion == null && !req.body.id) {
                    await Convertion.deleteMany({})
                    res.status(200).send("All convertions deleted.")
            }
    }
    catch (error) {
        console.log(`ERROR: ${error.stack}`);
        res.status(400).json({msj: error});
    }
}

module.exports = {
    getConvertions,
    createConvertion,
    deleteConvertion
}