function error(res, status, error, message, err) {
    console.log(`${err}`);
    res.status(status).json({
        status: status,
        error: error,
        message: message
    });
}

function json(res, json) {
    console.log("json send");
    res.status(200).json(json);
}

module.exports = {error, json}