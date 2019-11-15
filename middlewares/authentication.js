const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
    let token = req.body.token || req.query.query || req.headers['x-access-token'];
}