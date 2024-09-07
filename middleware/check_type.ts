const checkType = (req, res, next) => {
    let type = req.query.type;
    if (type != "help") {
        res.status(403).json({
            msg : "Wrong person"
        })
    }
    else {
        next();
    }
}

