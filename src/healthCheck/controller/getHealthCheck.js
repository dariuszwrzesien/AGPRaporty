'use strict';

const getStatusAction = (req, res) => {
    res.status(200).send('OK').end();
};

module.exports = getStatusAction;
