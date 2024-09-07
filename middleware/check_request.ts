const checkRequest = (req, res, next) => {
    let username = req.headers.username;
    let password = req.headers.password;

    if (username != "vibhinn" && password != "vibhinn") {
        res.status(403).json({
            msg : "Incorrect Response"
        })
    }
    else {
        next();
    }
}
