const data = require("./data");

const fetchData = async (req, res) => {
    // fetch the data from the file data.js
    // and send it to the client
    try {
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

module.exports = {fetchData};