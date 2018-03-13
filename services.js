const createSuccessResponse = data => ({data, success: true});
const responseMiddleware = (req, res) => res.json(createSuccessResponse(req.data));

module.exports = {responseMiddleware};